import { ref } from 'vue'

export default function useNavbarVisibility() {
    const showNavbar = ref(false)

    const handleScroll = () => {
        if (scrollY > 250) {
            showNavbar.value = true
        } else {
            showNavbar.value = false
        }
    }

    window.addEventListener('scroll', handleScroll)

    return {
        showNavbar,
    }
}
