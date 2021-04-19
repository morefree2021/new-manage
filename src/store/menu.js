import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    menuShow: false,
    isShow: false,
    currentMenu: null,
    wrong2: false,
    wrong3: false,
    wrong4: false,
    wrong5: false,
    success: false,
    success1: false,
    login: false,
    key: false,
    key1: false,
    form: {
      username: '',
      password: '',
      rpassword: ''
    },
    tableData: [],
    menu1: [],
    tabList: [
      {
        path: '/home',
        name: 'home', 
        label: '首页',
        icon: 's-home',
      },
    ],
    menu: [{
      "path": "/home",
      "name": "home",
      "label": "首页",
      "icon": "s-home",
    }],
  },
  mutations: {
    Rlogin(state) {
      axios.get('/user').then(res => {
        // for (let i = 0; i < res.data.length; i++) {
        //   if(res.data[i].username !== state.form.username) {
        //     if(state.form.password === state.form.rpassword) {
        //       console.log("注册成功");
        //       state.success1 = !state.success1
        //       console.log(12);
        //       axios.post('/user',state.form).then(res => {
        //         console.log(res.data)
        //         state.form = {}
        //         state.isShow = false
        //       })
        //     } else {
        //       console.log("密码不一致");
        //       state.wrong5 = !state.wrong5
        //     }
        //   } else {
        //     console.log("用户名已存在");
        //     state.wrong4 = !state.wrong4
        //     console.log(11);
        //   }
        // }
        
          for(let i = 0; i < res.data.length; i++) {
            if(res.data[i].username === state.form.username) {
              state.key1 = true
            }
          }
        
        
        if(!state.key1) {
          if(state.form.password === state.form.rpassword) {
            state.success1 = !state.success1
            console.log(12);
            axios.post('/user',state.form).then(res => {
              console.log(res.data)
              state.form = {}
              state.isShow = false
              state.key1 = false

            })
          } else {
            state.wrong5 = !state.wrong5
            state.key1 = false

          }
        }else {
          console.log(state.form.username);
          state.wrong4 = !state.wrong4
          state.key1 = false
        }
      })
    },
    checkLogin(state) {
      axios.get('/user').then(function(res) {
        // console.log(res.data.length);
        // console.log(form.username);
        for (let i = 0; i < res.data.length; i++) {
          if(res.data[i].username === state.form.username) {
            if(res.data[i].password === state.form.password) {
              state.success = !state.success
              state.key = true
              console.log(11);
              Cookies.set('login', JSON.stringify(true))    //大坑
              // console.log(state.login);
            } else { 
            state.wrong3 = !state.wrong3
            }
          } else {
            state.wrong2 = !state.wrong2
          }
        }
      })
    },
    
    failIsShow1(state) {
      state.form = {}
      state.isShow = false
    },
    resgiter(state) {
      state.isShow = true
    },
    clearToken() {
      Cookies.remove('login')
    },
    clearMenu(state) {
      state.menu = ''
    },
    setMenu(state) {
      if (!Cookies.get('login')) {
        return 111
      }
      // console.log(Cookies.get('login'));
      state.login = JSON.parse(Cookies.get('login'))
      console.log(state.login);
      axios.get('/asideMenu').then(function(res) {
        state.menu = res.data
        // Cookies.set('menu', JSON.stringify(res.data))
        // state.menu = JSON.parse(Cookies.get('menu'))

        // console.log(state.menu1);
        // console.log(res.data);
        // state.success = false
      })
    },
    chgMenuShow(state) {
      state.menuShow = !state.menuShow
      console.log(state.menuShow);
    },
    selectMenu(state, val) {
      if(val.name !== 'home') {
        state.currentMenu = val
        let result = state.tabList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabList.push(val) : ''
      } else {
        state.currentMenu = null
      }
    },
    closeTab(state, val) {
      let result = state.tabList.findIndex(item => item.name === val.name)
      state.tabList.splice(result,1)
    },
    getTableData(state) {
      axios.get('/tableData').then(res => {
        // console.log(res.data);
        state.tableData = res.data
      })
    },
    
    // finishEdit(id) {
    //   axios.patch(`/orderData/${id}`, id).then(res => {
    //     console.log(res.data);

    //   })
    // }
  },
}