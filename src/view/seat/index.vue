<template>
  <div class="hl-choose-seat__wrapper">
    <van-nav-bar title="HANOI - LEBERA" left-arrow></van-nav-bar>
    <div class="primary-container">
      <p class="second-title">11 MAR - 15 MAR</p>
      <p class="primary-title">Choose your seat</p>
      <p class="txt-carriage">Carriage: <span class="txt-color-pink pl-5">03</span></p>
      <van-divider :style="{ borderColor: '#1989fa' }" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.hl-choose-seat__wrapper {
  width: 100%;
  height: 100vh;
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

</style>
