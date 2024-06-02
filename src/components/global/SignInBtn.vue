<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const auth = getAuth()
const router = useRouter()
const userDisplayName = ref(null)

// 取得用戶名稱
onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userDisplayName.value = user.displayName
        } else {
            userDisplayName.value = null
        }
    })
})

const loginStatus = computed(() => {
    return userDisplayName.value ? userDisplayName.value : '登入'
})

const handleUserClick = () => {
    if (userDisplayName.value) {
        return
    } else {
        router.push('/sign-in')
    }
}

const handleSignOut = async () => {
    try {
        await signOut(auth)
        userDisplayName.value = null
    } catch (error) {
        console.error('登出失敗', error)
    }
}
</script>

<template>
    <div class="member_login" @click="handleUserClick">
        <div class="login_btn">
            <font-awesome-icon icon="user" />
            {{ loginStatus }}
        </div>
        <div v-if="userDisplayName" class="dropdown_menu">
            <a @click="handleSignOut">登出</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.member_login {
    position: relative;
    padding: 10px 20px;
    z-index: 1000;
    cursor: pointer;
    text-decoration: none;
    border-radius: 0 0 20px 20px;
    background-color: $normalColor;

    &:hover {
        div.dropdown_menu {
            display: block;
        }
    }

    div.login_btn {
        @include content_font;
    }

    div.dropdown_menu {
        display: none;
        @include content_font;
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        border-radius: 20px;
        border: 1px solid $borderColor;
        background-color: $normalColor;
        transition: 0.2s;

        &:hover {
            background-color: $lightGrayColor;
        }
    }
}
</style>
