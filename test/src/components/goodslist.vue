<template>
    <div name="show">
        <ul class="goodlist">
            <!--eslint-disable-next-line-->
            <li v-for="good in list">
                <img v-bind:src="good.img">
                <p>{{good.goodName}}</p>
            </li>
        </ul>
    </div>
</template>


<script type="text/javascript">
export default{
    name:"show",
    
    data(){
        var obj=this;
        var url="";
            if(obj.goodId==0){
                url="json/diannao.json";
            }
        this.$http.get(url).then(function(res){
            obj.list=res.data;
        })
        return{
            list:[]
        }
    },
    props:{
        goodId:Number
    },
    watch:{
        goodId(){
            var obj=this;
            var url="";
            if(obj.goodId==1){
                url="json/shu.json";
            }else if(obj.goodId==2){
                url="json/niu.json";
            }else if(obj.goodId==3){
                url="json/hu.json";
            }else if(obj.goodId==4){
                url="json/tu.json";
            }else if(obj.goodId==5){
                url="json/long.json";
            }else if(obj.goodId==6){
                url="json/she.json";
            }else if(obj.goodId==7){
                url="json/ma.json";
            }else if(obj.goodId==8){
                url="json/yang.json";
            }else if(obj.goodId==9){
                url="json/hou.json";
            }else if(obj.goodId==10){
                url="json/ji.json";
            }else if(obj.goodId==11){
                url="json/gou.json";
            }else if(obj.goodId==12){
                url="json/zhu.json";
            }
            this.$http.get(url).then(function(res){
            obj.list=res.data;
        })
        
        }
    },


    // created(){
    //     this.$http.get("json/zhu.json").then(function(res){
    //         this.list=res.data;
    // }


}



</script>


<style type="text/css">
img{
    height:200px;
    width: 235px;
}
.goodlist li{
    width: 249px;
    height: 220px;
    list-style:none;
    float: left;
    font-size:9px;
    color: red;
    /* margin-bottom: 200px; */
    margin-right: 1px;
}
/* .goodlist li:not(:last-child){
     width:20px;
} */
</style>

