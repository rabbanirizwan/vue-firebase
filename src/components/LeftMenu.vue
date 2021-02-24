<template>
  <div class="main">
    <a-menu  mode="horizontal" theme="dark">
      <a-menu-item key="app">
        <router-link to="/">Meeting Log </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
    name:"LeftMenu",
    
}
</script>

<style scoped>
/* .main{
    grid-column: 1/2;
} */
</style>