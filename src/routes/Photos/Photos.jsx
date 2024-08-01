"use client"
import React from 'react'
import './Photos.css'
import { photosAction } from '@/redux/actions/photosAction'

export const Photos = () => {
   
    return (
        <div>
            <div className="photos">Photos</div>
            <button onClick={photosAction}>Get Photos</button>
            <h6>
                Note: Please check console for store updation , while clicking on the button
            </h6>
        </div>
    )
}
