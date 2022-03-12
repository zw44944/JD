<template>
    <div class="rb">
        <div v-if="kk==0">
           <Goodslist :goodId="0"></Goodslist>
       </div>
       <div v-if="kk==1">
           <Goodslist :goodId="1"></Goodslist>
       </div>
       <div v-else-if="kk==2">
           <Goodslist :goodId="2"></Goodslist>
       </div>
       <div v-else-if="kk==3">
           <Goodslist :goodId="3"></Goodslist>
       </div>
       <div v-else-if="kk==4">
           <Goodslist :goodId="4"></Goodslist>
       </div>
       <div v-else-if="kk==5">
           <Goodslist :goodId="5"></Goodslist>
       </div>
       <div v-else-if="kk==6">
           <Goodslist :goodId="6"></Goodslist>
       </div>
       <div v-else-if="kk==7">
           <Goodslist :goodId="7"></Goodslist>
       </div>
       <div v-else-if="kk==8">
           <Goodslist :goodId="8"></Goodslist>
       </div>
       <div v-else-if="kk==9">
           <Goodslist :goodId="9"></Goodslist>
       </div>
       <div v-else-if="kk==10">
           <Goodslist :goodId="10"></Goodslist>
       </div>
       <div v-else-if="kk==11">
           <Goodslist :goodId="11"></Goodslist>
       </div>
       <div v-else-if="kk==12">
           <Goodslist :goodId="12"></Goodslist>
       </div>
    </div>
</template>
<script type="text/javascript">
import Msg from "./msg.js"
import Goodslist from "./goodslist.vue"
export default{
    data(){
        return{
            kk:0
        }
    },
    mounted:function(){
        var _this=this
        Msg.$on("val",function(m){
        _this.kk=m;
        })
    },
    components:{
            Goodslist
    }
}
</script>

<style scoped>
.rb{
    background-color:blue;
}
</style>
