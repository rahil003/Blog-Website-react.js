import React from "react";
import {useState} from "react";
import {addDoc,collection} from "firebase/firestore";
import {db,auth} from "../firebase-config"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function CreatePost({isAuth}){

    const [title,setTitle] =useState("");
    const [postText,setPostText]=useState("");
    let navigate=useNavigate();
    const postcollectionref=collection(db,"posts");

    const createPost = async()=>{
        await addDoc(postcollectionref,{title,postText,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}
        
        })
         navigate("/")
    }

    //if someone enters url of createost directly then we check is auth or not
    useEffect(() => {
       if(!isAuth){
           navigate("/login")
       }
    }, [])

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(event)=>{
                        setTitle(event.target.value)
                    }}
                        />

                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="post.." onChange={(event)=>{
                        setPostText(event.target.value)
                    }}/>

                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;