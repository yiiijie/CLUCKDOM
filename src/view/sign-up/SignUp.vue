<script setup>
import axios from 'axios';
import { object, string } from 'yup';

// vee-validate yup驗證
const schema = object({
    name: string().required('必須填寫姓名'),
    email: string().email('請填寫有效的電子信箱').required('請填寫電子信箱'),
    password: string().required('請填寫密碼'),
});

// 註冊
async function onSubmit(values, { resetForm }) {
    try {
        const response = await axios.post('http://localhost:3000/signup', values);
        console.log('註冊成功', response);
        resetForm(); // 重置
    } catch (error) {
        console.error('註冊失敗');
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
                    :validation-schema="schema"
                    class="sign_in_form">
                    <div class="form_group">
                        <label for="name">姓名</label>        
                        <VeeField
                            name="name"
                            type="text"
                            placeholder="請輸入您的姓名"
                            class="input"/>
                        <ErrorMessage name="name" class="error_message"/>
                    </div>    
                    <div class="form_group">     
                        <label for="email">帳號</label>              
                        <VeeField
                            name="email"
                            type="email" 
                            placeholder="請輸入您的E-mail"
                            class="input"/>
                        <ErrorMessage name="email" class="error_message"/>             
                    </div>
                    <div class="form_group">            
                        <label for="password">設定密碼</label>                       
                        <VeeField
                            name="password"
                            type="password"
                            placeholder="請輸入您的密碼 (至少4位數)"
                            class="input"/>
                        <ErrorMessage name="password" class="error_message"/>  
                    </div>  
                    <button type="submit" class="sign_up_btn">註冊</button>
                </VeeForm>
                <div class="form_footer">
                    <span class="question">我已經有會員帳號了？ </span>
                    <router-link to="/sign-in">
                        <span class="member_signin">回會員登入</span>
                    </router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
    main.form_container {
        margin: 200px 0 120px;

        div.form_inner {
            margin: auto;
            max-width: 700px;
            width: 85%;
            box-sizing: border-box;
            padding: 50px 100px;
            border-radius: 30px;
            background-color: #f1f1f1;
            
            span.form_title {
                @include h4;
                display: block;
                margin-bottom: 20px;
                text-align: center;
            }
        }
    }

    form.sign_in_form {
        width: 100%;

        div.form_group {
            width: 100%;
            margin: 0 0 5%;
            align-items: center;

            label {
                @include content_font;
                font-weight: $fWBold;
                margin-bottom: 20px;
            }

            input.input {
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

    div.form_footer{
        text-align: center;

        span.question {
            @include content_font;
            letter-spacing: .05rem;
        }
        
        span.member_signin {
            @include content_font;
            letter-spacing: .05rem;
            font-weight: $fWBold;
            color: #33A4E8;
        }
    }
</style>