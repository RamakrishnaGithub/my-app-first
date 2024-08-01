"use client"
import React from 'react'
import "./posts.css"
import { useDispatch } from 'react-redux'

export const posts = () => {
  const dispatch=useDispatch()
  const getPosts=()=>{
    dispatch({type:"GET_POSTS",payload:{n1:10,n2:20}})
  }
  return (
    <div>
      <div className="posts">Posts</div>
            <button onClick={getPosts}>Get posts</button>
            <h6>
                Note: Please check console for store updation , while clicking on the button
            </h6>
    </div>
  )
}


