<template>
  <div class="main">
    <LeftAside></LeftAside>
    <RightAside></RightAside>
  </div>
</template>

<script>
import LeftAside from '@/components/MusicMain/LeftAside'
import RightAside from '@/components/MusicMain/RightAside'

export default {
    name:'MusicMain',
    components:{
      LeftAside,
      RightAside,
    }
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: inherit;
  position: relative;
}
</style>