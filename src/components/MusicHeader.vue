<template>
  <div class="header">
      <div class="logo">
        <router-link to="/"><img src="../assets/logo (2).png" alt="music"></router-link>
        <router-link to="/"><h1>Music</h1></router-link>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索歌曲" v-model="keywords">
        <i class="el-icon-search" @click="search"></i>
      </div>
      <SearchList :keywords="keywords" :show="show" v-show="show" @close="close"></SearchList>
  </div>
</template>

<script>
import SearchList from '@/components/MusicHeader/SearchList.vue'

export default {
    name:'MusicHeader',
    components:{
      SearchList
    },
    data() {
      return {
        keywords:'大鱼海棠',
        show: false
      }
    },
    methods: {
      search(){
        this.show = true
      },
      close(v){
        this.show = v
      },
    },
}
</script>

<style scoped>
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  position: relative;
}
a{
  display: flex;
  text-decoration: none;
  color: #000;
}
.logo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
img{
  width: 50px;
  height: 50px;
}
h1{
  margin-left: 10px;
}
.search{
  width: 25%;
  display: flex;
  align-items: center;
  position: relative;
}
input{
  outline: none;
  height: 20px;
  border: none;
  border-radius: 20px;
  text-indent: 1em;
  width: 100%;
  color: rgba(0, 0, 0, 0.4);
}
input:focus{
  color: #000;
}
i{
  position: absolute;
  right: 5px;
  cursor: pointer;
}
</style>