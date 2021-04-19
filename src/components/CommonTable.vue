<template>
  <div class="table">

    <el-table :data="orderData" stripe height="90%" >
      <el-table-column show-overflow-tooltip label="序号" :width="70">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip v-for="(item,index) in orderLabel" :key="index"  :label="item.label"  :width="item.width ? item.width : 155">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="操作" >
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row, scope.$index)" >编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> 
  </div>
</template>

<script>
// import { mapState } from 'vuex'
  export default {
    props: {
      orderLabel: Array,
      orderData: Array
    },

    
    methods: {
      
      handleEdit(row,index) {
        this.$store.commit("editData", { row, index});
      },
      deleteData(row) {
        return this.$confirm("确定要删除数据吗？")
          .then(() => {
            this.$store.commit("deleteData",row)
            setTimeout(() => {
              this.$store.commit('getData')
            },500)
            this.$message({
              type: "success",
              message: "删除成功"
            })
          }).catch(err => err)
      }

    },
    
  }
</script>



<style lang="scss" scoped>
</style>