<template>
  <div class="fun">
    <div class="and">
      <div class="left">
        <h1 v-html="con" class="title"></h1>
        <div v-html="fun" class="content"></div>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="revert">
      <div v-for="i in fon">
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'details',
  data () {
    return {
      fun: null
    }
  },
  created () {
    let topic = this.$route.params.id
    console.log(topic)
    axios.get('https://cnodejs.org/api/v1/topic/' + topic).then(function (res) {
      console.log(res)
      this.con = res.data.data.title
      this.fun = res.data.data.content
    }.bind(this))
    axios.post('')
  }
}
</script>
<style>
.fun{
  width: 100%;
  background: #E1E1E1;
  height: 3000px;
}
.and{
  width: 90%;
  margin: 0 auto;
}
.left{
  width: 75%;
  background: #fff;
  float: left;
  margin-top: 20px;
  padding-left: 2%;
  padding-right: 2%;
}
.left .title{
  font-size: 23px;
  }
.left .content{
  width: 100%;
}
.left .content .markdown-text p{
  width: 100%;
}
.left .content .markdown-text p img{
  width: 100%;
}
.left .content .markdown-text ul{
  width: 100%;
  clear: both;
}
.left .content .markdown-text ul li{
  color: #000;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  margin-left: 2%;
}
.left .content .markdown-text>:last-child{
  width: 40%;
}
.right{
  margin-top: 20px;
  width: 20%;
  float: right;
  background: blue;
  height: 300px;
}
</style>
