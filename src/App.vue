<template>
  <div id="app">
    <!-- 로그인 버튼 -->
    <div v-if="login">
      <button @click="$router.push('/board')">글목록</button>
      <button @click="$router.push(`/userinfo/${user}`)">{{user}}님의 정보</button>
      <button @click="logout">로그아웃</button>
    </div>
      
      <button 
      v-else 
      @click="$router.push('/login')">
      로그인
      </button>

      <router-view @login-event="loginSuccess"/>


  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'App',
  data: ()=>{
    return {
      login: false,
      user: ""
    }
  },
  methods: {
    loginSuccess: function(user) {
      this.user = user;
      this.login = true;
      
    },
    logout: function() {
      this.user = "";
      this.login = false;
      this.$router.push('/')
    }
  }
  
}
</script>

<style>
  #app {
    text-align: center;
  }
</style>
