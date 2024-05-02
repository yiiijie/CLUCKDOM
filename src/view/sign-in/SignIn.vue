<script setup>
import axios from 'axios';
import GoogleSignIn from '@/components/google-sign-in/GoogleSignIn.vue';
import { object, string } from 'yup';
import { useRouter } from "vue-router";
const router = useRouter();

// vee-validate yup驗證
const schema = object({
    email: string().email('請填寫有效的電子信箱').required('請填寫電子信箱'),
    password: string().required('請填寫密碼'),
});

// 登入
async function onSubmit(values) {
    try {
        const response = await axios.post('http://localhost:3000/signin', values);
        console.log('登入成功',response);
        localStorage.setItem('userName', response.data.user.name);
        router.push("/");
    } catch (error) {
        console.error('登入失敗');
    }
}
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
                        <label for="email">帳號</label>              
                        <VeeField
                            name="email"
                            type="email" 
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
                    <button type="submit" class="sign_in_btn">登入</button>
                </VeeForm>
                <div class="form_footer">
                    <span class="question">還不是會員嗎？ </span>
                    <router-link to="/sign-up">
                        <span class="add_member">加入會員</span>
                    </router-link>
                </div>
            </div>
        </main>
    </div>
</template>


<style scoped lang="scss">
main.form_container {
    margin: 200px 0 120px;

    @include large_tablets {
        margin: 100px 0 120px;
    }

    div.form_inner {
        max-width: calc( $basewidth - 500px );
        width: 85%;
        margin: auto;
        padding: 50px 100px;
        border-radius: 30px;
        box-sizing: border-box;
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

        hr.divider {
            position: relative;
            overflow: inherit;
            margin: 40px 0;
            border: .5px solid $borderColor;

            &::before {
                content: "or";
                font-size: 1.4rem;
                position: absolute;
                left: 50%;
                padding: 0 20px;
                transform: translate(-50%, -50%);
                color: $borderColor;
                background-color: #f1f1f1;
            }
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

    button.sign_in_btn {
        @include sign_in_btn;
    }
}

div.form_footer {
    text-align: center;
    
    span.question {
        @include content_font;
        letter-spacing: .05rem;
    }
    
    span.add_member {
        @include content_font;
        letter-spacing: .05rem;
        font-weight: $fWBold;
        color: #33A4E8;
    }
}
</style>