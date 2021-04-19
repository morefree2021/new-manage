<template>
  <el-form  :model="form" ref="form" label-width="100px">
    <el-form-item v-for="item in formLabel" :key="item.prop" :label="item.label">
      <el-input v-model="form[item.prop]" :placeholder="'请输入' + item.label" v-if="!item.type"></el-input>
      <el-switch v-model="form[item.prop]" v-if="item.type === 'switch'"></el-switch>
      <el-date-picker v-model="form[item.prop]" type="date" placeholder="选择日期" v-if="item.type === 'date'" value-format="MM月dd日"> </el-date-picker>
      <el-time-picker v-model="form[item.prop]" :picker-options="{ selectableRange: '00:00:00 - 23:59:59' }" placeholder="任意时间点" v-if="item.type === 'time'" value-format="HH:mm:ss"> </el-time-picker>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    // inline: Boolean,
    form: Object,
    formLabel: Array,
  },
}
</script>

<style lang="scss" scoped></style> 
