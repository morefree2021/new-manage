<template>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="menuShow"
      background-color="#545c64"
      text-color="#fff"
      
      active-text-color="#ffd04b">
      <h3  v-if="!menuShow">后台管理系统</h3>
      <h3  v-else>后台</h3>
      <el-menu-item :index="index.toString()" v-for="(item, index) in noChildren" :key="index"   @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- <el-submenu :index="item.name" v-for="item in hasChildren" :key="item.name">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.path" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState({
        menu: state => state.menu.menu,
        menuShow:state => state.menu.menuShow
      }),
      hasChildren() {
        return this.menu.filter((item) => item.children)
      },
      noChildren() {
        return this.menu.filter((item) => !item.children)
      }
    },
    methods: {
      clickMenu(item) {
        this.$router.push({ path: item.path })
        this.$store.commit('selectMenu',item)
      }
    },
    
  
  }
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border-right: solid 0px #e6e6e6;
  h3 {
    color: #fff;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
    white-space: nowrap;
  }
  span {
    font-size: 16px;
    margin-left: 10px;
  }
  // .el-menu-item, .el-submenu, .el-menu-item-group{
  //   left: 20px;
  // }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
</style>