import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'

export default function useUserAuthState() {
    const auth = getAuth()
    const router = useRouter()
    // 讀取google登入的用戶名稱
    const user = ref(auth.currentUser)
    // 讀取一般帳密登入的用戶名稱
    const userName = ref(localStorage.getItem('userName'))

    const loginStatus = computed(() => {
        return user.value ? user.value.displayName : userName.value || '登入'
    })

    const mobileLoginStatus = computed(() => {
        return user.value
            ? `${user.value.displayName}，歡迎回來！`
            : userName.value || '會員登入'
    })

    const handleUserClick = () => {
        // 若用戶已登入，就無法再透過點擊導航至登入頁
        if (user.value || userName.value) {
            return
        } else {
            router.push('/sign-in')
        }
    }

    // 監聽身份驗證狀態的變化
    onMounted(() => {
        onAuthStateChanged(auth, (loggedInUser) => {
            user.value = loggedInUser
        })
    })

    // 登出
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('user')
                localStorage.removeItem('userName')
                user.value = null
                userName.value = null
            })
            .catch((error) => {
                console.error('登出失敗', error)
            })
    }

    return {
        user,
        userName,
        loginStatus,
        handleUserClick,
        handleSignOut,
        mobileLoginStatus,
    }
}
