<script setup>
import { ref } from 'vue';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "@/services/firebase.js";
import { useRouter } from "vue-router";
firebaseApp;

const router = useRouter();
const auth = getAuth();
const userName = ref('');

// 登入
const signInWithGoogle = async() => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
   .then((result) => {
    console.log(result.user);
    userName.value = result.user.displayName;
    router.push("/");
   
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


</script>

<template>
    <button @click="signInWithGoogle" class="google_third_party">
        <img class="google_icon" src="/images/sign-in/google_icon.png" alt="google_icon">
        使用Google登入
    </button>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/components/google-sign-in/google-sign-in";
</style>