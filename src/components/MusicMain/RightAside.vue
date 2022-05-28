<template>
  <div class="right">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'RightAside'
}
</script>

<style scoped>
.right{
 flex: 4; 
 height: inherit;
 max-width: 80%;  
}
</style>