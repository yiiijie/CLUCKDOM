<script setup>
import { ref } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseApp } from '@/services/firebase.js'
import { useRouter } from 'vue-router'
firebaseApp

const router = useRouter()
const auth = getAuth()
const user = ref(null)

// 登入
const signInWithGoogle = async () => {
    // 建立 Google 提供者物件的實例
    const provider = new GoogleAuthProvider()

    try {
        // 使用彈出視窗登入
        const result = await signInWithPopup(auth, provider)
        user.value = result.user
        router.push('/')
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.error('登入失敗:', errorCode, errorMessage)
    }
}
</script>

<template>
    <button @click="signInWithGoogle" class="google_third_party">
        <img
            class="google_icon"
            src="/images/sign-in/google_icon.png"
            alt="google_icon" />
        使用Google登入
    </button>
</template>

<style scoped lang="scss">
button.google_third_party {
    @include content_font;
    width: 100%;
    display: flex;
    padding: 8px 0;
    border: none;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: $normalColor;

    img.google_icon {
        width: 40px;
        margin-right: 5px;
    }
}
</style>
