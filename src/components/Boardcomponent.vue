<template>
    <div class="board">
        <h3>{{ $route.params.id }}페이지입니다</h3>
        <p>{{ memos[`${$route.params.id}`-1].memo }}</p>
    </div>
    
</template>

<script>
import data from '@/assets/data.json'

export default {
    name: "BoardComponent",
    data: function() {
        return {
            memos: data.board

        }
    }
}
</script>
