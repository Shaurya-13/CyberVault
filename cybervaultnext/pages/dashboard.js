import React, { useEffect, useState, useRef } from 'react'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import AddPasswordComp from '../components/AddPassword'
import PasswordsDisplayComp from '../components/Passwords'
import MetaData from '../components/MetaData'
import styles from '../styles/Home.module.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import Webcam from 'react-webcam'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 
const Dashboard = () => {
    const {user} = useUser()
    const [passwords, setPasswords] = useState([])
    const [createModalShow, setCreateModalShow] = useState(false)
    const [valName, setValName] = useState('')
    const [faceValidated, setFaceValidated] = useState('')

    const handleHide = () => {
        let n = window.confirm('Are you sure?\nYour changes will not be saved!')
        if (n) setCreateModalShow(false)
    }

    
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
    const notify='Sorry Facial Authentication server offline'

    // The validate face function sends the request to the flask-python back-end for processing
    // It is properly exception/error handled
    const validateFace = () =>{
        stopCapture()
        fetch("http://127.0.0.1:5000/faceValidation")
        .then(res =>res.text())
        .then((res)=>{
            setValName(res)
            setFaceValidated(true)
        })
        .catch(error=>{
            notification(notify)
        })
    }

    // The use effect hook retrieves the passwords from the database on each page render request
    useEffect(async () => {
        let res = (await axios.get('/api/passwords')).data
        res = res.data
        setPasswords(res.reverse())
    }, [])

    // Sending the payload to the add password endpoint API
    const addPasswordAccount = async payload => {
        payload.avatar = `https://ui-avatars.com/api/?background=random&name=${payload.firstName}+${payload.lastName}`
        let newPassword = (await axios.post('/api/passwords', payload)).data
        setPasswords([newPassword.data, ...passwords])
    }

    // Sending the payload to the edit password endpoint API
    const updatePasswordAccount = async payload => {
        let id = payload.id
        delete payload.id
        let replacedPassword = (await axios.put(`/api/passwords/${id}`, payload)).data
        setPasswords(passwords.map(password => password.id === id? replacedPassword.data : password))
    }

    // Sending the payload to the delete password endpoint API
    const deletePasswordAccount = async id => {
        (await axios.delete(`/api/passwords/${id}`)).data
        setPasswords(passwords.filter(password => password.id !== id))
    }
    // Used to stop the live capture when the validation function is invoked
    const stopCapture=()=>{
        let video=document.getElementsByClassName('webcam')[0];
        video.srcObject.getTracks()[0].stop();
    }

    //Further is the logic to render the manager dashboard page which includes
    // Add password component
    // Password component (preview, edit & delete (they both are inside the preview) components)
    return (
        <div className={styles.background}>
            <MetaData title="Dashboard"/>
            <main>
                {user && (
                    <div className={styles.dashboardContainer}>
                        <div className={styles.welcome}>
                            <div>
                                <img alt="avatar" src={user.picture} className="rounded-circle m-3" width="100" height="100"/> 
                                <h5><strong>Hello {user.nickname.toLowerCase().charAt(0).toUpperCase()+user.nickname.toLowerCase().slice(1)}
                                <img src="./yo.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                                </strong>, Welcome to CyberVault <img src="./vault.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                                <Tippy content={<ol> Features:
                                                    <li>Add passwords</li>
                                                    <li>Face verification</li>
                                                    <li>View, Edit and Delete passwords</li>
                                                    <li>Secure and Private storage</li>
                                                    <li>Password Preview & Copy</li>
                                                    <li>Navigation to web-account URL</li>
                                                </ol>}>
                                        <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                                </Tippy>
                                <h5>This is your own personal protected password managerial space, Enjoy!
                                <img src="./enjoy.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                                </h5>
                                </h5> 
                                {!user.email_verified && 
                                    <div>
                                        Your account is not verified, To verify your account please find a verfication link in the email you have used to signup and sign in!
                                    </div>
                                }                            
                            </div>
                            <br></br>
                            <div>
                                <Button variant="primary" onClick={() => setCreateModalShow(true)}>
                                    Add Password-Account <img src="./add.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                                </Button>
                                <AddPasswordComp
                                    show={createModalShow}
                                    onHide={handleHide}
                                    onCreate ={(payload) => {addPasswordAccount(payload); setCreateModalShow(false)}}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {faceValidated == false ?
                    <>
                    <div className="p-3 my-5 bordered" style={{alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Webcam className='webcam'/>
                    <br></br>
                        <div className="form-group">
                            <Button onClick={()=>{validateFace()}} className="btn btn-primary" style={{display:'block', margin:'0 auto',height:'50px',width:'500px'}}>
                                <img src="./fingerid.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                                Validate Face 
                                <img src="./faceid.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                            </Button>
                        </div>
                    </div>
                    </>
                    :
                    <>
                    {valName=="Not in the system"?
                        <>
                        <div className="p-3 my-5 bordered text-center">
                        <h4><strong>Face not found <img src="./notfound.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />, 
                            <a href='/faceReg' className='text-danger'>Register</a> your face if you haven't done so yet!</strong>
                        <Tippy content='Visit register face page'>
                            <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                        </Tippy>
                        </h4>
                            <div className="form-group">
                                <Button onClick={()=>{setFaceValidated(false), setValName(null)}} className="btn btn-primary" style={{display:'block', margin:'0 auto'}}>
                                    <img src="./retry.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                                    Retry!
                                </Button>
                            </div>
                        </div>
                        </>
                        :
                        <>
                        {valName=="Unknown"?
                            <>
                            <div className="p-3 my-5 bordered text-center">
                                <h4><strong>Face not found <img src="./notfound.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />, 
                                    <a href='/faceReg' className='text-danger'>Register</a> your face if you haven't done so yet!</strong>
                                <Tippy content='Visit the register face page'>
                                        <img src="./info.png" alt="" style={{width : '25px', height : '25px'}} className="mr-2" />
                                </Tippy>
                                </h4>
                                <div className="form-group">
                                    <Button onClick={()=>{setFaceValidated(false), setValName(null)}} className="btn btn-primary" style={{display:'block', margin:'0 auto'}}>
                                        <img src="./retry.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                                        Retry!
                                    </Button>
                                </div>
                            </div>
                            </>
                            :
                            <>
                            <div className={styles.manager}>
                                <PasswordsDisplayComp 
                                passwords={passwords}
                                handleEdit={(payload) => updatePasswordAccount(payload)}
                                handleDelete={(id) => deletePasswordAccount(id)}  
                                />
                            </div>
                            </>
                        }
                        </>
                    }
                    </>
                }
                <ToastContainer position='top-center' autoClose={250} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired()

export default Dashboard