<script setup>
const props = defineProps(['bannerImage', 'sloganText', 'sloganEnText']);

</script>

<template>
    <div class="container">
        <div class="header_banner" :style="{ backgroundImage:`url('${ props.bannerImage }')` }">
        </div>
        <div class="header_slogan">
            <span class="chinese">{{ props.sloganText }}</span>
            <span class="english">{{ props.sloganEnText }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/header-banner/header-banner";
</style>
