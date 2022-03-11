var navMenuList = [
    {
        path: '/index',
        title: '数据中心',
        icon: 'el-icon-pie-chart'
    },
    {
        path: '/home/class-statistic',
        title: '上课统计',
        icon: 'el-icon-data-line'
    },
    {
        path: '/home/class-schedule',
        title: '课表管理',
        icon: 'el-icon-date'
    },
    {
        path: '/home/document-center',
        title: '课件中心',
        icon: 'el-icon-folder',
        children: [{
            path: '/home/all-document',
            title: '全部课件',
        }, {
            path: '/home/own-document',
            title: '个人课件',
        }]
    },
    {
        path: '/home/live-classes',
        title: '巡课管理',
        icon: 'el-icon-monitor'
    },
    {
        path: '/home/video-list',
        title: '录播课堂',
        icon: 'el-icon-video-camera'
    },
    {
        path: '/home/setting',
        title: '系统管理',
        icon: 'el-icon-setting'
    }
]

export { navMenuList };