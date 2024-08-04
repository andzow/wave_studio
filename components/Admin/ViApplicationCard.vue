<template>
    <div class="card" :style="{ 'background-image': 'url(' + photo + ')' }">
        <div class="card__content">
            <div class="card__header" @click="item.isOpen = !item.isOpen">
                <div>
                    <h3 class="card__name">{{ item.name }}</h3>
                    <p class="card__id">ID: {{ item.id }}</p>
                </div>
                <p class="card__data">{{ new Date(item.createdAt).toLocaleString('en-US', { day: '2-digit' }) }}.{{ new Date(item.createdAt).toLocaleString('en-US', { month: '2-digit' }) }}.{{ new Date(item.createdAt).getFullYear() }}</p>
            </div>
            <div class="card__main" :class="{card__main_active: item.isOpen}">
                <p class="card__item">Статус заявки: <span class="card__special" :class="{card__item_rejected: item.statusName === 'Отклонена', card__item_accepted: item.statusName === 'Принята'}">{{ item.statusName }}</span></p>
                <p class="card__item">Номер телефона: {{ item.phone }}</p>
                <p class="card__item">Почта: {{ item.mail }}</p>
                <p class="card__item card__item_description">{{ item.text }}</p>
                <p class="card__btn" v-if="item.status === 'check'" @click="updatehData(item)">Отметить как прочитанное</p>
                <p class="card__btn" v-if="item.status === 'final'" @click="deleteData(item)">Удалить заявку</p>
            </div>
        </div>
        <div class="card__background"></div>
    </div>
</template>

<script>
import ApplicationController from "@/http/controllers/ApplicationController";

export default {
    data() {
        return {
            useStatus: useStatus(),
            useApplication: useApplication(),
            usePage: usePage(),
        }
    },
    props: {
        item: Object,
        photo: String
    },
    methods: {
        async updatehData(data) {
            let newData = {
                id: data.id,
                status: "final",
                statusName: "Прочитана",
            }
            this.useStatus = "clock";
            await ApplicationController.updateApplication(newData)
            const useData = await ApplicationController.findApplication(this.$route.query)
            this.useApplication = useData.application
            this.usePage = useData.totalPages
            this.useStatus = 211
        },
        async deleteData(data) {
            this.useStatus = "clock";
            await ApplicationController.deleteApplication(data.id)
            const useData = await ApplicationController.findApplication(this.$route.query)
            this.useApplication = useData.application
            this.usePage = useData.totalPages
            this.useStatus = 212
        }
    }
}
</script>

<style scoped>
.card {
    padding: 20px;
    border-radius: 10px;
    background-position: 50% 50%;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    z-index: 9;
}
.card__content {
    position: relative;
    z-index: 10;
}
.card__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
}
.card:not(:last-child) {
    margin-bottom: 20px;
}
.card__main {
    position: relative;
    max-height: 0;
    overflow: hidden;
    margin-top: 0;
    padding-top: 0px;
    opacity: 0;
    transition: all .4s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.card__main_active {
    max-height: 1000px;
    margin-top: 20px;
    padding-top: 10px;
    opacity: 1;
}
.card__name {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
}
.card__id {
    color: #fff;
}
.card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.card__data {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
}
.card__item {
    color: #fff;
    font-size: 18px;
}
.card__main_active .card__item:not(:last-child) {
    margin-bottom: 10px;
    max-height: 100px;
}
.card__item:not(:last-child) {
    margin-bottom: 0px;
    max-height: 0;
    transition: all .4s ease;
}
.card__special {
    color: var(--green);
    font-size: 18px;
    margin-left: 10px;
}
.card__btn {
    background: var(--green);
    padding: 10px 25px;
    font-size: 16px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;
}
.card__buttons {
    position: absolute;
    bottom: 0;
    right: 0;
}
.card__button {
    width: 130px;
    padding: 5px 25px;
    border-radius: 10px;
    font-size: 16px;
    transition: all .3s ease;
}
.card__button:hover {
    transform: scale(1.03);
}
.card__item_text {
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: 0px !important;
}
.card__item_description {
    max-width: 500px;
}
</style>