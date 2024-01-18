<script setup>


</script>

<template>
    <RouterLink :to="'/'">
        <button type="button" class="cart_btn">
            <font-awesome-icon icon="cart-shopping" class="cart_icon"/>
        </button>
    </RouterLink> 
</template>

<style scoped lang="scss">
    @import "@/assets/scss/layout/cart-icon";
</style>