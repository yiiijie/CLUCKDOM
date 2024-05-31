<script setup></script>

<template>
    <div class="cart_btn">
        <font-awesome-icon icon="cart-shopping" />
    </div>
</template>

<style scoped lang="scss">
div.cart_btn {
    @include content_font;
    position: relative;
    padding: 10px 20px;
    z-index: 1000;
    cursor: pointer;
    border-radius: 0 0 20px 20px;
    color: $normalColor;
    background-color: $primaryColor;
}
</style>
