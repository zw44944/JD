import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'

import ClassStatistic from '../views/class_statistic/ClassStatistic.vue'
import ClassSchedule from '../views/class_schedule/ClassSchedule.vue'

import AllDocument from '../views/document_center/AllDocumnet.vue'
import OwnDocument from '../views/document_center/OwnDocument.vue'

import LiveClassList from '../views/class_monitor/LiveClassList.vue'
import LiveClassDetail from '../views/class_monitor/LiveClassDetail.vue'

import VideoList from '../views/video_class/VideoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { path: '/index', name: 'Index', component: Index },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: 'class-statistic',
      component: ClassStatistic
    }, {
      path: 'class-schedule',
      component: ClassSchedule
    }, {
      path: 'all-document',
      component: AllDocument,
    }, {
      path: 'own-document',
      component: OwnDocument,
    }, {
      path: 'live-classes',
      component: LiveClassList,
    }, {
      path: 'live-classes-detail',
      component: LiveClassDetail,
    }, {
      path: 'video-list',
      component: VideoList,
    }]
  },
   {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
