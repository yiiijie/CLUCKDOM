<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()
const router = useRouter()
const user = ref(auth.currentUser) // 讀取google登入的用戶名稱
const userName = ref(localStorage.getItem('userName')) // 讀取一般帳密登入的用戶名稱

const loginStatus = computed(() => {
    return user.value ? user.value.displayName : userName.value || '登入'
})

const handleUserClick = () => {
    // 若用戶已登入，就無法再透過點擊導航至登入頁
    if (user.value || userName.value) {
        return
    } else {
        router.push('/sign-in')
    }
}

// 監聽身份驗證狀態的變化
onMounted(() => {
    onAuthStateChanged(auth, (loggedInUser) => {
        user.value = loggedInUser
    })
})

// 登出
const handleSignOut = () => {
    signOut(auth)
        .then(() => {
            localStorage.removeItem('user')
            localStorage.removeItem('userName')
            user.value = null
            userName.value = null
            console.log('用戶已登出')
        })
        .catch((error) => {
            console.error('登出失敗', error)
        })
}
</script>

<template>
    <div class="member_login" @click="handleUserClick">
        <div class="login_btn">
            <font-awesome-icon icon="user" />
            {{ loginStatus }}
        </div>
        <div v-if="user || userName" class="dropdown_menu">
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
    background-color: $hoverBtnColorW;

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
        background-color: $hoverBtnColorW;
        transition: 0.2s;

        &:hover {
            background-color: $footerBgColor;
        }
    }
}
</style>
