<script setup>
import { GoogleMap, CustomMarker } from 'vue3-google-map'

const center = {
    lat: 25.105428210753203,
    lng: 121.59192054662083,
}
</script>

<template>
    <!-- 地圖 -->
    <GoogleMap
        api-key="AIzaSyAOaG3cTY-wy0gI5WCCz7cQe8YFUjagJ1Y"
        class="google_map"
        :center="center"
        :zoom="15"
    >
        <!-- 自訂標記 -->
        <CustomMarker :options="{ position: center }">
            <div class="mark">
                <img src="/images/logo/google_map_mark.svg" class="mark_img" />
            </div>
        </CustomMarker>
    </GoogleMap>
</template>

<style scoped lang="scss">
.google_map {
    width: 100%;
    height: 500px;

    div.mark {
        text-align: center;

        img.mark_img {
            width: 90px;
            height: 90px;
        }
    }
}

:deep(.mapdiv) {
    border-radius: 30px;
}
</style>
