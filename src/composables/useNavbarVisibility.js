import { ref } from "vue";

export default function useNavbarVisibility() {
  const showNavbar = ref(false);

  const handleScroll = () => {
    if (scrollY > 200) {
      showNavbar.value = true;
    } else {
      showNavbar.value = false;
    }
  };

  window.addEventListener("scroll", handleScroll);

  return {
    showNavbar,
  };
}
