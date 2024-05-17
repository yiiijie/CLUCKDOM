<script setup>
import useUserAuthState from '@/composables/useUserAuthState'

const { user, userName, loginStatus, handleUserClick, handleSignOut } =
    useUserAuthState()
</script>

<template>
    <div class="member_login" @click="handleUserClick">
        <div class="login_btn">
            <font-awesome-icon icon="user" />
            {{ loginStatus }}
        </div>
        <div v-if="user || userName" class="dropdown_menu">
            <a @click="handleSignOut">登出</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.member_login {
    position: relative;
    padding: 10px 20px;
    z-index: 1000;
    cursor: pointer;
    text-decoration: none;
    border-radius: 0 0 20px 20px;
    background-color: $hoverBtnColorW;

    &:hover {
        div.dropdown_menu {
            display: block;
        }
    }

    div.login_btn {
        @include content_font;
    }

    div.dropdown_menu {
        display: none;
        @include content_font;
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        border-radius: 20px;
        border: 1px solid $borderColor;
        background-color: $hoverBtnColorW;
        transition: 0.2s;

        &:hover {
            background-color: $footerBgColor;
        }
    }
}
</style>
