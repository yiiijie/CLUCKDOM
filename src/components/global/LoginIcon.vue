<script setup>


</script>

<template>
    <RouterLink :to="'/'">
        <button type="button" class="login_btn">
            <font-awesome-icon icon="user" class="login_icon"/>
            登入
        </button>
    </RouterLink>  
</template>

<style scoped lang="scss">
    @import "@/assets/scss/layout/login-icon";
</style>