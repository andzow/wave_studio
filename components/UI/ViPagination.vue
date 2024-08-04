<template>
  <div class="pagination">
    <div class="pagination__container">
      <div class="pagination__position">
        <div class="pagination__arrow" @click="switching(isActive - 1)" v-if="isActiveLeft">
          <svg width="11" height="20" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1.83627 11.4453C1.39387 11.8592 1.41824 12.5683 1.88803 12.9509L13 22" stroke="black"
              stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <div class="pagination__box">
          <div class="pagination__items">
            <div class="pagination__item" :class="{ pagination__item_active: isActive == number }"
              v-for="(number, idx) in isPage" :key="idx" @click="switching(number)">
              {{ number }}
            </div>
          </div>
        </div>
        <div class="pagination__arrow" @click="switching(isActive + 1)" v-if="isActiveRight">
          <svg width="11" height="20" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 22L12.1637 11.5547C12.6061 11.1408 12.5818 10.4317 12.112 10.0491L1 1" stroke="black"
              stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import ApplicationController from '@/http/controllers/ApplicationController'
  export default {
    data() {
      return {
        isActive: usePageActive(),
        isPage: usePage(),
        useInfoActive: useInfoActive(),
        useApplication: useApplication(),
        itemWidthActive: 0,
        isActiveLeft: false,
        isActiveRight: true,
      };
    },
    mounted() {
      if(this.$route.query.page !== undefined) {
        this.isActive = this.$route.query.page
      } else {
        this.isActive = 1
      }
      this.active()
    },
    methods: {
      async switching(number) {
        if (number > this.isPage) {
          this.isActive = this.isPage;
          number = this.isPage;
        }
        if (number < 1) {
          this.isActive = 1;
          number = 1;
        }
  
        const positionInfo = document.querySelector(".pagination__box");
        const position = document.querySelector(".pagination__items");
        const items = document.querySelectorAll(".pagination__item");
        const item = document.querySelector(".pagination__item").offsetWidth;
        const element = items[number - 1];
        const positionRect = positionInfo.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
  
        if (number <= this.isPage - 3) {
          if (elementRect.right + 5 == positionRect.right) {
            this.itemWidthActive += (item + 5) * 3;
            position.style.transform = `translateX(-${this.itemWidthActive}px)`;
          }
        } else {
          if (
            elementRect.right + 5 == positionRect.right &&
            number !== this.isPage
          ) {
            const count = this.isPage - number;
            const countFinal = this.itemWidthActive + (item + 5) * count;
            position.style.transform = `translateX(-${countFinal}px)`;
          }
        }
  
        if (number !== 1 || number !== 2 || number !== 3) {
          if (elementRect.left == positionRect.left) {
            this.itemWidthActive -= (item + 5) * 3;
            position.style.transform = `translateX(-${this.itemWidthActive}px)`;
          }
        }
  
        if (number == 1 || number == 2 || number == 3) {
          this.itemWidthActive = 0;
          position.style.transform = `translateX(-${this.itemWidthActive}px)`;
        }
  
        this.isActive = number;
        await this.$router.push({
          query: { ...this.$route.query, page: number },
        });
        
        if (this.isActive === 1) {
          this.isActiveLeft = false;
        } else {
          this.isActiveLeft = true;
        }
        if (this.isActive === this.isPage) {
          this.isActiveRight = false;
        } else {
          this.isActiveRight = true;
        }

        if (this.useInfoActive === 'application') {
          const useData = await ApplicationController.findApplication(this.$route.query)
          this.useApplication = useData.application
        } 
        this.scrollToAnchor()
      },
      async start(number) {
        if (number > this.isPage) {
          this.isActive = this.isPage;
          number = this.isPage;
        }
  
        if (number < 1) {
          this.isActive = 1;
          number = 1;
        }
  
        const position = document.querySelector(".pagination__items");
        const item = document.querySelector(".pagination__item").offsetWidth;
  
        if (number <= this.isPage - 5) {
          this.itemWidthActive = (item + 5) * (number - 3);
          position.style.transform = `translateX(-${this.itemWidthActive}px)`;
        } else {
          this.itemWidthActive = (item + 5) * (this.isPage - 6);
          position.style.transform = `translateX(-${this.itemWidthActive}px)`;
        }
  
        this.isActive = number;
        await this.$router.push({
          query: { ...this.$route.query, page: number },
        });
        if (this.isActive === 1) {
          this.isActiveLeft = false;
        } else {
          this.isActiveLeft = true;
        }
        if (this.isActive === this.isPage) {
          this.isActiveRight = false;
        } else {
          this.isActiveRight = true;
        }
      },
      async active() {
        if (this.isActive == 1) {
          this.isActiveLeft = false;
        } else {
          this.isActiveLeft = true;
        }

        if (this.isActive == this.isPage) {
          this.isActiveRight = false;
        } else {
          this.isActiveRight = true;
        }
      },
      scrollToAnchor() {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      },
    },
  }
  </script>
  
  <style scoped>
  .pagination__container {
  display: flex;
  justify-content: flex-end;
  }
  .pagination__position {
    display: flex;
    padding-top: 30px;
    align-items: center;
  }
  .pagination__btn {
    width: 100%;
    padding: 20px 0;
    border-radius: 20px;
    background: var(--green);
    font-size: 22px;
    color: #fff;
  }
  .pagination__arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #72f5d6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .pagination__arrow:hover {
    background: var(--green);
  }
  .pagination__arrow:hover svg path {
    stroke: white;
  }
  .pagination__box {
    max-width: 270px;
    overflow: hidden;
    margin: 0 10px;
  }
  .pagination__items {
    display: flex;
    align-items: center;
    transition: all 0.4s ease;
    color: var(--white);
  }
  .pagination__item {
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Inter", sans-serif;
  }
  .pagination__item:not(:last-child) {
    margin-right: 5px;
  }
  .pagination__item:hover {
    background: #72f5d6;
  }
  .pagination__item_active {
    background: var(--green) !important;
    color: #fff;
  }
  </style>