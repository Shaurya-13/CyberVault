import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import MetaData from '../components/MetaData'
import styles from '../styles/Home.module.css'


export default function Home() {
    const { error, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    //Responsible for rendering the common Home page that can be seen by a user regardless of their authentication status 

    return (
        <div>
            <MetaData title="Home" />
            <main className={styles.container} >
            <h1 className="navbar d-block text-center" style={{backgroundColor : "#FFA059", fontSize:'50px', paddingTop:'10px', textShadow:'2px 2px 5px red'}} >Welcome to CyberVault</h1>
                <div className={styles.homeImgCont}>
                <img alt="home" src="/face.png" className='h-25 shadow-lg mx-2' style={{borderRadius : "10px"}}/>
                <img alt="home" src="/home.jpg" className={styles.img}/>
                <img alt="home" src="/pass.jpg" className='h-25 shadow-lg mx-2' style={{borderRadius : "10px"}}/>
                </div>
            </main>
            <p className="navbar fixed-bottom d-block w-100 m-0 text-center" style={{backgroundColor : "#d1e1f0e7"}} >
                <img src="./lock.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                The ultimate one-stop secure solution to all your password managerial concerns 
                <img src="./key.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
            </p>
        </div>
    )
}
