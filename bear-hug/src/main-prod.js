import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from '@/util/axios';
Vue.prototype.$http = axios;


// 按需载入element - ul
import "element-ui/lib/theme-chalk/index.css";
import {
    Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    MessageBox,
    Message,
    Radio,
    Notification,
    Form,
    FormItem,
    Input,
    RadioGroup,
    Select,
    Option,
    Cascader,
    Button,
    Tag
} from "element-ui";

Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Cascader);
Vue.use(Button);
Vue.use(Tag);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.config.productionTip = false;

Vue.filter('dateFormat', function(originVal) {

    let day = parseInt(originVal / 1000 / (60 * 60 * 24));
    let hou = parseInt((originVal / 1000 % (60 * 60 * 24)) / 3600);
    let min = parseInt(((originVal / 1000 % (60 * 60 * 24)) % 3600) / 60);

    return `${day}天${hou}小时${min}分`
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");