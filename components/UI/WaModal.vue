<template>
  <div class="modal__container">
    <div class="modal" @mousemove="updateParallax(0)" @mouseleave="resetParallax" :ref="'elementCard' + 0">
    <div class="modal__image" :style="squareStyle" :class="{ modal__image_active: isActiveProducts }">
        <div class="modal__line" :class="{ modal__line_active: isActiveProducts }">
          <h3 class="modal__title">
            Оставьте контакты!
          </h3>
          <div class="modal__box">
            <div class="form__place">
              <p class="card__text_error" :class="{ card__text_error_active: NameValidator === 1 }">
                Поле не может быть пустым
              </p>
                <input class="card__input" :class="{
                    card__validator: NameValidator === 2,
                    card__error: NameValidator === 1,
                }" placeholder="ФИО" type="text" v-model="isName" @input="nameValidator" />
            </div>

            <div class="modal__position">
              <div class="form__place form__place_margin">
              <p class="card__text_error" :class="{ card__text_error_active: MailValidator === 1 }">
                Поле не может быть пустым
              </p>
                <input class="card__input" :class="{
                    card__validator: MailValidator === 2,
                    card__error: MailValidator === 1,
                }" placeholder="Введите e-mail" type="text" v-model="isMail" @input="mailValidator" />
            </div>

            <div class="form__place">
              <p class="card__text_error" :class="{ card__text_error_active: NumberValidator === 1 }">
                Некорректный телефон
              </p>
                <input class="card__input" :class="{
                    card__validator: NumberValidator === 2,
                    card__error: NumberValidator === 1,
                }" placeholder="+7 (000) - 000 - 00 - 00" type="text" v-model="isNumber" @input="numberValidator" @beforeinput="handleBeforeInput"/>
            </div>
            </div>

            <div class="form__place">
              <p class="card__text_error" :class="{ card__text_error_active: TextValidator === 1 }">
                Поле не может быть пустым
              </p>
                <textarea class="card__input card__textarea" :class="{
                    card__validator: TextValidator === 2,
                    card__error: TextValidator === 1,
                }" placeholder="Введите текст сообщения" type="text" v-model="isText" @input="textValidator" />
            </div>
            <div class="modal__other">
              <div class="modal__circle" @click="isReady = !isReady">
                <div class="modal__circle_small" :class="{'modal__circle_small_active': isReady}"></div>
              </div>
              <p class="modal__text">нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <NuxtLink class="modal__policy" to="/politics" @click="modalActive= false">политикой конфиденциальности</NuxtLink></p>
            </div>
            <button class="modal__btn" @click="sendData" disabled>Свяжитесь со мной!</button>
            <p class="modal__info">Внимание! Перед отправкой пожайлуйста убедитесь, что номер телефона который вы указали привязан к вашему телеграмм профилю. Ведь дальнейшая связь будет осуществлятся именно там</p>
          </div>
            <svg @click="modalActive = false" class="modal__close" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="29.6924" y1="11.3078" x2="11.3076" y2="29.6926" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="11.3078" y1="11.3076" x2="29.6926" y2="29.6924" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="modal__back"></div>
      </div>
    </div>
  </div>
</template>
  
<script>
import ApplicationController from "@/http/controllers/ApplicationController";

  export default {
    data() {
      return {
        rotationX: 0,
        rotationY: 0,
        isActiveProducts: false,
        modalActive: modalActive(),
        isName: "",
        NameValidator: 0,
        isMail: "",
        MailValidator: 0,
        isNumber: "",
        NumberValidator: 0,
        isText: "",
        TextValidator: 0,
        useStatus: useStatus(),
        isReady: false
      };
    },
    computed: {
      squareStyle() {
        return {
          transform: `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`,
          background: `url(../images/abstruct.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
      },
    },
    methods: {
      updateParallax(id) {
        this.isActiveProducts = true;
        this.isActiveLine = true;
        const rect = this.$el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
  
        const deltaX = (event.clientX - centerX) / 50;
        const deltaY = (event.clientY - centerY) / 40;
        this.rotationX = -deltaY;
        this.rotationY = deltaX;
      },
      resetParallax() {
        this.isActiveProducts = false;
        setTimeout(() => {
          this.rotationX = 0;
          this.rotationY = 0;
          this.isActiveLine = false;
        }, 2500);
      },
      nameValidator() {
        if (this.isName.length === 0) {
          this.NameValidator = 1
        } else {
          this.NameValidator = 2
        }
      },
      mailValidator() {
        if (this.isMail.length === 0) {
          this.MailValidator = 1
        } else {
          this.MailValidator = 2
        }
      },
      handleBeforeInput() {
      this.isNumberPrev = this.isNumber;
      },
      numberValidator(event) {
      const hasLetters = /[a-zA-Zа-яА-Я!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]$/.test(
        this.isNumber
      );
      const cursorPosition = event.target.selectionStart;
      if (cursorPosition < this.isNumber.length) {
        this.isNumber = this.isNumberPrev;
      }
      if (hasLetters) {
        this.isNumber = this.isNumber.replace(
          /[a-zA-Zа-яА-Я!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]$/,
          ""
        );
      }
      if (this.isNumber[0] !== "+") {
        this.isNumber = "+7 (" + this.isNumber;
      }
      if (this.isNumber.length === 3) {
        this.isNumber = "";
      }
      if (this.isNumber.length === 7) {
        this.isNumber = this.isNumber + ") - ";
      }
      if (this.isNumber.length === 9) {
        this.isNumber = this.isNumber.slice(0, -3);
      }
      if (this.isNumber.length === 14) {
        this.isNumber = this.isNumber + " - ";
      }
      if (this.isNumber.length === 15) {
        this.isNumber = this.isNumber.slice(0, -2);
      }
      if (this.isNumber.length === 19) {
        this.isNumber = this.isNumber + " - ";
      }
      if (this.isNumber.length === 20) {
        this.isNumber = this.isNumber.slice(0, -2);
      }
      if (this.isNumber.length === 25) {
        this.isNumber = this.isNumber.slice(0, -1);
      }
      if (this.isNumber.length >= 0) {
        this.NumberValidator = 1;
      }
      if (this.isNumber.length === 24) {
        this.NumberValidator = 2;
      }
      },
      textValidator() {
        if (this.isText.length === 0) {
          this.TextValidator = 1
        } else {
          this.TextValidator = 2
        }
      },
      async sendData() {
        this.nameValidator()
        this.mailValidator()
        this.textValidator()
        this.numberValidator(event)
        if (this.NumberValidator === 2 && this.NameValidator === 2 && this.MailValidator === 2 && this.TextValidator === 2) {
          const FormObject = {
            name: this.isName,
            phone: this.isNumber,
            mail: this.isMail,
            text: this.isText,
            status: "check",
            statusName: "Ожидает ответа",
          };
          this.useStatus = "clock"
          try {
            await ApplicationController.createApplication(FormObject);
            this.useStatus = 201
          } catch (e) {
            this.useStatus = 500
          }
        }
      }
    },
    watch: {
      isReady() {
        const btn = document.querySelector('.modal__btn');
        if (btn) {
          btn.disabled = !this.isReady; // Добавляем или убираем атрибут disabled в зависимости от состояния isReady
        }
      }
    }
  };
</script>

<style scoped>
.modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, .6);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
}
.modal__box {
  margin: 20px;
}
.modal {
  position: relative;
  width: 740px;
  padding: 0 20px;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.modal__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
.modal__close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  z-index: 3;
}
.modal__image {
  width: 100%;
  height: 100%;
  transition: transform 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 80px 0px rgba(0, 0, 0, 1);
  z-index: 1;
}
.modal__image_active {
  transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.modal__title {
  position: relative;
  font-size: 28px;
  color: #fff;
  line-height: 24px;
  text-align: center;
  margin-top: 15px;
  z-index: 3;
}
.modal__line {
  position: relative;
  border: 1px solid #fff;
  border-radius: 20px;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 3;
}
.modal__line_active {
  opacity: 1;
  border-color: var(--green);
}
.modal__description {
  font-weight: 700;
  position: relative;
  margin: 15px 15px 0 15px;
  opacity: 0;
  color: #fff;
  max-height: 0;
  transition: max-height 1.5s ease, opacity 1.5s ease, margin 0.3s ease;
  z-index: 3;
}
.modal__description_active {
  overflow: visible;
  max-height: 400px;
  margin: 15px;
  opacity: 1;
}
.card__text_error {
    color: var(--green);
    font-size: 16px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
  }
  .card__validator {
    border-color: var(--green) !important;
  }
  .card__text_error_active {
    max-height: 20px;
    opacity: 1;
  }
.card__input {
    position: relative;
    background: rgba(0, 0, 0, .2);
    padding: 15px;
    border: 1px solid var(--white);
    z-index: 1000;
    width: 100% !important;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    transition: all 0.3s ease;
  }
.form__place {
  width: 100%;
  margin-top: 20px;
}
.modal__position {
  display: flex;
  width: 100%;
}
.form__place_margin {
  margin-right: 20px;
}
.card__textarea {
  height: 180px !important;
}
.modal__btn {
  font-size: 20px;
  padding: 15px 30px;
  background: var(--green);
  border-radius: 20px;
  color: var(--white);
  width: 100%;
  margin-top: 15px;
  transition: all .3s ease;
}
.modal__btn:hover {
  transform: scale(.95);
}
.modal__info {
  color: var(--white);
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
.modal__other {
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
}
.modal__circle {
  width: 15px;
  min-width: 15px;
  height: 15px;
  border: 1px solid var(--green);
  border-radius: 50%;
  cursor: pointer;
    display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}
.modal__circle_small {
  width: 0px;
  min-width: 0px;
  height: 0px;
  border-radius: 50%;
  background: var(--green);
  transition: all .3s ease;
}
.modal__circle_small_active {
  width: 9px;
  min-width: 9px;
  height: 9px;
}
.modal__text {
  color: var(--white);
  margin-left: 5px;
}
.modal__policy {
  color: var(--green);
}
.modal__btn:disabled {
  background: #6c6d6d;
  pointer-events: none;
}
@media(max-width: 560px) {
  .modal__position {
    flex-direction: column;
  }
  .modal__title {
    font-size: 24px;
  }
  .modal {
  position: relative;
  width: 740px;
  padding: 0 20px;
  perspective: 1000px;
  transform-style: flat;
}
.card__input {
  padding: 10px;
}
.card__textarea {
  height: 120px !important;
}
}
</style>