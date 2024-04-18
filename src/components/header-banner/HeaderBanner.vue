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
    div.container {
        position: relative;
        
        div.header_banner {
            position: relative;
            width: 100%;
            height: 85vh;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top center;

            @include large_tablets {
                height: 55vh;
            }
        }

        div.header_slogan {
            @include header_slogan_style;

            span.chinese {
                @include header_slogan_font;
                display: block;
                color: $normalBgColor;
            }

            span.english {
                @include header_slogan_en_font;
                color: $normalBgColor;
            }
        }
    }
</style>
