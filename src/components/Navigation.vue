<template>
  <div class="main">
    <LeftMenu />
    <RightMenu :user='user'/>
  </div>
</template>
<script>
import RightMenu from "./RightMenu";
import LeftMenu from "./LeftMenu";
export default {
  name: "Navigation",
  props:['user'],
  components: {
    RightMenu,
    LeftMenu,
  },
};
</script>
<style>
.main {
  /* display: grid;
    grid-template-columns: auto auto auto; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #001529;

}
</style>
