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
    <RouterLink to="/sign-in" class="member_login">
        <div class="login">
            <font-awesome-icon icon="user"/>
            {{ loginStatus }}
        </div>
        <div v-if="user" class="dropdown_menu">
            <a @click="handleSignOut">登出</a>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/layout/login-icon";
</style>