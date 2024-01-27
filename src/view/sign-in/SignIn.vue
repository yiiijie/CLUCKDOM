<script setup>


</script>

<template>
    <main class="form_container">
        <div class="form_inner">
            <span class="form_title">會員登入</span>
            <button type="button" class="google_third_party">
                <img class="google_icon" src="/images/sign-in/google_icon.png" alt="google_icon">
                使用Google登入
            </button>
            <hr class="divider">
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