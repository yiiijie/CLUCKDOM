<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';
import { object, string } from 'yup';
import Modal from '@/components/func-items/Modal.vue';

const showModal = ref(false);
const submitResult = ref('');
const modalImage = ref('');
const handleBtnText = computed(() => {
    console.log('computed!!!');
    return submitResult.value === '我們收到表單囉！' ? '關閉' : '再試一次';
});

// vee-validate yup驗證
const schema = object({
    email: string().email('請填寫有效的電子信箱').required('必須填寫電子信箱'),
    name: string().required('必須填寫姓名'),
    phoneNumber: string().required('必須填寫聯絡電話').matches(/^(09\d{8})$|^(\d{1,3}\d{6,8})$|^(\d{1,3}-\d{6,8})$/, '電話號碼格式不正確，請輸入正確格式'),
    message: string().required('必須填寫聯繫的內容'),
});

// 提交表單時的非同步函式
async function onSubmit(values, { resetForm }) {
    try {
        // 模擬表單送出的延遲感
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const response = await axios.post('http://localhost:3333/api/test', values);
        console.log(response);
        submitResult.value = '我們收到表單囉！';
        showModal.value = true; // 跳出彈窗
        modalImage.value = '/images/contact/modal/successed.svg';
        resetForm(); // 重置表單
    } catch (error) {
        console.error('表單送出失敗');
        submitResult.value = '表單送出失敗';
        showModal.value = true;
        modalImage.value = '/images/contact/modal/failed.svg';
    }
}
</script>

<template>
    <div>
        <main>
            <section class="form_inner">
                <h1 class="title">聯絡我們</h1>
                <span class="english_title">Contact Us</span>
                <VeeForm
                @submit="onSubmit"
                v-slot="{ isSubmitting }"
                :validation-schema="schema"
                class="form_container">
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
                                    class="input"/>
                                <ErrorMessage name="name" class="error_message"/>
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
                                <ErrorMessage name="email" class="error_message"/>
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
                                <ErrorMessage name="phoneNumber" class="error_message"/>
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
                                <ErrorMessage name="message" class="error_message"/>             
                            </dd>
                        </div>  
                    </dl>
                    <button :disabled="isSubmitting" class="submit_btn" type="submit">
                        {{ isSubmitting ? '提交中...' : '確認送出' }}
                    </button>

                    <!-- 表單送出後的通知彈窗 -->
                    <Teleport to="body">
                        <Modal :show="showModal" @close="showModal = false" :buttonText="handleBtnText">
                            <h3 class="modal_title">{{ submitResult }}</h3>
                            <div class="modal_img">
                                <img :src="modalImage" alt="彈窗">
                            </div>
                        </Modal>
                    </Teleport>
                </VeeForm>
            </section>
            <img class="wave" src="/images/contact/wave.svg" alt="wave">
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/pages/contact-us";
</style>
