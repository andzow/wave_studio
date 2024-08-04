<template>
    <section class="form">
        <div class="form__container">
            <div class="form__info">
                <div class="form__box">
                    <NuxtLink class="form__back" to="/">/ Вернуться на главную</NuxtLink>
                    <h1 class="form__title">Войти</h1>
                    <p class="form__text">
                        Войдите в систему, используя свои данные, которые вы ввели при
                        регистрации.
                    </p>
                    <div class="form__place">
                        <p class="card__text_error" :class="{ card__text_error_active: LoginValidator === 1 }">
                            Поле не может быть пустым
                        </p>
                        <input class="card__input" :class="{
                            card__validator: LoginValidator === 2,
                            card__error: LoginValidator === 1,
                        }" placeholder="Логин" type="text" v-model="isLogin" @input="loginValidator" />
                    </div>
                    <div class="form__place">
                        <p class="card__text_error" :class="{ card__text_error_active: PasswordValidator === 1 }">
                            Поле не может быть пустым
                        </p>
                        <input class="card__input" :class="{
                            card__validator: PasswordValidator === 2,
                            card__error: PasswordValidator === 1,
                        }" placeholder="Пароль" type="text" v-model="isPassword" @input="passwordValidator" />
                    </div>
                    <button class="form__btn" @click="sendData">Войти</button>
                </div>
            </div>
            <div class="form__image">
                <img class="form__img" src="../../public/images/abstruct.webp" alt="" />
            </div>
        </div>
    </section>
</template>
  
<script>
import AuthController from "@/http/controllers/AuthController";

export default {
    data() {
        return {
            isLogin: "",
            isPassword: "",
            LoginValidator: 0,
            PasswordValidator: 0,
            useStatus: useStatus()
        };
    },
    methods: {
        loginValidator() {
            if (this.isLogin.length === 0) {
                this.LoginValidator = 1
            } else {
                this.LoginValidator = 2
            }
        },
        passwordValidator() {
            if (this.isPassword.length === 0) {
                this.PasswordValidator = 1
            } else {
                this.PasswordValidator = 2
            }
        },
        async sendData() {
            if (this.isLogin.length === 0) {
                this.LoginValidator = 1
            }
            if (this.isPassword.length === 0) {
                this.PasswordValidator = 1
            }
            console.log("AAAAA")
            if (this.isLogin.length !== 0 && this.isPassword.length !== 0) {
                console.log("BBBB")
                this.useStatus = "clock";
                const dataLogin = await AuthController.login(this.isLogin, this.isPassword)
                this.useStatus = dataLogin
            }
        },
    },
};
</script>
  
  <style scoped>
  .form {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .form__container {
    position: relative;
    display: flex;
    z-index: 2;
  }
  .form__info {
    position: relative;
    width: 960px;
    height: 100vh;
  }
  .form__box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .form__title {
    font-weight: 700;
    font-size: 60px;
    color: var(--white);
  }
  .form__text {
    max-width: 400px;
    margin-top: 10px;
    color: var(--white);
  }
  .card__input {
    position: relative;
    padding: 15px;
    background: transparent;
    border: 1px solid var(--white);
    z-index: 1000;
    width: 100%;
    border-radius: 5px;
    color: var(--white);
    transition: all 0.3s ease;
  }
  .form__place {
    margin-top: 25px;
    position: relative;
  }
  .form__btn {
    width: 100%;
    background: var(--green);
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    padding: 15px 0;
    margin-top: 30px;
    color: #fff;
    transition: all .3s ease;
  }
  .form__btn:hover {
    transform: scale(1.03);
  }
  .form__create {
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
  .form__create_special {
    color: var(--green);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .form__create_password {
    margin-top: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .form__create_password:hover {
    color: var(--green);
  }
  .form__back {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--white);
  }
  .form__back:hover {
    color: var(--green);
  }
  .card__text_error {
    position: absolute;
    top: -20px;
    color: #dc143c;
    font-size: 14px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .card__validator {
    border-color: var(--green);
  }
  .card__error {
    border-color: #dc143c;
  }
  .card__text_error_active {
    opacity: 1;
  }
  .form__image {
    height: 100vh;
    width: 50%;
  }
  .form__img {
    height: 100%;
    width: 100%;
  }
  @media(max-width: 1400px) {
    .form__info {
    width: 700px;
  }
  }
  @media(max-width: 1200px) {
    .form__info {
    width: 600px;
  }
  }
  @media(max-width: 1000px) {
    .form__image {
      display: none;
    }
    .form__info {
    width: 100%;
  }
  .form__box {
    min-width: 350px;
  }
  }
  @media(max-width: 400px) {
  .form__box {
    min-width: 300px;
  }
  }
  </style>