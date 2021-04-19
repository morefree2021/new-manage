<template>
  <header>
    <div class="l-content">
      <el-button  icon="el-icon-menu" size="mini" @click="chgMenuShow"></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right" >
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">{{current.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-input  placeholder="请输入内容">
        <i class="el-icon-edit el-input__icon" slot="suffix" ></i>
      </el-input>
      <el-badge is-dot class="item">
        <i class="el-icon-message-solid" ></i>
      </el-badge>
      <el-badge is-dot class="item">
        <i class="el-icon-s-comment" ></i>
      </el-badge>
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link"><img :src="userImg" class="user" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item  @click.native="outlogin">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> 
  </header>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        userImg: require('../assets/images/user.png'),
      }
    },
    computed: {
      ...mapState({
        current: state => state.menu.currentMenu
      }),
    },
    methods: {
      chgMenuShow() {
        this.$store.commit('chgMenuShow')
      },
      outlogin() {
        this.$store.commit('clearToken')
        this.$store.commit('clearMenu')
        location.reload()

      }
    },
  }
</script>

<style lang="scss" scoped>
header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    display: flex;
    justify-content: end;
    align-items: center;
    .el-dropdown {
      margin-left: 40px;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
    .el-badge {
      margin-left: 20px;
      i {
        cursor: pointer;
        color: #fff;
        margin-left: 20px;
      }
      
    }
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666666  !important;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #ffffff !important; 
    }
  }
}
</style>