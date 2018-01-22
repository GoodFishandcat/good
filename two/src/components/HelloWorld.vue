<template>
  <div class="cod">
    <div class="hell">
      <div class="zuo">
        <div class="fen">
          <ul class="dian" id="hu">
            <li>
              <router-link to="/?tab=all">全部</router-link>
            </li>
            <li>
              <router-link to="/?tab=good">精华</router-link>
            </li>
            <li>
              <router-link to="/?tab=share">分享</router-link>
            </li>
            <li>
              <router-link to="/?tab=ask">问答</router-link>
            </li>
            <li>
              <router-link to="/?tab=job">招聘</router-link>
            </li>
            <li>
              <router-link to="/?tab=dev">客户端测试</router-link>
            </li>
          </ul>
        </div>
        <ul class="huo">
          <li v-for='(item) in arr'>
            <div class="tu">
            <img :src="item.author.avatar_url">
          </div>
          <div class="tiao">
            <p><span>{{item.reply_count}}</span>/{{item.visit_count}}</p>
          </div>
          <div class="zhi">
            <span></span>
            <router-link :to="{name:'Details',params:{id:item.id}}">{{item.title}}</router-link>
          </div>
          <div class="time">
            <img :src="item.author.avatar_url">
            <span>20分钟前</span>
          </div>
        </li>
      </ul>
      </div>
      <router-view></router-view>
      <div class="you">
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr: []
    }
  },
  created () {
    axios.get('https://cnodejs.org/api/v1/topics').then(function (res) {
      // console.log(res)
      this.arr = res.data.data
      // console.log(this.arr)
    }.bind(this))
  },
  watch: {

  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cod{
    width: 100%;
    background: #E1E1E1;
    height: 3000px;
  }
  .hell{
    width: 90%;
    margin: 0 auto;
  }
  .zuo{
    width: 79%;
    background: #fff;
    float: left;
    margin-top: 20px;
  }
  .zuo .fen{
    width: 100%;
    background: #F6F6F6;
    line-height: 40px;
  }
  .fen .dian{
    width: 50%;
    display: flex;
    font-size: 16px;
  }
  .fen .dian a{
    width: 10%;
    color: #80BD01;
  }
  .you{
    margin-top: 20px;
    width: 20%;
    float: right;
    background: blue;
    height: 300px;
  }
  .fen .huo{
    width: 100%;
    list-style: none;
  }
  #hu li{
    list-style: none;
    float: left;
  }
  .zuo .huo{
    width: 100%;
    display: block;
  }
  .zuo .huo li{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F6F6F6;
  }
  .zuo .huo li .tu{
    width: 7%;
  }
  .zuo .huo li .tu img{
    margin-left: 20%;
    width: 50%;
    height: 30px;
  }
  .zuo .huo li .tiao{
    width: 8%;
  }
  .zuo .huo li .tiao p span{
    font-size: 14px;
    color: #9E78CC;
  }
  .zuo .huo li .tiao p{
    font-size: 12px;
  }
  .zuo .huo li .zhi{
    width: 75%;
  }
  .zuo .huo li .zhi a{
    color: #888888;
    font-size: 16px;
  }
  a:hover{
    border-bottom: 1px solid #888888;
  }
  .zuo .huo li .time{
    width: 10%;
  }
  .zuo .huo li .time img{
    width: 20%;
    height: 20px;
  }
  .zuo .huo li .time span{
    color: #7790B9;
  }
</style>
