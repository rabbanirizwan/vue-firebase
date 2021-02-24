import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Meetings from "./views/Meetings";
import CheckIn from "./views/CheckIn";
import Attendees from "./views/Attendess"
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/meetings",
      name: "Meetings",
      component: Meetings,
    },
    {
        path:"/checkin/:userID/:meetingID",
        name:"CheckIn",
        component:CheckIn
    },
    {
      path:"/attendees/:userID/:meetingID",
      name:"Attendees",
      component:Attendees
  },
    {
        path: "*",
        redirect:"/"
        
      },
  ],
});
