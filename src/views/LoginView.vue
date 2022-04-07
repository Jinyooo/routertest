<template>
  <div class="login">
    <label>아이디</label>
    <input type="text" v-model="user">
    <br>
    <label>패스워드</label>
    <input type="password">

    <br>
    <button @click="loginUser">로그인</button>
    <button @click="$router.push('/')">취소</button>

  </div>
</template>

<script>
export default {
  name: "LoginView",
  data: ()=>{
    return {
      user: ""
    }
  },
  methods: {
    loginUser: function() {
      // login-event 생성, 유저 내보내기
      this.$emit('login-event', this.user);
      // 홈 화면으로 이동
      this.$router.push('/');
    }
  }
}
</script>