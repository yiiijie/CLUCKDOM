<script setup>
import { ref } from 'vue';
import HeaderBanner from '@/components/header-banner/headerBanner.vue';
import Northern from '@/components/physical-channel/Northern.vue';
import Central from '@/components/physical-channel/Central.vue';
import Southern from '@/components/physical-channel/Southern.vue';
import Eastern from '@/components/physical-channel/Eastern.vue';
import OutlyingIslands from '@/components/physical-channel/OutlyingIslands.vue';
import GoogleMap from '@/components/google-map/GoogleMap.vue';
import Navbar from '@/components/global/Navbar.vue';
import useNavbarVisibility from '@/composables/useNavbarVisibility';

const { showNavbar } = useNavbarVisibility();
const currentTab = ref('北部');
const tabs = {
    '北部': Northern,
    '中部': Central,
    '南部': Southern,
    '東部': Eastern,
    '離島': OutlyingIslands,  
}; 

const changeTab = (tab) => {
    currentTab.value = tab;
}
</script>

<template>
    <div>
        <div v-if="showNavbar" class="navbar">
            <Navbar />
        </div>
        <section class="header_container">
            <header-banner
                bannerImage="/images/physical-channel/header_banner.jpg"
                sloganText="實體購買通路"
                sloganEnText="Physical Channel">
            </header-banner>
            <img class="header_wave" src="/images/header_wave.png" alt="wave">
        </section>
        <div class="title" data-aos="fade-up" data-aos-duration="1000">
            <h1>通路門市</h1>
            <span class="english_title">Stores</span>
        </div>
        <section class="channel_container" data-aos="fade-up" data-aos-duration="1000">
            <div class="btn_group">
                <button
                    v-for="( _, tab ) in tabs"
                    :key="tab"
                    :class="['tab_btn', { active: currentTab === tab }]"
                    @click="changeTab(tab)"
                >
                {{ tab }}
                </button>
            </div>
            <transition name="fade" mode="out-in">
                <component :is="tabs[currentTab]"></component>
            </transition>
            <div class="title">
                <h1>農場位置</h1>
                <span class="english_title">Farm Location</span>
            </div>
            <GoogleMap />
        </section>
    </div>
</template>

<style scoped lang="scss">
    section.header_container {
        position: relative;

        img.header_wave {
            @extend %header_wave;
        }
    }

    div.title {
        margin: 4% 0 3%;
        text-align: center;

        @include large_tablets {
            margin: 8% 0 6%;
        }

        h1 {
            @include h1;
        }
    
        span.english_title {
            @include paragraph_en;
        }
    }
    
    section.channel_container {
        max-width: $basewidth;
        width: 85%;
        margin: 0 auto 10%;

        @include tablets {
            margin: 0 auto 15%;
        }
        @include large_phones {
            margin: 0 auto 25%;
        }
        
        div.btn_group {
            display: flex;
            justify-content: space-between;

            button.tab_btn {
                @include paragraph;
                width: calc(20% - 15px);
                padding: 5px 40px;
                border-radius: 12px;
                color: $primaryTextColor;
                background-color: #F8F3EB;
                cursor: pointer;
                transition: .2s;

                @include tablets {
                    width: calc(20% - 10px);
                    padding: 10px 20px;
                }

                &:hover {
                    color: $normalColor;
                    background-color: $secondaryColor;
                    transition: .2s;
                }

                &.active {
                    background-color: $secondaryColor;
                    color: $normalColor;
                }
            }
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .15s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>