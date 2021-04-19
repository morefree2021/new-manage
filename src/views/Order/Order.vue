<template>
  <div class="order">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
      <common-form :formLabel="orderLabel" :form="Form" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="failIsShow">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="content-top">
      <el-button type="primary" @click="addData">+ 新增</el-button>
      <!-- <el-form :inline="true"  class="demo-form-inline">
        <el-input placeholder="审批人" ></el-input>
        <el-form-item>
          <el-button type="primary" >查询</el-button>
        </el-form-item>
      </el-form> -->
    </div>
    <common-table style="height: 550px"  :orderLabel="orderLabel" :orderData="orderData"></common-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CommonTable from '../../components/CommonTable'
import CommonForm from '../../components/CommonForm'
// import { mapState } from 'vuex'

  export default {
    components: {
      CommonTable,
      CommonForm
    },
    data() {
      return {
        
        operateLabel: [
          {
            prop: 'name',
            label: '名称',
          },
          {
            prop: 'customerName',
            label: '客户名称',
          },
          {
            prop: 'location',
            label: '地址',
          },
          {
            prop: 'dateTime',
            label: '下单日期',
            type: 'date',
            // width: 200,
          },
          {
            prop: 'time',
            label: '时间',
            type: 'time',
            // width: 200,
          },
          {
            prop: 'price',
            label: '价格',
            // width: 320,
          },
        ],
        orderLabel: [
          {
            prop: 'name',
            label: '名称',
            width:110
          },
          {
            prop: 'customerName',
            label: '客户名称',
          },
          {
            prop: 'location',
            label: '地址',
            width: 200
          },
          {
            prop: 'dateTime',
            label: '下单日期',
            type: 'date',
            width: 100
          },
          {
            prop: 'time',
            label: '时间',
            type: 'time',
            // width: 200,
          },
          {
            prop: 'price',
            label: '价格',
            // width: 320,
          },
        ],
        index: null
      }
    },
    computed: {
      ...mapState({
        orderData: state => state.order.orderData,
        Form: state => state.order.Form,
        // isShow: state => state.order.isShow,
        operateType: state => state.order.operateType
      }),
      isShow: {
        get: function() {
          return this.$store.state.order.isShow
        },
        set: function() {
          return this.failIsShow()
        }
      }
    },
    methods: {
      getOrderData() {
        this.$store.commit('getData')
      },
      failIsShow() {
        this.$store.commit('failIsShow')
        this.$store.commit('getData')
      },
      confirm() {
          return this.$confirm(this.operateType === 'add' ? "确定要新增数据吗？" : "确定要更新数据吗？")
            .then(() => {
              this.$store.commit('confirm')
              setTimeout(() => { 
                this.getOrderData()
              },500)
              this.$message({
                type: "success",
                message: this.operateType === 'add' ? "新增成功！" : "更新成功！",
              })
            }).catch(err => err)
        
        
      },
      addData() {
        this.$store.commit('addData')
      }
      // confirm() {
      //   // console.log(this.Form);
      //   if(this.operateType === 'edit') {
      //     return this.$confirm("确定更新数据")
      //       .then(() => {
      //         this.$store.commit('finishEdit',this.index)
      //         this.isShow = false
      //         this.getOrderData()
      //       })
      //   }
      // }
    },
    created() {
      this.getOrderData()
    }
  }
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/order';
</style>