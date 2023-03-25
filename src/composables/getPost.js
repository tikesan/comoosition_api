import { db } from "@/firebase/config";
import { ref } from "vue"
import { doc, getDocFromCache } from "firebase/firestore";

let getPost = (id)=>{
    let post=ref([]);
    let error=(null);
    let load=async()=>{
        try{
            let d = doc(db, "posts", "0ojKqd5JOV4XrpfLuWZk");
            let res = await getDocFromCache(d);
            // let res = await (await getDocs(docid));
            console.log(res);
            // post.value = {id:doc.id,}
            
            // let response = await fetch("http://localhost:3000/posts/" +id)
            // if(response.status===404){
            //     throw new Error('not found url');
            // }
            // let data = await response.json();
            // post.value=data; 
            // console.log(data);
        }catch(err){
            error.value = err.message;
        }
    }
    return{post,error,load}
}
export default getPost;