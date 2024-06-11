import { ref, onMounted, onUnmounted } from 'vue'

export default function useNavbarVisibility() {
    const showNavbar = ref(false)
    const handleScroll = () => {
        showNavbar.value = window.scrollY > 250 ? true : false
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return {
        showNavbar,
    }
}
