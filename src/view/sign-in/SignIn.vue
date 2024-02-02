<script setup>
import GoogleSignIn from '@/components/google-sign-in/GoogleSignIn.vue';

</script>

<template>
    <main class="form_container">
        <div class="form_inner">
            <span class="form_title">會員登入</span>

            <!-- google第三方登入 -->
            <GoogleSignIn />
            <hr class="divider">
            
            <!-- 帳密登入 -->
            <form class="sign_in_form">
                <div class="email">
                    <label for="email">帳號</label>
                    <input type="email" id="email" required>
                </div>
                <div class="password">
                    <label for="password">密碼</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/pages/sign-in";
</style>