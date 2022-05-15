import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { encryptString } from '../passwordEncryptor'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import zxcvbn from 'zxcvbn'


const AddPasswordComp = (props)  => {
    
    const accountNameErrors={
        hasSpecialChar:true,
        hasSQLWords:true
    }
    const accountUrlErrors={
        isUrlValid:false
    }
    const accountEmailErrors={
        isEmailValid:false
    } 
    const accountPasswordErrors={
        isLengthy:false,
        hasUpperCase:false,
        hasLowerCase:false,
        hasNum:false,
        hasSpecialChar:false
    }

    const [accountName, setAccountName] = useState('')
    const [accountUrl, setAccountUrl] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accountNameErrs, setAccountNameErrs]=useState(accountNameErrors)
    const [accountUrlErrs, setAccountUrlErrs]=useState(accountUrlErrors)
    const [accountEmailErr, setAccountEmailErr]=useState(accountEmailErrors)
    const [accountPassErr, setAccountPassErr]=useState(accountPasswordErrors)   

    //Account name validation processing
    const handleAccountNameOnChange=(e)=>{
        setAccountName(e.target.value)
        const hasSpecialChar=/[!,@,#,$,%,&,*,>,<,`,~,?,=,+,-,',"]/.test(e.target.value)
        const regex = /\bSELECT|FROM|UPDATE|DELETE|INSERT|CREATE|DROP|ALTER|select|from|update|delete|inser|create|drop|alter\b/g;
        const hasSQLWords=regex.test(e.target.value)
        setAccountNameErrs({hasSpecialChar, hasSQLWords})
    }

    //Account URL validation processing
    const handleAccountUrlOnChange=(e)=>{
        setAccountUrl(e.target.value)
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        const isUrlValid=regex.test(e.target.value)
        setAccountUrlErrs({isUrlValid})
    }

    //Account email validation processing
    const handleAccountEmailOnChange=(e)=>{
        setEmail(e.target.value)
        const isEmailValid=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)
        setAccountEmailErr({isEmailValid})
    }

    //Account Password validation processing
    const handleAccountPasswordOnChange=(e)=>{
        setPassword(e.target.value)
        const isLengthy=e.target.value.length>8
        const hasUpperCase=/[A-Z]/.test(e.target.value)
        const hasLowerCase=/[a-z]/.test(e.target.value)
        const hasNum=/[0-9]/.test(e.target.value)
        const hasSpecialChar=/[!,@,#,$,%,&,*,>,<,`,~,?,=,+,-]/.test(e.target.value)
        setAccountPassErr({isLengthy, hasUpperCase, hasLowerCase, hasNum, hasSpecialChar})
    }

    //Creating the notification function
    const notify='Your password has successfully been added!'
    const notification = (message)=>{
        toast(message, {
            position:'top-center',
            autoClose:250,
            hideProgressBar:false,
            closeOnClick:false,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
        })
    }

    //Creating the payload to be sent to the API endpoint (Sends request to DB)
    const handleCreate = async () => {
        const encryptedPassword = encryptString(password)
        const payload = {
            accountName,
            accountUrl,
            email,
            encryptedPassword 
        }
        props.onCreate(payload)
        setAccountName('')
        setAccountUrl('')
        setEmail('')
        setPassword('')
        notification(notify)
    }

    const onHide = () => {
        props.onHide(accountName, accountUrl, email, password)
    }

    // Creating a strength analyser function to include analyser in the add password modal
    const analysisResult=zxcvbn(password)
    const analysisScore=analysisResult.score*100/4

    const strengthLabel = ()=>{
        switch(analysisResult.score){
            case 0:
                return 'Very Weak'
            case 1:
                return 'Weak'
            case 2:
                return 'Decent'
            case 3:
                return 'Better'
            case 4:
                return 'Strong enough'
            default:
                return 'none'
        }
    }
    // Color progress bar which is linked to the analyser result
    const colorProgression=()=>{
        switch(analysisResult.score){
            case 0:
                return '#696363'
            case 1:
                return '#EA1111'
            case 2:
                return '#fff200'
            case 3:
                return '#66ff00'
            case 4:
                return '#00ff5e'
            default:
                return 'none'
        }
    }
    const progressColorChange=()=>({
        width:`${analysisScore}%`, background:colorProgression()
    })

    //Rendering the add password modal form

    return (
        <Modal
            {...props}
            size="xlg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.header && props.header}
                    {props.title && props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form noValidate>
                        <Row>
                            <p>Social/Business/Personal Account and its URL: </p>
                            <Form.Group as={Col} className='form-group' controlId="validationFormik01">
                                <Form.Control 
                                type= "accountName" 
                                placeholder="Account name"
                                name="accountName"  
                                className='form-control' 
                                value={accountName} 
                                onChange={handleAccountNameOnChange}
                                />
                                <li className={accountNameErrs.hasSQLWords? 'text-danger':'text-success'}>Account normal String</li>
                                <li className={accountNameErrs.hasSpecialChar? 'text-danger':'text-success'}>Account No special chars</li>
                            </Form.Group>
                            <Form.Group as={Col} className='form-group' controlId="validationFormik02">
                                <Form.Control 
                                type= "accountUrl" 
                                placeholder="Account Url"  
                                className='form-control'
                                name="accountUrl" 
                                value={accountUrl}  
                                onChange={handleAccountUrlOnChange}
                                />
                            </Form.Group>
                            <li className={accountUrlErrs.isUrlValid? 'text-success':'text-danger'} style={{alignContent:'right'}}>Url should be valid</li>
                        </Row>
                        <br></br>
                        <Row>
                        <p>Email used for mentioned account: </p>
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Control 
                                type="email" 
                                placeholder="Email"
                                name="email" 
                                value={email} 
                                onChange={handleAccountEmailOnChange}
                                />
                            </Form.Group>
                            <li className={accountEmailErr.isEmailValid? 'text-success':'text-danger'}>Email should be valid</li>
                        </Row>
                        <br></br>
                        <Row>
                        <p>Respective Password to be used: </p>
                            <Form.Group as={Col} controlId="validationFormik04">
                                <Form.Control 
                                type="password" 
                                placeholder="Enter Secure/Strong Password here"
                                name="password" 
                                value={password} 
                                onChange={handleAccountPasswordOnChange}
                                />
                            </Form.Group>
                            <p>Or go to <a className='text-primary' target="_blank" href="generator">Generate</a> a new password which you can paste here!</p>
                            <div className='progress' style={{height:'8px'}}>
                                <div className='progress-bar' style={progressColorChange()} passForStrength={password}></div>
                            </div>
                            <p style={{color:colorProgression()}}>{strengthLabel()}</p>
                            <li className={accountPassErr.isLengthy? 'text-success':'text-danger'}>Should be greater than 8 characters</li>
                            <li className={accountPassErr.hasUpperCase? 'text-success':'text-danger'}>Should contain an upper case letter</li>
                            <li className={accountPassErr.hasLowerCase? 'text-success':'text-danger'}>Should contain a lower case letter</li>
                            <li className={accountPassErr.hasNum? 'text-success':'text-danger'}>Should contain a number</li>
                            <li className={accountPassErr.hasSpecialChar? 'text-success':'text-danger'}>Should contain a special character</li>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Close</Button>
                <Button variant="success" onClick={handleCreate} disabled={
                    Object.values(accountNameErrs).includes(true)||
                    Object.values(accountUrlErrs).includes(false)||
                    Object.values(accountEmailErr).includes(false)||
                    Object.values(accountPassErr).includes(false)||
                    !accountName || !accountUrl || !email || !password}>
                    Create
                </Button>
            </Modal.Footer>
            <ToastContainer position='top-center' autoClose={250} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        </Modal>
    )
}

export default AddPasswordComp