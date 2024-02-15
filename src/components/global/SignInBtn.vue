<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();
const router = useRouter();

const user = ref(JSON.parse(localStorage.getItem('user')));
const loginStatus = computed(() => {
    return user.value ? user.value.displayName : '登入';
})

const handleUserClick = () => {
  // 若用戶已登入，則不執行路由導航至登入頁
  if(user.value) {
    return;
  } else {
    // 否則，導航至登入頁
    router.push('/sign-in');
  }
}

// onMounted(() => {
//   onAuthStateChanged(auth, (user) => {
//     if (user)  {
//       userName.value = user.displayName || ''; 
//       buttonText.value = user.displayName || '登入';
//     } else {
//       userName.value = '';
//       buttonText.value = '登入';
//     }
//   });
// });

// 下拉式選單 登出
// const toggleDropdown = () => {
//   if (user.value) {
//     isDropdownOpen.value = !isDropdownOpen.value;
//   } else {
//     router.push('/login'); 
//   }
// }

// 登出
const handleSignOut = () => {
  signOut(auth).then(() => {
    localStorage.removeItem('user');
    user.value = null;
    router.push('/');
    console.log('用戶已登出');
  }).catch((error) => {
    console.error('登出失敗：', error);
  });
}

</script>

<template>
    <div class="member_login" @click="handleUserClick">
      <div class="login_btn">
          <font-awesome-icon icon="user"/>
          {{ loginStatus }}
      </div>
      <div v-if="user" class="dropdown_menu">
          <a @click="handleSignOut">登出</a>
      </div>
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/layout/signin-btn";
</style>