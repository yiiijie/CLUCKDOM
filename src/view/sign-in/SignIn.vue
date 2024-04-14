<script setup>
import axios from 'axios';
import GoogleSignIn from '@/components/google-sign-in/GoogleSignIn.vue';
import { object, string } from 'yup';

// vee-validate yup驗證
const schema = object({
    email: string().email('請填寫有效的電子信箱').required('請填寫電子信箱'),
    password: string().required('請填寫密碼'),
});

</script>

<template>
    <div>
        <main class="form_container">
            <div class="form_inner">
                <span class="form_title">會員登入</span>   
                <!-- google第三方登入 -->
                <GoogleSignIn />
                <hr class="divider">               
                <!-- 一般帳密登入 -->
                <VeeForm
                    @submit="onSubmit"
                    :validation-schema="schema"
                    class="sign_in_form">
                    <div class="form_group">     
                        <label for="email">電子郵件</label>              
                        <VeeField
                            name="email"
                            placeholder="請輸入您的E-mail"
                            class="input"/>
                        <ErrorMessage name="email" class="error_message"/>             
                    </div>
                    <div class="form_group">            
                        <label for="password">密碼</label>                       
                        <VeeField
                            name="password"
                            type="password"
                            placeholder="請輸入您的密碼"
                            class="input"/>
                        <ErrorMessage name="password" class="error_message"/>  
                    </div>  
                    <button type="submit" class="sign_in_btn">會員登入</button>
                </VeeForm>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/pages/sign-in";
</style>