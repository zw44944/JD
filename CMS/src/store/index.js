import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 选择器选项
        // 学校
        schoolOptions: [],
        // 教室
        classroomOptions: [],
        // 老师
        teacherOptions: [],
        // 年级
        gradeOptions: [],
        // 学科
        subjectOptions: [],

    },
    mutations: {

    },

})