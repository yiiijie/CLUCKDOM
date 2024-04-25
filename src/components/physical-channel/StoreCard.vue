<script setup>
const props = defineProps({
    store: Object
});

</script>

<template>
    <div class="store_card">
        <a :href="store.googleUrl" class="store_name" target="_blank">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="icon"/>
            <p>{{ store.name }}</p>      
        </a>
        <span>{{ store.address }}</span>
        <span>{{ store.tel }}</span>
    </div>
</template>

<style scoped lang="scss">
div.store_card {
    width: calc(50% - 10px);
    padding: 30px;
    margin-bottom: 2%;
    border-radius: 12px;
    background-color: $normalColor;
    border: 2px solid $secondaryColor;
    box-sizing: border-box;

    @include large_tablets {
        border: 1px solid $secondaryColor;
    }
    @include tablets {
        width: 100%;
        margin-bottom: 3%;
    }
    
    a.store_name {
        @include paragraph;
        display: flex;
        align-items: center;
        color: $importantColor;
        text-decoration: underline;
        text-underline-offset: .6rem;
        text-decoration-thickness: 1px;
        transition: .15s;
        
        &:hover {
            color: $secondaryColor;
            transition: .15s;
        }

        p {
            margin-left: 10px;
            font-weight: 500;
        }
    }

    span {
        @include content_font;
        display: block;
    }
}
</style>