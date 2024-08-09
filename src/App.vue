<template>
  <div class="wrapper">
    <div class="container">
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
</script>

<style lang="scss" scoped>
  .wrapper{
    background-color: #F8F8F8;
  }
</style>
