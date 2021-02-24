<template>
  <div class="main">
     
    <a-menu v-model="current" mode="horizontal" theme="dark">
      <a-menu-item v-if="user" key="meetings">
        <router-link to="/meetings">meetings</router-link>
      </a-menu-item>
      <a-menu-item   v-if="!user"  key="login">
        <router-link to="/login">log in</router-link>
      </a-menu-item>
      <a-menu-item   v-if="!user" key="register">
        <router-link to="/register">register</router-link>
      </a-menu-item>
    </a-menu>
    
  </div>
  
</template>

<script>
export default {
  name: "RightMenu",
  props:['user'],
  data: function() {
    return {
      current: [],
    };
  },
};

</script>

<style scoped>
.main {
  

}
</style>
