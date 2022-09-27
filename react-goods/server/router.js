const express = require('express')
const Mock = require('mockjs')
//随机id 
//v4 随机的id 不重复
const { v4 } = require('uuid')



const  citys=require('./data/city/data.json')

const router = express.Router()

router.get('/test', (req, res) => {
    res.send('测试成功')
})

// 首页轮播接口
router.get('/banner', (req, res) => {
    const data = Mock.mock({
        status: 200,
        "banner|3": [{
            "id|+1": 1,
            "imgUrl|+1": [
                "http://iwenwiki.com/api/livable/banner/banner1.png",
                "http://iwenwiki.com/api/livable/banner/banner2.png",
                "http://iwenwiki.com/api/livable/banner/banner3.png"
            ]
        }]
    })
    res.send(data)
})


//接口2：热门房源  {city:''}
router.get('/hotHouse', (req, res) => {
    let city = req.query.city || '北京'
    res.send(Mock.mock({
        status: 200,
        "list|6": [{
            "id|+1": 100,
            'chuzu|1': ['整租', '合租'], 
            'price|2000-8000': 1, //租金
            'huxing|1': ['一室一厅', '两室一厅', '三室两厅'], //户型
            'area|50-120.2': 1, //总面积
            address: city + ' - @cword(5,8)', //房源信息
            "imgUrl|+1": [
                'http://iwenwiki.com/api/livable/shop/z1.jpg',
                'http://iwenwiki.com/api/livable/details/2.jpg',
                'http://iwenwiki.com/api/livable/shop/z2.jpg',
                'http://iwenwiki.com/api/livable/details/4.jpg',
                'http://iwenwiki.com/api/livable/shop/z3.jpg',
                'http://iwenwiki.com/api/livable/details/6.jpg'
            ]
        }]
    }))
})


// 城市列表
router.get('/citys',(req,res)=>{
    res.send({
        status:200,
        data:citys
    })
})


/**
 * 搜索房源接口
 * params: 当前城市、搜索关键字、请求页码
 * city：城市
 * val：搜索关键词
 * page:页码
 * http://localhost:8888/search?city=北京&val=123 &page=
 */
 router.get('/search', (req, res) => {
    let { city, val, page = 0 } = req.query;
    res.send(Mock.mock({
        success: true,
        nextPage: +page + 1,
        'list|3': [{ //生成10条数据
            'img|1': [  //随机取一个图片
                'http://iwenwiki.com/api/livable/search/1.jpg',
                'http://iwenwiki.com/api/livable/search/2.JPG',
                'http://iwenwiki.com/api/livable/search/3.jpg',
                'http://iwenwiki.com/api/livable/search/4.JPG',
                'http://iwenwiki.com/api/livable/search/5.jpg',
                'http://iwenwiki.com/api/livable/search/6.jpg'
            ],
            // temptitle:,//生成文字描述
            // 'id|+1': 100,//id 自增
            id:function(){
                return v4();
            },//id自增
            title: city + val + '- @cword(5,8)',//房源信息
            'total|6-30': 1,//总楼层高度，随机获取一个楼层
            'current|1-30': 1,//楼层  1-32层
            floor: function () { //楼层  楼层/总高
                if (this.total >= this.current) {
                    return `${this.current}/${this.total}`
                } else {
                    return `${this.total}/${this.current}`
                }
            },
            'huxing|1': ['一室一厅', '两室一厅', '三室两厅'],//户型
            'area|40-140': 1,//总面积
            'type|1': ['整租', '合租'],//出租类型
            'price|3000-20000': 1 //租金
        }]
    }))

})


/**
 * 房屋详情--信息接口----【详情页需要展示的】
 * id:房屋id
 */
router.get('/houseInfo', (req, res) => {
    let id = req.query.id;
    // console.log(id);   根据用户传过来的id,去数据库
    res.send(Mock.mock({
        success: true,
        id,
        info: {
            title: '@cword(5,10)',
            'price|2900-10000': 1,
            'huxing|1': ['一室一厅', '两室一厅', '三室两厅'],
            'area|60-150.2': 1,
            'zong|6-32': 1,
            'cur|1-32': 1,
            floor: function () {
                if (this.zong >= this.cur) {
                    return this.cur + '/' + this.zong
                } else {
                    return this.zong + '/' + this.cur
                }
            },
            'chaoxiang|1': ['朝东', '朝西', '朝南', '朝北', '南北通透'],
            'zhuangxiu|1': ['精装', '简装', '毛坯'],
            'year|1985-2020': 1,
        },
        "banner|4": [{
            "id|+1": 1,
            'imgUrl|+1': [
                'http://iwenwiki.com/api/livable/details/1.jpg',
                'http://iwenwiki.com/api/livable/details/2.jpg',
                'http://iwenwiki.com/api/livable/details/3.jpg',
                'http://iwenwiki.com/api/livable/details/4.jpg',
                'http://iwenwiki.com/api/livable/details/5.jpg',
                'http://iwenwiki.com/api/livable/details/6.jpg',
                'http://iwenwiki.com/api/livable/details/7.jpg',
                'http://iwenwiki.com/api/livable/details/8.jpg',
                'http://iwenwiki.com/api/livable/details/9.jpg',
                'http://iwenwiki.com/api/livable/details/10.jpg',
                'http://iwenwiki.com/api/livable/details/11.jpg',
                'http://iwenwiki.com/api/livable/details/12.jpg',
                'http://iwenwiki.com/api/livable/details/13.jpg',
            ]
        }]
    }))
})


/**
 * 房屋的评价信息
 * id:房屋id
 * page:第几页
 */
router.get('/comment', (req, res) => {
    let id = req.query.id;
    let page = req.query.page;
    res.send(Mock.mock({
        id,
        success: true,
        nextPage: +page + 1,
        'list|5': [
            {
                id:function(){
                    return v4();
                },//id自增
                tel: /1\d{10}/,//手机号
                'star|1-5': 1,//星星的个数 1-5 高亮
                content: '@cword(20,50)'//评论的文字描述
            }
        ]
    }))
});


//新品推荐
router.get('/getNewsComment', (req, res) => {
    //接受参数：城市名字  默认北京
    let city = req.query.city || '北京';
    //返回数据
    res.send(Mock.mock({
        status: 200,
        "list|4": [{
            "id|+1": 100,
            "imgUrl|+1": [
                'http://iwenwiki.com/api/livable/homehot/img_aijiaodeng.png',
                'http://iwenwiki.com/api/livable/homehot/img_baozhen.png',
                'http://iwenwiki.com/api/livable/homehot/img_chuwugui.png',
                'http://iwenwiki.com/api/livable/homehot/img_jingzi.png'
            ],
            "title|+1": [
                city + '储物柜',
                city + '抱枕',
                city + '储物架',
                city + '镜子'
            ]
        }]
    }))

})

//家用推荐
router.get('/getFaComment', (req, res) => {
    //接受参数：城市名字  默认北京
    let city = req.query.city || '北京';
    //返回数据
    res.send(Mock.mock({
        status: 200,
        "list|4": [{
            "id|+1": 200,
            "imgUrl|+1": [
                'http://iwenwiki.com/api/livable/homehot/img_luodideng.png',
                'http://iwenwiki.com/api/livable/homehot/img_maojin.png',
                'http://iwenwiki.com/api/livable/homehot/img_zhaoming.png',
                'http://iwenwiki.com/api/livable/homehot/img_zhiwujia.png'
            ],
            "title|+1": [
                city + '落地灯',
                city + '毛巾',
                city + '照明',
                city + '置物架'
            ]
        }]
    }))

})


/**
 * 购物车列表数据
 * @param {user:'xxx'}
 */
router.get('/cart',(req,res)=>{
    let user = req.query.user;
    res.send(Mock.mock({
        success:true,
        user,
        'list|6':[
            {
                id:function(){
                    return v4();
                },
                title:'@cword(10,20)',
                'price|2900-20000':1,
                'huxing|1':['一室一厅','两室一厅','三室两厅'],
                'area|60-150.2':1,
                'iscommit|3-7':true, //产生true的概率是30% true评论 
                'img|1':[
                    'http://iwenwiki.com/api/livable/shop/z1.jpg',
                    'http://iwenwiki.com/api/livable/shop/z2.jpg',
                    'http://iwenwiki.com/api/livable/shop/z3.jpg',
                    'http://iwenwiki.com/api/livable/shop/z4.jpg',
                    'http://iwenwiki.com/api/livable/shop/z5.jpg',
                    'http://iwenwiki.com/api/livable/shop/z6.jpg',
                ]
            }
        ]
    }))
})






module.exports = router