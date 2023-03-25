
import { db } from '@/firebase/config';
import { ref } from '@vue/reactivity'
import { getDocs, collection } from "firebase/firestore"; 
// import { reject, resolve } from 'core-js/fn/promise';
let getPosts = ()=>{
    let error = ref("");
    let posts=ref([]); 
    let load = async()=>{
      try{
        // let response = await fetch("http://localhost:3000/posts")
        // if(response.status===404){
        //    throw new Error("not found url")
        // }
        // let datas =await response.json();
        // posts.value =datas;
        // console.log(posts.value);
        let res = await getDocs(collection(db, "posts"));
        // console.log(res.docs);
        posts.value = res.docs.map((doc)=>{
        //  console.log(doc);
        return {id:doc.id,...doc.data()}
        })
      }catch(err){
        error.value = err.message;
      }
    }
    return{error,posts,load}
}

export default getPosts;