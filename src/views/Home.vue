<template>
  <div class="parent">
    <div
      v-if="user"
      style="display:flex; margin:20px 10px; align-items:center;justify-content:space-between"
    >
      <span>Welcome back {{ user.displayName }}</span>

      <a-button type="primary" @click="$emit('logout')">
        logout<a-icon type="logout" />
      </a-button>
    </div>

    <a-card title="Meeting Log" style="margin-top:40px">
      <p>
        This simple app creates meetings,allows people to check in, and picks
        random users to award giveaway.It's good exapmle of a Single Page
        Application which includes connection to a database and routing.It is a
        practical way to learn vue.js and Firebase
      </p>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: ["user"],
};
</script>
<style scoped>
.parent {
  margin-top: 30px;
  padding: 0 50px;
  margin: 0 auto;
}
</style>
