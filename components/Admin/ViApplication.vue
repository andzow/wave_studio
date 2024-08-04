<template>
    <div class="application">
        <div class="application__sort" ref="modalApplication">
            <div class="application__serch">
                <input class="application__other" type="text" placeholder="Телефон" v-model="isNumber"
                    @beforeinput="handleBeforeInput" @input="numberValidator">
                <svg class="application__loop" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" @click="meaning">
                    <path
                        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                        stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.9996 14.0001L11.0996 11.1001" stroke="#83859C" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="application__block">
                <button class="application__btn" v-if="isCondition === 'Прочитанные' && useApplication.length !== 0" @click="deleteAll">Удалить все заявки</button>
                <div>
                    <p class="application__name">Сортировка: <span class="application__special"
                            @click="isConditionActive = true">{{ isCondition }}</span></p>
                    <div class="application__list" :class="{ application__list_active: isConditionActive }">
                        <p class="application__item" :class="{ application__item_active: isCondition === item.value }"
                            v-for="(item, idx) in isConditionArray" :key="idx"
                            @click="goToPageThree(item.name, item.value)">{{ item.value }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="application__empty" v-if="useApplication.length === 0">Пусто</p>
        <AdminViApplicationCard v-for="(item, index) in useApplication" :key="index" :item="item" :photo='getPhoto(index)'></AdminViApplicationCard>
        <UIViPagination v-if="useApplication.length !== 0"></UIViPagination>
    </div>
</template>

<script>
import ApplicationController from '@/http/controllers/ApplicationController'
export default {
    data() {
        return {
            isNumber: "",
            pageActive: 1,
            useApplication: useApplication(),
            useStatus: useStatus(),
            usePage: usePage(),
            usePageActive: usePageActive(),
            isCondition: "Ожидает ответа",
            isConditionArray: [
                {
                    name: "check",
                    value: "Ожидает ответа"
                },
                {
                    name: "final",
                    value: "Прочитанные"
                }
            ],
            isConditionActive: false,
            ArrayPhoto: [
                '../Admin/background1.webp',
                '../Admin/background2.webp',
                '../Admin/background3.webp'
            ]
        }
    },
    async mounted() {   
        if (this.$route.query.condition === "final") {
            this.isCondition = "Прочитанные"
        } else {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, condition: "check" } })
            this.isCondition = "Ожидает ответа"
        }
        const useData = await ApplicationController.findApplication(this.$route.query)
        this.useApplication = useData.application
        this.usePage = useData.totalPages

        if (this.$route.query.pageApplication > this.usePageApplication) {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, page: this.usePage } })
            const useData = await ApplicationController.findApplication(this.$route.query)
            this.useApplication = useData.application
            this.usePage = useData.totalPages
        }

        document.addEventListener('click', this.closeOnOutsideClick);
    },
    methods: {
        async goToPageThree(name, value) {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, condition: name, page: 1 } })
            const useData = await ApplicationController.findApplication(this.$route.query)
            this.useApplication = useData.application
            this.usePage = useData.totalPages
            this.usePageActive = 1
            this.isCondition = value
            this.isConditionActive = false
        },
        getPhoto(index) {
            return this.ArrayPhoto[index % this.ArrayPhoto.length];
        },
        async meaning() {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, meaning: this.isNumber, page: 1 } })
            const useData = await ApplicationController.findApplication(this.$route.query)
            this.useApplication = useData.application
            this.usePageActive = 1
            this.usePage = useData.totalPages
        },
        closeOnOutsideClick(event) {
            if (this.$refs.modalApplication && !this.$refs.modalApplication.contains(event.target)) {
                this.closeModal();
            }
        },
        deleteAll() {
            this.useStatus = 213
        },
        closeModal() {
            this.isConditionActive = false
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
        },
    }
}
</script>

<style scoped>
.application {
    width: 100%;
}
.application__sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
}
.application__name {
    font-size: 18px;
    color: var(--white);
}
.application__special {
    color: var(--green);
    cursor: pointer;
}
.application__list {
    position: absolute;
    bottom: -90px;
    right: 0;
    z-index: 100;
    background: var(--back);
    border-radius: 10px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateX(40px);
    transition: all .3s ease;
    box-shadow: 0 5px 10px #0000004d;
}
.application__item {
    text-align: center;
    padding: 10px 15px;
    color: var(--white);
    cursor: pointer;
    transition: all .3s ease;
}
.application__item:hover {
    background: var(--green);
    color: #fff;
}
.application__list_active {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
}
.application__item_active {
    color: var(--green);
}
.application__pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.application__page {
    width: 35px;
    height: 35px;
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
}
.application__page:not(:last-child) {
    margin-right: 5px;
}
.application__page_active {
    background-color: #23AABC;
    border-color: #23AABC;
}
.application__serch {
    width: 300px;
    position: relative;
}
.application__other {
    background: transparent;
    border: 1px solid var(--white);
    border-radius: 18px;
    width: 100%;
    padding: 10px 15px;
    color: var(--white)
}
.application__loop {
    position: absolute;
    top:50%;
    transform: translateY(-45%);
    right: 15px;
    z-index: 2;
    cursor: pointer;
}
.application__empty {
    font-size: 76px;
    font-weight: 600;
    color: #6B7280;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
}
.application__block {
    display: flex;
    align-items: center;
}
.application__btn {
    margin-right: 20px;
    background: var(--green);
    color: #fff;
    padding: 10px 25px;
    font-size: 16px;
    border-radius: 10px;
    transition: all .3s ease;
}
.application__btn:hover {
    transform: scale(1.03);
}
@media(max-width: 848px) {
    .application__serch {
        display: none;
    }
    .application__sort {
        margin-bottom: 35px;
    }
}
@media(max-width: 500px) {
    .application__serch {
        display: block;
    }
    .application__sort {
        margin-top: 30px;
        margin-bottom: 35px;
        flex-direction: column;
        align-items: flex-end;
    }
    .application__block {
        margin-top: 20px;
    }
    .application__empty {
        height: 200px;
        font-size: 46px;
    }
}
</style>