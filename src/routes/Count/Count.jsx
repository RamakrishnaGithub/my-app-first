"use client"
import React, { Fragment, useState } from 'react'
import styles from './Count.module.css'
import { useSelector } from 'react-redux'
export const Count = () => {
    const {photos} = useSelector((state) => {
        return {
            photos: state.appReducer.photos
        }
    })
    const [count, setConnt] = useState(0)
    const fnIncrement = () => {
        setConnt(count + 1);
    }
    return (<Fragment >
        <div data-testid="count" className={styles.clr}>Count</div>
        <h1>{count}</h1>
        <button onClick={fnIncrement}>Increment</button>
        <div>
            {
                photos.map(({ title, thumbnailUrl }, index) => {
                    return <li key={index}>{title}
                    <div><img src={thumbnailUrl} alt="" /></div></li>
                })
            }
        </div>
    </Fragment>
    )
}
