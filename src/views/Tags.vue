<template>
    <div class="tag">
         <div v-if="error">{{error}}</div>
          <div v-if="posts.length" class="layout">
              <div>
                <PostList :posts="filteredPosts"></PostList>
              </div>
              <div>
                  <TagsCloud :posts="posts"></TagsCloud>
              </div>
          </div>
          <!-- <div v-else>
              laoding...
          </div> -->
    </div>
</template>

<script>
import TagsCloud from '../components/TagsCloud'
import PostList from '../components/PostList'
import { computed } from 'vue';
import getPosts from "../composables/getPosts"
export default {
  components: {
    TagsCloud, PostList },
    props:["tag"],//vuejs laravvel
    setup(props){
        let {posts,error,load}=getPosts();
        load();
        let filteredPosts=computed(()=>{
            return posts.value.filter((p)=>{
                return p.tags.includes(props.tag)
            })
        })
        return{posts,error,filteredPosts}
    }
}
</script>

<style>
    .tag{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>