import React from "react";
import PostCard from "./postCard.jsx";

export default function Post({ posts }) {
    console.log(posts);
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Here are the posts!</h1>
            {posts.map((data, key) => <PostCard postDetails={data} key={key}/>)}
        </>
    )
}