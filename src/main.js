// 引入vue框架
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);

// 引入UI框架和样式文件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';
import './asset/mui/css/mui.min.css';
import './asset/mui/css/icons-extra.css';
import './asset/css/style.css';
Vue.use(Mint);

// 引入UI组件
import { Search, Loadmore } from 'mint-ui';

Vue.component(Search.name, Search);
Vue.component(Loadmore.name, Loadmore);


// 引入组件
import App from './app.vue';




// 实例化一个vue
new Vue({
    el: '#app',
    render: c => c(App)
});