import { ref, onMounted, onUnmounted } from "vue";

export default function useContentVisibility() {
  const isLargeTablet = ref(window.innerWidth > 768);
  const showContent = ref(false);

  // 監聽視窗大小變化，判斷當前視窗是否為768px以上
  const handleResize = () => {
    isLargeTablet.value = window.innerWidth > 768;
  };
  // 根據當前索引index的點擊狀態來切換內容的顯示與隱藏
  const toggleContentVisibility = (index) => {
    showContent.value = showContent.value === index ? false : index;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    isLargeTablet,
    showContent,
    toggleContentVisibility,
  };
}


