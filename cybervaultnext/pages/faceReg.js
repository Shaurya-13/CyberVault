import styles from '../styles/Home.module.css'
import { withPageAuthRequired} from '@auth0/nextjs-auth0'
import React, { useState } from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import Button from 'react-bootstrap/Button'
import Webcam from 'react-webcam'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const faceReg = () =>{
    
    const nameErrors={
        hasSpecialChar:true,
        hasSQLWords:true
    }
    
    const [name, setName]=useState('')
    const [result_status, setResult_status]=useState('')
    const [nameErr, setNameErr]=useState(nameErrors)
    const [faceRegistered, setFaceRegistered]=useState('')

    const notify='Sorry Facial Authentication server offline'
    const notification = (message)=>{
        toast(message, {
            position:'top-center',
            autoClose:350,
            hideProgressBar:false,
            closeOnClick:false,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
        })
    }

    // Sends the information from the client side to the flask-python back-end for processing 
    // and to be registered into the SQL database
    const registerFace = (e) =>{
        stopCapture()
        fetch("http://127.0.0.1:5000/faceRegistration?name="+name)
        .then(res =>res.text())
        .then((res)=>{
            setResult_status(res)
            setName(name)
            setFaceRegistered(true)
        })
        .catch(error=>{
            notification(notify)
        })
    }
    
    const stopCapture=()=>{
        let video=document.getElementsByClassName('webcam')[0];
        video.srcObject.getTracks()[0].stop();
    }
    // Input validation parameters used for the name that has to be entered
    const handleNameOnCHange=(e)=>{
        setName(e.target.value)
        const hasSpecialChar=/[!,@,#,$,%,&,*,>,<,`,~,?,=,+,-,',"]/.test(e.target.value)
        const regex = /\bSELECT|FROM|UPDATE|DELETE|INSERT|CREATE|DROP|ALTER|select|from|update|delete|inser|create|drop|alter\b/g;
        const hasSQLWords=regex.test(e.target.value)
        setNameErr({hasSpecialChar, hasSQLWords})
    }

    return(
        <div className={styles.distinctorBg}>
            <div className={styles.faceregContainer}>
            <div className={styles.distinctor}>
                <div className="col-md-10 mx-auto">
                    <h2 className="text-center my-4 bg-light text-dark">Face Registration</h2>
                    <h5 className="text-dark">You can register your face here!
                    <Tippy content={
                        'You can then validate your face in the manager'
                        }>
                        <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                    </Tippy>
                    </h5>
                    {faceRegistered==false?
                    <>
                        <div style={{alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <Webcam className='webcam'/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <b>Enter your name: </b>
                            <input type="text" value={name} className="form-control" onChange={handleNameOnCHange} style={{width:"20%",display:'block', margin:'0 auto'}}/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <Button variant="success" 
                            onClick={()=>{registerFace()}} 
                            disabled={Object.values(nameErr).includes(true)||!name} style={{display:'block', margin:'0 auto'}}>
                                <img src="./fingerid.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                                Register Face
                                <img src="./faceid.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                            </Button>
                        </div>
                    </>
                    :
                    <>
                        {result_status=="Face not detected"?
                        <>
                        <div className="p-3 my-5 bordered text-center">
                            <h4><strong>The Face scan was not successful. No face was detected, please try again!</strong>
                            <Tippy content='Visit register face page'>
                                <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                            </Tippy>
                            </h4>
                            <div className="form-group">
                                <Button onClick={()=>{setFaceRegistered(false), setName(null)}} className="btn btn-primary" style={{display:'block', margin:'0 auto'}}>
                                    <img src="./retry.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                                    Retry!
                                </Button>
                            </div>
                        </div>
                        </>
                        :
                        <>
                            {result_status=="Name already used"?
                            <>
                            <div className="p-3 my-5 bordered text-center">
                                <h4><strong>Name is already in use and hence will not be registered again!</strong>
                                <Tippy content='Visit register face page'>
                                    <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                                </Tippy>
                                </h4>
                                <div className="form-group">
                                    <Button onClick={()=>{setFaceRegistered(false), setName(null)}} className="btn btn-primary" style={{display:'block', margin:'0 auto'}}>
                                        <img src="./retry.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                                        Retry!
                                    </Button>
                                </div>
                            </div>
                            </>
                            :
                            <>
                                {result_status=="Registration name used is not valid"?
                                        <>
                                        <div className="p-3 my-5 bordered text-center">
                                            <h4><strong>Name parameters not allowed!</strong>
                                            <Tippy content='Visit register face page'>
                                                <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                                            </Tippy>
                                            </h4>
                                            <div className="form-group">
                                                <Button onClick={()=>{setFaceRegistered(false), setName(null)}} className="btn btn-primary" style={{display:'block', margin:'0 auto'}}>
                                                    <img src="./retry.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                                                    Retry!
                                                </Button>
                                            </div>
                                        </div>
                                        </>
                                        :
                                        <>
                                        <div>
                                            <div className="details">
                                                <h4>{name} Your face was registered!, you can now visit the <a href='/dashboard' className='text-danger'>manager</a> for facial validation</h4>
                                            </div>
                                        </div>
                                        </>
                                }
                            </>
                            }
                        </>
                        }
                    </>
                    }
                </div>
            </div>
        </div>
        <ToastContainer position='top-center' autoClose={250} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    </div>
    )
}

export const getServerSideProps = withPageAuthRequired()
export default faceReg