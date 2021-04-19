<template>
  <div class="login" :style="{backgroundImage:'url('+require('../../assets/images/login.png')+')' }">
    <el-dialog title="注册" :visible.sync="isShow">
      <el-form  :model="form" ref="form" label-width="100px">
        <el-form-item  label="请输入用户名">
          <el-input v-model="form.username" placeholder="请输入账号" ></el-input>
        </el-form-item>
        <el-form-item label="请输入密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入密码">
          <el-input v-model="form.rpassword" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="dialog-footer" >
          <el-button @click="failIsShow">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-form>
    </el-dialog>
    <div class="info">
      <div style="padding: 20px" class="login-info">
        <el-form :model="form" >
          <el-form-item  label="用户名">
            <el-input v-model="form.username" placeholder="请输入账号" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item align="center" >
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="resgiter" class="register">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
      
    
    
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
  export default { 
    computed: {
      ...mapState({
      wrong2: state => state.menu.wrong2,
      wrong3: state => state.menu.wrong3,
      wrong4: state => state.menu.wrong4,
      wrong5: state => state.menu.wrong5,
      success: state => state.menu.success,
      success1: state => state.menu.success1,
      key: state => state.menu.key,
      form: state => state.menu.form,
     }),
     isShow: {
        get: function() {
          return this.$store.state.menu.isShow
        },
        set: function() {
          return this.failIsShow()
        }
      }
    },
    
    data() {
      return {
        
        timer:null,
        
        imgLogin: require("../../assets/images/login.png"),
      }
    },
    watch: {
      wrong2() {
        this.apperror(2)
      },
      wrong3() {
        this.apperror(3)
      },
      wrong4() {
        this.apperror(4)
      },
      wrong5() {
        this.apperror(5)
      },
      success() {
        this.apperror(6)
      },
      success1() {
        this.apperror(7)
      }

    },
    methods: {
      apperror(val) {
        switch(val) {
          case 1: return this.$message({
            type: "warning",
            message: "请输入正确用户名和密码"
          })
          case 2: return this.$message({
            type: "warning",
            message: "用户名不存在"
          })
          case 3: return this.$message({
            type: "warning",
            message: "密码错误"
          })
          case 4: return this.$message({
            type: "warning",
            message: "用户名已存在,请重新输入"
          })
          case 5: return this.$message({
            type: "warning",
            message: "密码不一致"
          })
          case 6: return this.$message({
            type: "success",
            message: "登录成功"
          })
          case 7: return this.$message({
            type: "success",
            message: "注册成功"
          })
        }
      },

      login() {
        if(!this.form.username || !this.form.password) {
          return this.apperror(1)
        }
        console.log(555);

        return this.$store.commit('checkLogin'),
        this.timer = setTimeout(() => {
          if(this.key === true) {
            console.log(22);
            this.$router.push({path: '/home' })}
        },500),
            this.$store.commit('setMenu')    
      },
      resgiter() {
        this.$store.commit('resgiter')
      },
      confirm() {
        if(!this.form.username || !this.form.password || !this.form.rpassword) {
          return this.apperror(1)
        }
        return this.$store.commit('Rlogin')
        // this.isShow = false
      },
      failIsShow() {
        this.$store.commit('failIsShow1')
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/login";
</style>