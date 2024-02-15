<script setup>
import { ref } from 'vue';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "@/services/firebase.js";
import { useRouter } from "vue-router";
firebaseApp;

const router = useRouter();
const auth = getAuth();
const user = ref(null);

// 登入
const signInWithGoogle = async() => {
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  signInWithPopup(auth, provider) // 彈窗
   .then((result) => {
    console.log(result.user);
    user.value = result.user;
    localStorage.setItem('user', JSON.stringify(result.user));
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