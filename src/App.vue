<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="fetchPosts">получить посты</my-button>
    <input type="text" v-model="modificatorValue">
    <my-button
        @click="showDialog"
        style="margin: 15px 0;"
    >
      создать пост
    </my-button>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </my-dialog>

    <post-list
        :posts="posts"
        @remove="removePost"
    ></post-list>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "./components/PostList";
import axios from 'axios';
export default {
  components: {
    PostList, PostForm
  },
  data(){
    return{
      posts:[
        {id:1, title:"js1",body:"описание поста1"},
        {id:2, title:"js2",body:"описание поста2"},
        {id:3, title:"js3",body:"описание поста3"},
        {id:4, title:"v4", body:"описание поста4"},
      ],
      dialogVisible: false,
      modificatorValue: '1',
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;

    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    },
    async fetchPosts(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        console.log(response.data)
      } catch(e){
        alert('ошибка')
      }

    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}



</style>
