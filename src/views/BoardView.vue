<template>
<div class="board">
    <!-- 게시글 -->
    <h1>게시글 목록입니다</h1>
    <a v-for="n in 3" :key="n">
        <router-link :to=" `board/${n}` ">{{ n }}</router-link> |
    </a>

    <!-- 각 페이지 뜨는 곳 -->
    <router-view></router-view>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'BoardView',
}
</script>
