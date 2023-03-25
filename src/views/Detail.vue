<template>  
<div class="post">
    <h2>{{post.title}}</h2> 
    <p>{{post.body}}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
        {{tag}}
    </div>
</div>
</template>

<script>
import getPost from '../composables/getPost'
import {useRoute} from 'vue-router'
export default {
    props:['id'],
    setup(props){
        let route=useRoute();
        console.log(route.params.id);
        let{error,post,load}=getPost(route.params.id);
        load();
        return{error,post}
    }

}
</script>

<style>

</style>