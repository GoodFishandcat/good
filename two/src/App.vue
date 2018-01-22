<template>
  <div id="app">
    <div class="head">
      <div class="one">
        <div class="tu">
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
          <div class="ipt">
            <img src="https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png">
            <input type="text">
          </div>
        </div>
        <ul id="shou">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/one">新手入门</router-link>
          </li>
          <li>
            <router-link to="/two">API</router-link>
          </li>
          <li>
            <router-link to="/three">关于</router-link>
          </li>
          <li>
            <router-link to="/four">注册</router-link>
          </li>
          <li>
            <router-link to="/five">登录</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  div,body,ul,li,p{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 100%;
    background: #444444;
  }
  .one{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tu{
    width: 30%;
    display: flex;
  }
  .tu img{
    width: 30%;
    height: auto;
  }
  .tu .ipt{
    width: 50%;
    margin-top: 6%;
    border: 1px black solid;
    background: #fff;
    display: flex;
    border-radius: 10px;
    height: 20px;
  }
  .tu .ipt img{
    width: 10%;
    margin-left: 5px;
  }
  .tu .ipt input{
    width: 70%;
    border: none;
  }
  ul{

    width: 30%;
    color: #C3CCB2;
    justify-content: space-around;
    font-size: 12px;
  }
  #shou{
    display: flex;
  }
  #shou li{
    list-style: none;
  }
  a{
    text-decoration: none;
     color: #C3CCB2;
  }

</style>
