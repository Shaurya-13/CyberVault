import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { encryptString } from '../passwordEncryptor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import zxcvbn from 'zxcvbn'

const EditPasswordComp = props  => {
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
    const [accountName, setAccountName] = useState(props.accountName)
    const [accountUrl, setAccountUrl] = useState(props.accountUrl) 
    const [email, setEmail] = useState(props.email)
    const [password, setPassword] = useState(props.password) 

    const [accountNameErrs, setAccountNameErrs]=useState(accountNameErrors)
    const [accountUrlErrs, setAccountUrlErrs]=useState(accountUrlErrors)
    const [accountEmailErr, setAccountEmailErr]=useState(accountEmailErrors)
    const [accountPassErr, setAccountPassErr]=useState(accountPasswordErrors)

    const[passwordType, setPasswordType]=useState('password')

    const handleAccountNameOnChange=(e)=>{
        setAccountName(e.target.value)
        const hasSpecialChar=/[!,@,#,$,%,&,*,>,<,`,~,?,=,+,-,',"]/.test(e.target.value)
        const regex = /\bSELECT|FROM|UPDATE|DELETE|INSERT|CREATE|DROP|ALTER|select|from|update|delete|inser|create|drop|alter\b/g;
        const hasSQLWords=regex.test(e.target.value)
        setAccountNameErrs({hasSpecialChar, hasSQLWords})
    }
    const handleAccountUrlOnChange=(e)=>{
        setAccountUrl(e.target.value)
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        const isUrlValid=regex.test(e.target.value)
        setAccountUrlErrs({isUrlValid})
    }
    const handleAccountEmailOnChange=(e)=>{
        setEmail(e.target.value)
        const isEmailValid=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)
        setAccountEmailErr({isEmailValid})
    }
    const handleAccountPasswordOnChange=(e)=>{
        setPassword(e.target.value)
        const isLengthy=e.target.value.length>8
        const hasUpperCase=/[A-Z]/.test(e.target.value)
        const hasLowerCase=/[a-z]/.test(e.target.value)
        const hasNum=/[0-9]/.test(e.target.value)
        const hasSpecialChar=/[@,#,$,%,&,*,!]/.test(e.target.value)
        setAccountPassErr({isLengthy, hasUpperCase, hasLowerCase, hasNum, hasSpecialChar})
    }
    const onEdit = () => {
        const encryptedPassword = encryptString(password)
        const payload = {accountName, accountUrl, email, encryptedPassword, id:props.id}
        props.editPassword(payload)
        props.closePreview()

    }

    const onHide = () => {props.onHide(accountName, accountUrl, email, password)}
    
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
                    <Form>
                        <Row>
                        <p>Saved Account and URL: </p>
                            <Form.Group as={Col} className='form-group'>
                                <Form.Control 
                                type= "accountName" 
                                placeholder="Account name"  
                                className='form-control' 
                                value={accountName}
                                onChange={handleAccountNameOnChange}
                                />
                                <li className={accountNameErrs.hasSQLWords? 'text-danger':'text-success'}>Account normal String</li>
                                <li className={accountNameErrs.hasSpecialChar? 'text-danger':'text-success'}>Account No special chars</li>
                            </Form.Group>
                            <Form.Group as={Col} className='form-group'>
                                <Form.Control 
                                type= "accountUrl" 
                                placeholder="Account Url"  
                                className='form-control' 
                                value={accountUrl} 
                                onChange={handleAccountUrlOnChange}/>
                            </Form.Group>
                            <li className={accountUrlErrs.isUrlValid? 'text-success':'text-danger'}>Url should be valid</li>
                        </Row>
                        <br></br>
                        <Row>
                        <p>Saved Email associated with account: </p>
                            <Form.Group as={Col}>
                                <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={handleAccountEmailOnChange}/>
                            </Form.Group>
                            <li className={accountEmailErr.isEmailValid? 'text-success':'text-danger'}>Email should be valid</li>
                        </Row>
                        <br></br>
                        <Row className='my-1'>
                        <p>Saved respective Password for account and email: </p>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    type={passwordType} 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={handleAccountPasswordOnChange}/>
                                </Form.Group>
                            </Col>
                            <Col xs={2} className="text-center">
                                <span style={{cursor:'pointer'}}
                                onClick={()=>{setPasswordType(passwordType==="password"?"text":"password")}}>
                                    {passwordType==="password"?
                                        <FontAwesomeIcon icon={faEye} size='1x' className="align-bottom" /> 
                                        : 
                                        <FontAwesomeIcon icon={faEyeSlash} size='1x' className="align-bottom" />
                                    }
                                </span>
                            </Col>
                            <p>Or go to <a className='text-primary' target="_blank" href="generator">Generate</a> a new password which you can paste here!</p>
                            <div className='progress' style={{height:'8px'}}>
                                <div className='progress-bar' style={progressColorChange()} passForStrength={password}></div>
                            </div>
                            <p style={{color:colorProgression()}}>{strengthLabel()}</p>

                            <li className={accountPassErr.isLengthy? 'text-success':'text-danger'}>Should be greater than 8 chars</li>
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
                <Button variant="success" onClick={onEdit} 
                disabled={(
                    Object.values(accountNameErrs).includes(true)||
                    Object.values(accountUrlErrs).includes(false)||
                    Object.values(accountEmailErr).includes(false)||
                    Object.values(accountPassErr).includes(false)||
                    !accountName || !accountUrl || !email || !password
                    ) ? true : false}>
                Edit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPasswordComp