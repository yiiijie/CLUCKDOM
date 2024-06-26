<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { object, string, ref as yupRef } from 'yup'
import Modal from '@/components/func-items/Modal.vue'
import {
    getAuth,
    updateProfile,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

const router = useRouter()
const showModal = ref(false)
const submitResult = ref('')
const modalImage = ref('')

const handleBtnText = computed(() => {
    return submitResult.value === '註冊成功！' ? '回登入頁' : '再試一次'
})

const schema = object({
    name: string().required('請填寫姓名'),
    email: string().email('請填寫有效的電子信箱').required('請填寫電子信箱'),
    password: string().required('請填寫密碼'),
    passwordConfirmation: string()
        .required('請再次填寫密碼')
        .oneOf([yupRef('password')], '密碼不匹配'),
})

const auth = getAuth()

const onSubmit = async (values, { resetForm }) => {
    try {
        // 模擬註冊時的延遲感
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const { email, password, name } = values
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user
        await updateProfile(user, { displayName: name })

        console.log('註冊成功', user)
        resetForm() // 重置表單
        submitResult.value = '註冊成功！'
        showModal.value = true // 跳出彈窗
        modalImage.value = '/images/modal/sign_up_successed.svg'

        // 模擬跳轉頁面前的延遲感
        await new Promise((resolve) => setTimeout(resolve, 2000))
        router.push('sign-in')
    } catch (error) {
        console.error('註冊失敗', error)
        submitResult.value = '註冊失敗'
        showModal.value = true
        modalImage.value = '/images/contact/modal/failed.svg'
    }
}
</script>

<template>
    <div>
        <main class="form_container">
            <div class="form_inner">
                <span class="form_title">會員註冊</span>
                <VeeForm
                    @submit="onSubmit"
                    v-slot="{ isSubmitting }"
                    :validation-schema="schema"
                    class="sign_up_form">
                    <div class="form_group">
                        <label for="name">姓名</label>
                        <VeeField
                            name="name"
                            type="text"
                            placeholder="請輸入您的姓名"
                            class="input" />
                        <ErrorMessage name="name" class="error_message" />
                    </div>
                    <div class="form_group">
                        <label for="email">帳號</label>
                        <VeeField
                            name="email"
                            type="email"
                            placeholder="請輸入您的E-mail"
                            class="input" />
                        <ErrorMessage name="email" class="error_message" />
                    </div>
                    <div class="form_group">
                        <label for="password">密碼</label>
                        <VeeField
                            name="password"
                            type="password"
                            placeholder="請輸入您的密碼 (至少6位數)"
                            class="input" />
                        <ErrorMessage name="password" class="error_message" />
                    </div>
                    <div class="form_group">
                        <label for="passwordConfirmation">確認密碼</label>
                        <VeeField
                            name="passwordConfirmation"
                            type="password"
                            placeholder="再次輸入您的密碼"
                            class="input" />
                        <ErrorMessage
                            name="passwordConfirmation"
                            class="error_message" />
                    </div>
                    <button
                        :disabled="isSubmitting"
                        type="submit"
                        class="sign_up_btn">
                        {{ isSubmitting ? '請稍候...' : '註冊' }}
                    </button>
                </VeeForm>
                <div class="form_footer">
                    <span class="question">我已經有會員帳號了？ </span>
                    <router-link to="/sign-in">
                        <span class="member_signin">回會員登入</span>
                    </router-link>
                </div>
            </div>
        </main>
        <!-- 表單送出後的通知彈窗 -->
        <Teleport to="body">
            <Modal
                :show="showModal"
                @close="showModal = false"
                :buttonText="handleBtnText"
                class="modal">
                <h3 class="modal_title">{{ submitResult }}</h3>
                <div class="modal_img">
                    <img :src="modalImage" alt="彈窗" />
                </div>
            </Modal>
        </Teleport>
    </div>
</template>

<style scoped lang="scss">
main.form_container {
    margin: 200px 0 120px;

    @include large_tablets {
        margin: 100px 0 120px;
    }

    div.form_inner {
        max-width: calc($basewidth - 500px);
        width: 85%;
        margin: auto;
        box-sizing: border-box;
        padding: 50px 100px;
        border-radius: 30px;
        background-color: #f1f1f1;

        @include tablets {
            padding: 50px 50px;
        }
        @include large_phones {
            width: 90%;
            padding: 50px 30px;
        }

        span.form_title {
            @include h4;
            display: block;
            margin-bottom: 20px;
            text-align: center;
        }
    }
}

form.sign_up_form {
    width: 100%;

    div.form_group {
        width: 100%;
        margin: 0 0 5%;
        align-items: center;

        label {
            @include paragraph;
            font-weight: $fWBold;
            margin-bottom: 20px;
        }

        input.input {
            @include content_font;
            width: 100%;
            padding: 20px;
            margin-bottom: 5px;
            box-sizing: border-box;
            border-radius: 8px;
            border: none;
            background-color: $normalColor;
        }

        input.input:focus {
            outline: none;
        }

        .error_message {
            @include small_font;
            color: $importantColor;
        }
    }

    button.sign_up_btn {
        @include sign_in_btn;
    }
}

div.form_footer {
    text-align: center;

    span.question {
        @include content_font;
        letter-spacing: 0.05rem;
    }

    span.member_signin {
        @include content_font;
        letter-spacing: 0.05rem;
        font-weight: $fWBold;
        color: #33a4e8;
    }
}

// 彈窗
.modal {
    z-index: 9998;

    h3.modal_title {
        @include h3;
        text-align: center;
    }

    div.modal_img {
        margin: auto;
        padding: 8% 0;
        width: clamp(200px, 80%, 400px);
    }
}
</style>
