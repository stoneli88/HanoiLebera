<template>
  <div class="hl-choose-seat__wrapper">
    <van-nav-bar title="HANOI - LEBERA" left-arrow></van-nav-bar>
    <div class="primary-container">
      <p class="second-title">11 MAR - 15 MAR</p>
      <p class="primary-title">Choose your seat</p>
      <p class="txt-carriage">Carriage: <span class="txt-color-pink pl-5">03</span></p>
      <van-divider :style="{ borderColor: '#1989fa' }" />
      <section class="chart-column">
        <div class="chart-column-item">
          <Cube title="A1" border-color="#D4797E" />
          <p>Available Seat</p>
        </div>
        <div class="chart-column-item">
          <Cube title="A1" border-color="#545569" />
          <p>Not Available Seat</p>
        </div>
      </section>
      <section class="chart-cinema-seats">
        <section class="seat-container">
          <div class="seat-box">
            <div class="header">
              <div class="header-left-wc">WC</div>
              <div class="header-mid-wc">03</div>
              <div class="header-right-wc">WC</div>
            </div>
            <div class="seat-map">
              <div class="seat-left-side"></div>
              <div class="seat-mid-side"></div>
              <div class="seat-right-side"></div>
            </div>
          </div>
        </section>
        <section class="cinema-container">
          <div v-for="(theater, idx) in theaters" class="cinema-item" @click="toggleActive(idx)">
            <div :class="['box-cinema', { active: theater.active }]">{{ theater.title }}</div>
            <div v-if="idx < theaters.length" class="gutter-cinema"></div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Cube from "@/components/Cube.vue";
import { ISeat, ITheater, ITheaterResponse } from "@/types";
import { onMounted } from "vue";
import axios from "axios";

const theaters = ref<ITheater[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<ITheaterResponse[]>('data.json');
    const theatersResp:ITheaterResponse[] = response.data;
    theatersResp.forEach(theater => {
      const seats = theater.seats;
      const tempGroupedSeats: ISeat[][] = [];
      for (let i = 0; i < seats.length; i += 4) {
        tempGroupedSeats.push(seats.slice(i, i + 4));
      }
      theaters.value.push({
        title: theater.title,
        seats: tempGroupedSeats,
        active: false
      });
    });
  } catch (error) {
    console.error('Failed to fetch seats:', error);
  }
});
</script>

<style lang="scss" scoped>
.hl-choose-seat__wrapper {
  width: 100%;
  height: 100vh;
  .chart-column {
    display: flex;
    width: 82%;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .chart-column-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        margin: 0 0 0 5px;
        font-size: 12px;
      }
    }
  }
  .primary-container {
    padding: 10px 12px;
  }
  .second-title {
    margin: 0;
    font-size: 12px;
    text-align: center;
  }
  .primary-title {
    margin: 50px 0 0 0;
    font-size: 16px;
    font-weight: 600;
  }
  .txt-carriage {
    font-size: 15px;
    font-weight: 600;
  }
  .txt-color-pink {
    color: #D4797E;
  }
  .pl-5 {
    padding-left: 10px;
  }
}
.chart-cinema-seats {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.cinema-container {
  min-width: 50px;
  margin-top: 20px;
  min-height: 55vh;
  max-height: 69.4vh;
  overflow: scroll;
  .cinema-item {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
  .box-cinema {
    width: 35px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 16px;
    background-color: #191524;
    color: #fffeff;
  }
  .gutter-cinema {
    width: 10px;
    height: 20px;
    background-color: #191524;
  }
}
.seat-container {
  width: calc(100% - 140px);
  margin-right: 20px;
  margin-top: 20px;
  min-height: 55vh;
  max-height: 65vh;
  .seat-box {
    width: 100%;
    height: calc(100% - 4px);
    margin: 0 10px;
    padding: 15px;
    border: 3px solid #dedede;
    border-radius: 25px;
    .header {
      height: 50px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      .header-left-wc, .header-right-wc {
        width: 130px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #dedede;
        font-size: 16px;
      }
      .header-mid-wc {
        flex: 1;
        margin: 0 10px;
        font-size: 12px;
        padding: 5px;
        background-color: #191524;
        color: #fff;
        border-radius: 5px;
      }
      .header-left-wc {
        border-top-left-radius: 30px;
      }
      .header-right-wc {
        border-top-right-radius: 30px;
      }
    }
    .seat-map {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      height: calc(100% - 50px);
      .seat-left-side, .seat-right-side {
        width: 130px;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
      }
      .seat-mid-side {
        flex: 1;
        margin: 0 10px;
        font-size: 12px;
        padding: 5px;
      }
    }
  }

}
</style>
