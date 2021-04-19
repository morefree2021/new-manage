<template>
<div class="tabs">
  <el-tag v-for="(item, index) in tab"   :key="item.name" size="small" :closable="item.name !== 'home'" 
      :effect="$route.path === item.path ? 'dark' : 'plain'"
      @close="closetab(item,index)" @click="clicktabs(item)" >{{item.label}}</el-tag>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        tab: state => state.menu.tabList
      })
    },
    methods: { 
      ...mapMutations({
        close: 'closeTab'
      }),
      closetab(item, index) {
        let length = this.tab.length-1
        this.close(item)
        // console.log(this.tab);
        if(item.path !== this.$route.path) {
          return
        }

        if(index === length) {
          this.$router.push({path: this.tab[index-1].path})
        } else {
          this.$router.push({path: this.tab[index].path})
        }
      },

      clicktabs(item) {
        this.$router.push({ path: item.path })
        this.$store.commit('selectMenu', item)
      }
    },
  }
</script>

<style lang="scss" scoped>
.tabs {
  height: 50px;
  line-height: 50px;
  .el-tag {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>