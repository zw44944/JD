<template>
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <li @click="menu1">鼠</li>
            <li @click="menu2">牛</li>
            <li @click="menu3">虎</li>
            <li @click="menu4">兔</li>
            <li @click="menu5">龙</li>
            <li @click="menu6">蛇</li>
            <li @click="menu7">马</li>
            <li @click="menu8">羊</li>
            <li @click="menu9">猴</li>
            <li @click="menu10">鸡</li>
            <li @click="menu11">狗</li>
            <li @click="menu12">猪</li>

        </ul>
    </div>
</template>
<style type="text/css">
.title{
    width: 100px;
}
.menu li{
    list-style: none;
    height: 50px;
    margin-bottom: 2px;
    background-color: white;
    line-height: 50px;
    cursor:pointer;
}
</style>
<script type="text/javascript">
import Msg from './msg.js'
export default {
    methods:{
        menu1:function(){
            Msg.$emit("val","1");
        },
        menu2:function(){
            Msg.$emit("val","2");
        }, 
        menu3:function(){
            Msg.$emit("val","3");
        }, 
         menu4:function(){
            Msg.$emit("val","4");
        },
         menu5:function(){
            Msg.$emit("val","5");
        },
         menu6:function(){
            Msg.$emit("val","6");
        },
         menu7:function(){
            Msg.$emit("val","7");
        },
         menu8:function(){
            Msg.$emit("val","8");
        },
         menu9:function(){
            Msg.$emit("val","9");
        },
         menu10:function(){
            Msg.$emit("val","10");
        },
         menu11:function(){
            Msg.$emit("val","11");
        },  
        menu12:function(){
            Msg.$emit("val","12");
        },
        }
    }
</script>
