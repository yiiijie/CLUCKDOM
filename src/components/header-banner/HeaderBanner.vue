<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    imageUrl: String,
})
</script>

<template>
    <div class="container">
        <div
            class="header_banner"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        ></div>
        <div class="header_slogan">
            <div class="chinese">
                <slot name="slogan_text"></slot>
            </div>
            <div class="english">
                <slot name="slogan_text_en"></slot>
            </div>
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
        color: $normalColor;

        .chinese {
            @include header_slogan_font;
        }

        .english {
            @include header_slogan_en_font;
        }
    }
}
</style>
