import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { DatePicker,Menu,Icon,Card,Form,Input,Button,Alert,Tooltip,List,Row,Col } from 'ant-design-vue';

Vue.use(DatePicker);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Form);
Vue.use(Input);
Vue.use(Button);
Vue.use(Alert);
Vue.use(Tooltip);
Vue.use(List);
Vue.use(Row);
Vue.use(Col)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
