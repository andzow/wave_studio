<template>
  <section class="services" id="tarif">
    <div class="services__container">
        <h2 class="services__title">Выбери свой план</h2>
        <p class="services__description">Выбор тарифа зависит от многих факторов, включая тип сайта, его функционал, ожидаемый трафик и бюджет заказчика .</p>
        <div class="services__grid">
            <div class="services__item" :class="['services__item' + index]" v-for="(item, index) in info" :key="index">
                <div class="services__header">
                    <h3 class="services__name">{{ item.name }}</h3>
                    <p class="services__price">{{ item.price }}</p>
                </div>
                <div class="services__body">
                    <div class="services__position" v-for="(pos, idx) in item.set" :key="idx">
                        <p class="services__information">{{ pos }}</p>
                        <svg class="services__svg" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.31858 11.616C2.31858 11.49 2.30458 11.434 2.24858 11.434L1.92658 11.588C1.92658 11.518 1.88458 11.476 1.81458 11.448L1.70258 11.434C1.60458 11.434 1.56258 11.448 1.42258 11.532C1.38058 11.448 1.32458 11.35 1.28258 11.266C0.918578 10.566 0.540578 9.516 0.372578 9.054C0.288578 8.816 0.204578 8.326 0.106578 7.584C0.218578 7.654 0.302578 7.682 0.344578 7.682C0.400578 7.682 0.470578 7.584 0.526578 7.388C0.554578 7.43 0.610578 7.444 0.680578 7.444C0.722578 7.444 0.778578 7.43 0.806578 7.388L1.03058 7.052L1.28258 7.136H1.29658C1.32458 7.136 1.36658 7.094 1.43658 7.052C1.50658 7.01 1.56258 6.982 1.60458 6.982L1.64658 6.996C1.87058 7.108 2.02458 7.304 2.09458 7.612C2.26258 8.326 2.41658 8.676 2.59858 8.676C2.75258 8.676 2.96258 8.494 3.18658 8.144C3.41058 7.794 3.63458 7.318 3.88658 6.744C3.90058 6.856 3.91458 6.912 3.94258 6.912C4.02658 6.912 4.23658 6.422 4.75458 5.596C5.52458 4.35 7.42858 1.956 7.91858 1.62C8.28258 1.368 8.56258 1.13 8.75858 0.92C8.73058 1.06 8.70258 1.158 8.70258 1.2C8.70258 1.242 8.73058 1.256 8.75858 1.256L9.15058 1.06V1.116C9.15058 1.186 9.16458 1.228 9.20658 1.228C9.26258 1.228 9.48658 1.004 9.51458 0.92L9.48658 1.116L9.96258 0.836L9.85058 1.088C9.99058 0.99 10.1026 0.933999 10.1726 0.933999C10.2426 0.933999 10.2846 1.046 10.2846 1.116C10.2846 1.228 10.1866 1.382 10.0326 1.578C9.86458 1.802 9.44458 2.236 8.18458 3.678C7.63858 4.294 5.21658 7.584 4.75458 8.368L3.88658 9.838C3.50858 10.468 3.27058 10.874 3.14458 11.028C3.01858 11.182 2.86458 11.336 2.68258 11.476L2.55658 11.406L2.44458 11.476L2.31858 11.616Z" fill="#95A1BB"/>
                        </svg>
                    </div>

                    <div class="services__position" v-for="(noSet, i) in item.noSet" :key="i">
                        <p class="services__information">{{ noSet }}</p>
                        <svg class="services__svg" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.31858 16.616C9.31858 16.49 9.30458 16.434 9.24858 16.434L8.92658 16.588C8.92658 16.518 8.88458 16.476 8.81458 16.448L8.70258 16.434C8.60458 16.434 8.56258 16.448 8.42258 16.532C8.38058 16.448 8.32458 16.35 8.28258 16.266C7.91858 15.566 7.54058 14.516 7.37258 14.054C7.28858 13.816 7.20458 13.326 7.10658 12.584C7.21858 12.654 7.30258 12.682 7.34458 12.682C7.40058 12.682 7.47058 12.584 7.52658 12.388C7.55458 12.43 7.61058 12.444 7.68058 12.444C7.72258 12.444 7.77858 12.43 7.80658 12.388L8.03058 12.052L8.28258 12.136H8.29658C8.32458 12.136 8.36658 12.094 8.43658 12.052C8.50658 12.01 8.56258 11.982 8.60458 11.982L8.64658 11.996C8.87058 12.108 9.02458 12.304 9.09458 12.612C9.26258 13.326 9.41658 13.676 9.59858 13.676C9.75258 13.676 9.96258 13.494 10.1866 13.144C10.4106 12.794 10.6346 12.318 10.8866 11.744C10.9006 11.856 10.9146 11.912 10.9426 11.912C11.0266 11.912 11.2366 11.422 11.7546 10.596C12.5246 9.35 14.4286 6.956 14.9186 6.62C15.2826 6.368 15.5626 6.13 15.7586 5.92C15.7306 6.06 15.7026 6.158 15.7026 6.2C15.7026 6.242 15.7306 6.256 15.7586 6.256L16.1506 6.06V6.116C16.1506 6.186 16.1646 6.228 16.2066 6.228C16.2626 6.228 16.4866 6.004 16.5146 5.92L16.4866 6.116L16.9626 5.836L16.8506 6.088C16.9906 5.99 17.1026 5.934 17.1726 5.934C17.2426 5.934 17.2846 6.046 17.2846 6.116C17.2846 6.228 17.1866 6.382 17.0326 6.578C16.8646 6.802 16.4446 7.236 15.1846 8.678C14.6386 9.294 12.2166 12.584 11.7546 13.368L10.8866 14.838C10.5086 15.468 10.2706 15.874 10.1446 16.028C10.0186 16.182 9.86458 16.336 9.68258 16.476L9.55658 16.406L9.44458 16.476L9.31858 16.616Z" fill="#95A1BB"/>
                            <path d="M16.8828 15.9658C16.7618 15.9307 16.7041 15.9285 16.6885 15.9823L16.7468 16.3345C16.6795 16.315 16.6275 16.3436 16.5811 16.403L16.5365 16.5067C16.5092 16.6008 16.5109 16.6451 16.5526 16.8029C16.4602 16.8199 16.3505 16.8463 16.2581 16.8633C15.4845 17.0179 14.3707 17.0886 13.8802 17.1212C13.6282 17.1356 13.1342 17.0798 12.3943 16.9673C12.4927 16.8792 12.543 16.8064 12.5547 16.766C12.5703 16.7122 12.4957 16.6177 12.323 16.5093C12.3712 16.4941 12.4002 16.4443 12.4197 16.377C12.4314 16.3367 12.4335 16.279 12.401 16.2404L12.1407 15.9317L12.2915 15.7131L12.2954 15.6996C12.3032 15.6727 12.2746 15.6207 12.2538 15.5418C12.2329 15.4628 12.2216 15.4013 12.2333 15.3609L12.2585 15.3245C12.4284 15.1405 12.6595 15.0472 12.9749 15.0658C13.7074 15.1033 14.0864 15.0528 14.1371 14.878C14.18 14.7301 14.0637 14.4777 13.7899 14.1651C13.5162 13.8525 13.1214 13.5048 12.6403 13.1029C12.7518 13.1207 12.8094 13.1228 12.8172 13.0959C12.8406 13.0152 12.4285 12.6771 11.7794 11.9495C10.7972 10.863 9.02819 8.36758 8.84195 7.80338C8.7013 7.3836 8.55069 7.0484 8.40359 6.80167C8.53025 6.86755 8.61658 6.92173 8.65691 6.93343C8.69725 6.94513 8.7185 6.92213 8.7263 6.89524L8.64722 6.46417L8.70101 6.47976C8.76824 6.49926 8.81248 6.49751 8.82417 6.45717C8.83977 6.40339 8.68702 6.12586 8.61414 6.07558L8.79459 6.15706L8.65823 5.62191L8.86907 5.79966C8.81394 5.63791 8.79135 5.51474 8.81084 5.44751C8.83034 5.38028 8.9496 5.37113 9.01683 5.39063C9.1244 5.42182 9.24502 5.55883 9.39037 5.76133C9.55872 5.98507 9.85858 6.50932 10.8926 8.12107C11.3322 8.81703 13.8175 12.0595 14.4418 12.7216L15.6119 13.9646C16.1117 14.5031 16.4353 14.8448 16.5481 15.0087C16.6609 15.1726 16.766 15.3634 16.8497 15.5772L16.7474 15.6787L16.7835 15.8058L16.8828 15.9658Z" fill="#95A1BB"/>
                        </svg>
                    </div>
                    
                    <div class="services__position">
                        <p class="services__information">Количество страниц</p>
                        <p class="services__count">{{ item.count }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import servicesData from "~/assets/json/services.json";

export default {
    data() {
        return {
            info: servicesData
        }
    }
}
</script>

<style scoped>
.services__container {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1800px;
}
.services__title {
    text-align: center;
    font-size: 38px;
    padding-top: 50px;
    padding-bottom: 20px;
    color: var(--white);
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--green), 0 0 0.5em var(--green), 0 0 0.1em var(--green), 0 10px 3px #000;
}
.services__description {
    text-align: center;
    color: var(--white);
    font-size: 18px;
    max-width: 680px;
    margin: 0 auto;
}
.services__grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
    "tariff1 tariff1 tariff2 tariff2 tariff3 tariff3"
    ". tariff4 tariff4 tariff5 tariff5 .";
    column-gap: 40px;
    row-gap: 40px;
}
.services__item0 {
  grid-area: tariff1;
}

.services__item1 {
  grid-area: tariff2;
}

.services__item2 {
  grid-area: tariff3;
}

.services__item3 {
  grid-area: tariff4;
}
.services__item4 {
  grid-area: tariff5;
}

.construction {
  grid-area: constructions;
}
.services__item {
    border:1px solid var(--gray);
    border-radius: 5px;
    padding: 20px;
}
.services__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--white);
}
.services__name {
    font-size: 20px;
    color: var(--white);
}
.services__price {
    color: var(--green);
    white-space: nowrap;
}
.services__info {
    font-size: 18px;
    color: var(--gray);
    margin-top: 15px;
}
.services__position {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.services__information {
    margin-top: 25px;
    color: var(--gray);
}
.services__svg {
    transform: translateY(-5px);
}
.services__count {
    color: var(--gray);
}
@media(max-width: 1260px) {
.services__grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
    "tariff1 tariff1 tariff2 tariff2"
    "tariff3 tariff3 tariff4 tariff4"
    ". tariff5 tariff5 .";
    column-gap: 30px;
    row-gap: 30px;
}
}
@media(max-width: 800px) {
.services__grid {
    max-width: 600px;
    margin: 40px auto 0 auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
    "tariff1"
    "tariff2"
    "tariff3"
    "tariff4"
    "tariff5";
    column-gap: 30px;
    row-gap: 30px;
}
}
@media(max-width:480px) {
.services__title {
    font-size: 32px;
}
}
@media(max-width:450px) {
.services__title {
    font-size: 28px;
}
.services__description {
    font-size: 16px;
}
}
</style>