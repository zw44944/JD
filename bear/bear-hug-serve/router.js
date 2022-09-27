const express = require('express');
const router = express.Router();


// app.use(bodyParser.urlencoded({
//     extended: true
// }))

//查看碎片
router.get("/fragment/get", (req, res) => {
   let cookies = req.query.userId
    res.send({
        "code":200,
        "message":"成功",
        "data":[
            {
                "id": 1000000,
                "troubleId": 1000000,
                "userId": "cookies",
                "message": "困境树洞内容",
                "tags": "[\"职场\",\"职场新人\",\"职场PUA\"]",
                "ttl": 3,
                "contactType": 1,
                "contactValue": "1008611111",
                "isMatch": 0,
                "remark": "备注",
                "isShow": 1,
                "createTime": "2020-11-11T15:26:34.817+00:00",
                "updateTime": "2020-11-11T15:26:34.817+00:00",
                "isDeleted": 0
            }
        ]
    }
    
    )
})

//发布碎片
router.post("/fragment/add", (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;

    res.send({
        "code": 200,
        "message": "成功"
    }
    )
})



//根据碎片ID查看碎片
router.get("/fragment/selectById", (req, res) => {
let pages = req.query.id
    res.send({
        "code": 200,
        "message": "成功",
        "data": {
            "id": 3,
            "troubleId": 1000000,
            "userId": "cookie",
            "message": "困境树洞内容",
            "tags": "[\"职场\",\"职场新人\",\"职场PUA\"]",
            "ttl": 3,
            "contactType": 1,
            "contactValue": "1008611111",
            "isMatch": 1,
            "remark": "备注",
            "isShow": 1,
            "createTime": 1606145511417,
            "updateTime": 1606196063744,
            "isDeleted": 0
        }
    }
    )
})




// 匹配
router.post('/match_record/selectMatchRecordByFramgmentID', (req, res) => {
    res.send(
        {
            "code": 200,
            "message": "成功",
            "data": [
                {
                    "id": 3,
                    "startFragmentId": 1,
                    "matchFragmentId": 0,
                    "matchTime": 1606145511437,
                    "createTime": 1606145511437,
                    "updateTime": 1606145511437,
                    "isDeleted": 0
                }
            ]

        }
    )
})

//获取空间列表接口
router.post("/space/selectByPage", (req, res) => {
    {
        page: 0
    }
    res.send({
        "code": 200,
        message: "成功",
        data: [
            {
                "id": 1000000,
                "name": "家庭困境空间",
                "createTime": null,
                "updateTime": null,
                "isDeleted": null
            },
            {
                "id": 1000001,
                "name": "校园困境空间",
                "createTime": null,
                "updateTime": null,
                "isDeleted": null
            },
            {
                "id": 1000002,
                "name": "职场困境空间",
                "createTime": null,
                "updateTime": null,
                "isDeleted": null
            }
        ]
    }
    )
})







//查询身份2
router.post("/role/selectByPage", (req, res) => {
    res.send({
        "code": 200,
        "message": "成功",
        "data": [
            {
                "id": 1000000,
                "name": "父母"
            },
            {
                "id": 1000001,
                "name": "孩子"
            },
            {
                "id": 1000002,
                "name": "新婚夫妇"
            }
        ]
    }
    )
})



//查看困境列表
router.post("/trouble/showList", (req, res) => {
    res.send({
        "code": 200,
        "message": "成功",
        "data": [
            {
                "id": 1000000,
                "name": "夫妻困境",
                "createTime": null,
                "updateTime": null,
                "spaceID": 1000000,
                "roleID": 1000000,
                "isDeleted": 0
            },
            {
                "id": 1000001,
                "name": "教育困境",
                "createTime": null,
                "updateTime": null,
                "spaceID": 1000000,
                "roleID": 1000000,
                "isDeleted": 0
            },
            {
                "id": 1000002,
                "name": "婆媳困境",
                "createTime": null,
                "updateTime": null,
                "spaceID": 1000000,
                "roleID": 1000000,
                "isDeleted": 0
            }
        ]
    }
    )
})




module.exports = router;