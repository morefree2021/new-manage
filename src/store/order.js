import axios from 'axios'

export default {
  state: {
    orderData: [],
    operateType: '',
    isShow: false,
    Form: {
      customerName: '',
      dateTime: '',
      location: '',
      name: '',
      price: '',
      time: '',
    },
    ref: [],
    index: null
  },  
  mutations: {
    getData(state) {
      axios.get('/orderData').then(res => {
        state.orderData = res.data
        console.log("data",res.data);
      })
    },
    editData(state, ref) {
      state.operateType = 'edit'
      console.log("ref.row",ref.row);
      state.Form = ref.row
      state.isShow = true
      // state.Form = state.Form.splice(0,1)
      state.index = ref.row.id
      // console.log(ref.row.id);
      console.log("Form",state.Form);
      // console.log(state.isShow);
      // console.log(typeof state.index);
      // console.log(ref.row);
      // console.log(ref.index);
    },
    failIsShow(state) {
      state.isShow = false
      state.Form = {}
    },
    addData(state) {
      state.operateType = 'add'
      state.isShow = true
    },
    deleteData(state, row) {
      console.log("delrow",row);
      state.index = row.id
      axios.delete(`/orderData/${state.index}`).then(res => {
        console.log("delete =>",res.data);
      })
    },
    confirm(state) {
      if(state.operateType === 'edit') {
          axios.patch(`/orderData/${state.index}`, state.Form).then(res => {
          // res.data = state.Form
          console.log(res.data);
          state.Form = {}
          state.isShow = false
          
        }).catch(err => err)
      } else if(state.operateType === 'add') {
        axios.post('/orderData', state.Form).then(res => {
          console.log(res.data);
          state.Form = {}
          state.isShow = false
          
        })
      }
      
    },
    
  }
  
}