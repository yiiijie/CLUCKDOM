<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
const userName = ref('');
const isDropdownOpen = ref(false);

const auth = getAuth();
const buttonText = ref('登入');


onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user)  {
      userName.value = user.displayName || ''; 
      buttonText.value = user.displayName || '登入';
    } else {
      userName.value = '';
      buttonText.value = '登入';
    }
  });
});

// 下拉式選單 登出選項
const openDropdown = () => {
  if (userName.value) {
    isDropdownOpen.value = true;
  }
}
const closeDropdown = () => {
  isDropdownOpen.value = false;
}

// 登出
const handleSignOut = () => {
  signOut(auth).then(() => {
    // 登出後重新導向首頁
    router.push('/');
    console.log('用戶已登出');
  }).catch((error) => {
    console.error('登出失敗：', error);
  });
}
// 登出
// const handleSignOut = async () => {
//   try {
//     await signOut(auth);
//     user.value = '';
//     isSignedIn.value = false;
//   } catch (error) {
//     console.log(error);
//   }
// };

</script>

<template>
    <button
    @mouseenter="openDropdown"
    type="button"
    class="login_btn">
        <font-awesome-icon icon="user" class="login_icon"/>
        {{ buttonText }}
    </button>
    <ul
    v-show="isDropdownOpen"
    @mouseleave="closeDropdown"
    class="dropdown_menu">
        <li @click="handleSignOut">登出</li>
    </ul>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/layout/login-icon";
</style>