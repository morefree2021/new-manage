<template>
  <div class="cst">
    <div class="title">
      <h3>用户评价</h3>
    </div>
    <div class="allInfo" >
      <div class="info" v-for="(item,index) in card" :key="index">
        <div class="header">
          <div class="person">
            <div class="per-left">
              <img :src="img[index]" alt="">
              <div class="per-left-info">
                <p class="name1">{{item.name}}</p>
                <p class="name2">{{item.time}}</p>
              </div>
            </div>
            <div class="per-right"></div>
          </div>
          <el-rate
            v-model="item.value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          
          <div class="text"><p>{{item.text}}</p></div>
        </div>
        <div class="footer">
          <img :src="img1[index]" alt="">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        value: 4.2,
        card: [],
        img: 
          {
            0 : require('../../assets/images/h1.png') ,
            1 : require('../../assets/images/h2.png') ,
            2 : require('../../assets/images/h3.png') 
          },
        img1: {
            0 : require('../../assets/images/p1.png') ,
            1 : require('../../assets/images/p2.png') ,
            2 : require('../../assets/images/p3.png') 
        }
          
      
      }
    },
    methods: {
      getData() {
        axios.get('/customer').then(res => {
          console.log(res.data);
          this.card = res.data
        })
      }
    },
    created() {
      this.getData()
      console.log(this.img[0]);
    }
  }
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/customer';

</style>

