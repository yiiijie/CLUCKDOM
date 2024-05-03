<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
import { object, string } from 'yup'
import Modal from '@/components/func-items/Modal.vue'

const showModal = ref(false)
const submitResult = ref('')
const modalImage = ref('')
const handleBtnText = computed(() => {
    return submitResult.value === '我們收到表單囉！' ? '關閉' : '再試一次'
})

// vee-validate yup驗證
const schema = object({
    email: string().email('請填寫有效的電子信箱').required('必須填寫電子信箱'),
    name: string().required('必須填寫姓名'),
    phoneNumber: string()
        .required('必須填寫聯絡電話')
        .matches(
            /^(09\d{8})$|^(\d{1,3}\d{6,8})$|^(\d{1,3}-\d{6,8})$/,
            '電話號碼格式不正確，請輸入正確格式'
        ),
    message: string().required('必須填寫聯繫的內容'),
})

// 提交表單時的非同步函式
async function onSubmit(values, { resetForm }) {
    try {
        // 模擬表單送出的延遲感
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const response = await axios.post(
            'http://localhost:3333/api/test',
            values
        )
        console.log(response)
        submitResult.value = '我們收到表單囉！'
        showModal.value = true // 跳出彈窗
        modalImage.value = '/images/modal/form_successed.svg'
        resetForm() // 重置表單
    } catch (error) {
        console.error('表單送出失敗')
        submitResult.value = '表單送出失敗'
        showModal.value = true
        modalImage.value = '/images/modal/form_failed.svg'
    }
}
</script>

<template>
    <div>
        <main class="form_container">
            <section class="form_inner">
                <h1 class="title">聯絡我們</h1>
                <span class="english_title">Contact Us</span>
                <VeeForm
                    @submit="onSubmit"
                    v-slot="{ isSubmitting }"
                    :validation-schema="schema"
                    class="form"
                >
                    <dl>
                        <div class="form_group">
                            <dt>
                                <label for="question_type">問題類型</label>
                            </dt>
                            <dd>
                                <label for="product_issue" class="checkbox">
                                    <VeeField
                                        name="question_type"
                                        type="checkbox"
                                        value="product_issue"
                                        id="product_issue"
                                    />
                                    <span class="question">產品問題</span>
                                </label>
                                <label for="order_issue" class="checkbox">
                                    <VeeField
                                        name="question_type"
                                        type="checkbox"
                                        value="order_issue"
                                        id="order_issue"
                                    />
                                    <span class="question">訂購問題</span>
                                </label>
                                <label for="return_issue" class="checkbox">
                                    <VeeField
                                        name="question_type"
                                        type="checkbox"
                                        value="return_issue"
                                        id="return_issue"
                                    />
                                    <span class="question">退換貨問題</span>
                                </label>
                                <label for="other" class="checkbox">
                                    <VeeField
                                        name="question_type"
                                        type="checkbox"
                                        value="other"
                                        id="other"
                                    />
                                    <span class="question">其他</span>
                                </label>
                            </dd>
                        </div>
                        <div class="form_group">
                            <dt>
                                <label for="name">姓名</label>
                                <span class="required">必填</span>
                            </dt>
                            <dd>
                                <VeeField
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="請輸入您的姓名"
                                    class="input"
                                />
                                <ErrorMessage
                                    name="name"
                                    class="error_message"
                                />
                            </dd>
                        </div>
                        <div class="form_group">
                            <dt>
                                <label for="email">信箱</label>
                                <span class="required">必填</span>
                            </dt>
                            <dd>
                                <VeeField
                                    id="email"
                                    name="email"
                                    placeholder="請輸入您的電子信箱E-mail"
                                    class="input"
                                />
                                <ErrorMessage
                                    name="email"
                                    class="error_message"
                                />
                            </dd>
                        </div>
                        <div class="form_group">
                            <dt>
                                <label for="phone_number">聯絡電話</label>
                                <span class="required">必填</span>
                            </dt>
                            <dd>
                                <VeeField
                                    id="phone_number"
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="請輸入市話或手機號碼"
                                    class="input"
                                />
                                <ErrorMessage
                                    name="phoneNumber"
                                    class="error_message"
                                />
                            </dd>
                        </div>
                        <div class="form_group">
                            <dt>
                                <label for="textarea">內容</label>
                                <span class="required">必填</span>
                            </dt>
                            <dd>
                                <VeeField
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    placeholder="請寫下您想與我們聯繫的內容"
                                />
                                <ErrorMessage
                                    name="message"
                                    class="error_message"
                                />
                            </dd>
                        </div>
                    </dl>
                    <button
                        :disabled="isSubmitting"
                        class="submit_btn"
                        type="submit"
                    >
                        {{ isSubmitting ? '提交中...' : '確認送出' }}
                    </button>
                </VeeForm>
            </section>
            <img class="wave" src="/images/contact/wave.svg" alt="wave" />
        </main>
        <!-- 表單送出後的通知彈窗 -->
        <Teleport to="body">
            <Modal
                :show="showModal"
                @close="showModal = false"
                :buttonText="handleBtnText"
            >
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
    background: url('/images/contact/bg_eggs.svg') repeat;
    position: relative;
}

img.wave {
    position: absolute;
    bottom: 0;
    z-index: 20;
}

section.form_inner {
    max-width: calc($basewidth - 300px);
    width: 85%;
    margin: auto;
    padding: 270px 0 220px;

    @include large_tablets {
        padding: 100px 0 120px;
    }

    h1.title {
        @include h1;
        text-align: center;
    }

    span.english_title {
        @include paragraph_en;
        display: block;
        margin-bottom: 5%;
        text-align: center;
    }

    form.form {
        width: 100%;
        padding: 70px 100px;
        border-radius: 30px;
        box-sizing: border-box;
        background-color: $normalColor;

        @include large_tablets {
            padding: 60px 50px;
        }
        @include large_phones {
            padding: 50px 20px;
        }

        div.form_group {
            width: 100%;
            margin-bottom: 6%;
            display: flex;
            align-items: center;

            @include tablets {
                display: block;
                margin-bottom: 6%;
            }
            @include large_phones {
                margin-bottom: 12%;
            }

            dt {
                width: 25%;
                align-items: center;

                @include tablets {
                    width: 100%;
                    padding-bottom: 4%;
                }

                span.required {
                    @include small_font;
                    margin-left: 12px;
                    padding: 6px 10px;
                    color: $normalColor;
                    border-radius: 50px;
                    background-color: $secondaryColor;
                }

                label {
                    @include paragraph;
                    line-height: 0;
                    font-weight: $fWBold;
                }
            }

            dd {
                flex: 1;

                input.input,
                textarea {
                    width: 100%;
                    padding: 25px;
                    box-sizing: border-box;
                    border-radius: 8px;
                    border: none;
                    background-color: #f7f6f5;
                }

                input.input:focus,
                textarea:focus {
                    outline: none;
                }

                textarea {
                    min-height: 250px;
                    resize: vertical;
                }

                .error_message {
                    @include small_font;
                    color: $importantColor;
                }

                label.checkbox {
                    display: inline-flex;
                    margin-right: 3%;
                    align-items: center;
                    cursor: pointer;
                }

                input[type='checkbox'] {
                    appearance: none;
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                    margin-right: 10px;
                    border-radius: 6px;
                    border: 1.5px solid $secondaryColor;
                }

                input[type='checkbox']:checked {
                    background-image: url('/images/contact/checkbox.svg');
                }

                span.question {
                    @include content_font;
                }
            }
        }
    }

    form.form > button.submit_btn {
        @include paragraph;
        display: block;
        margin: auto;
        padding: 6px 50px;
        cursor: pointer;
        border-radius: 100px;
        color: $normalColor;
        background-color: $primaryColor;
        transition: 0.2s;

        &:hover {
            transition: 0.2s;
            background-color: $hoverBtnColorB;
        }
    }
}

// 彈窗
h3.modal_title {
    @include h3;
    text-align: center;
}

div.modal_img {
    margin: auto;
    padding: 8% 0;
    width: clamp(200px, 80%, 400px);
}
</style>
