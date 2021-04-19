<template>
    <el-container >
        <el-aside width="auto"><nav-menu></nav-menu></el-aside>
        <el-container >
          <el-header><header-top></header-top></el-header>
          <header-tag></header-tag>
          <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>


<script>
import HeaderTag from '../components/HeaderTag.vue'
import HeaderTop from '../components/HeaderTop.vue'
import NavMenu from '../components/NavMenu.vue'
  export default {
  components: { 
    HeaderTop,
    NavMenu,
    HeaderTag,
    },
  }
</script>

<style lang="scss">
.el-container {
  height: 100%;
  background-color: rgb(221, 244, 248);
  .el-header{
    background-color: #333;
  }
}
</style>
