<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 555px">
        <div class="user" style="height: 350px">
          <img :src="userImg" />
          <div class="userinfo" >
            <p class="name">Morefree</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-in" style="height: 200px" >
          <div class="login-info">
            <p>上次登录时间：<span>2021-02-21</span></p>
            <p>上次登录地点：<span>深圳</span></p>
          </div>
        </div>
      </el-card>
      <!-- <el-card shadow="hover" style="height: 522px; margin-top: 20px">
        
      </el-card> -->
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="num">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 350px">
        <!-- <echart  :chartData="echartData.order"></echart> -->
        <el-table :data="tableData">
          <el-table-column show-overflow-tooltip v-for="(val, index) in tableLabel" :fit=true :key="index" :prop="index" :label="val"  >

          </el-table-column>
        </el-table>
      </el-card>
      
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
// import Echart from '../../components/EChart'
export default {
  // components: {
  //   Echart,
  // },
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
      ],
      
      tableLabel: {
        name: '菜品',
        Price: '价格',
        ProductID: 'Product ID',
      },
      
    }
  },
  computed: {
    ...mapState({
      tableData: state => state.menu.tableData
    })
  },
  methods: {
    getTableData() {
      this.$store.commit('getTableData')
    }
  },
  created(){
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home';
</style>
