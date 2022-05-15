import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import FormControl from 'react-bootstrap/FormControl'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditPasswordComp from "./EditPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCopy, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PasswordPreviewComp = props => {
  //password type is used to decide when to mask 
  //the password characters and when to unmask them 
  //according to a click eventhandler set on the eye icon
  const [passwordType, setPasswordType] = useState('password')

  // Copy to cliopboard function
  const clipBoardCopy=()=>{
    const passwordText = document.createElement('textarea')
    passwordText.innerText = props.password
    document.body.appendChild(passwordText)
    passwordText.select()
    document.execCommand('copy')
    passwordText.remove()
  }
  //setting up the notification function along with a custom notification
  const notify='Successfully copied your password to clipboard'
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
  const handleCopyPassToCLip=(e)=>{
    clipBoardCopy()
    notification(notify)
  }

  //rednering the password preview modal which poips up when the user clicks
  //on a password column to view the password and then to either to edit it or delete
  //(edit component has also been included so its pops up as the button is clicked) 

  return (
    <Modal {...props} size="xlg"aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header style={{backgroundColor : "#d1e1f0"}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Account: <a href={`https://${props.accountUrl}`} rel="noreferrer" target="_blank">{props.accountName}</a> <img alt="avatar" loader={myLoader} src={`https://www.google.com/s2/favicons?sz=64&domain_url=${props.accountUrl}`} width="35" height="35" className="rounded-circle" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col>
              <p>Email added for {props.accountName} account:</p>
              <div><FormControl type="text" value={props.email} className="my-1" readOnly/></div>
              <p></p>
              <Row className="my-1">
                  <p>Password added for {props.accountName} account:</p>
                  <Col xs={7} md={9}> 
                      <FormControl type={passwordType} value={props.password} readOnly/>
                  </Col>
                  <Col xs={2} md={1} className="text-left">
                      <span style={{cursor : 'pointer'}} onClick={() => {setPasswordType(passwordType === "password"? "text" : "password")}}>
                          {passwordType === "password"? 
                          <FontAwesomeIcon icon={faEye} size="1x" className="align-bottom" /> 
                          : 
                          <FontAwesomeIcon icon={faEyeSlash} size="1x" className="align-bottom" /> }
                      </span>
                  </Col>
                  <Col xs={2} md={1} className="text-right">
                      <span style={{cursor : 'pointer'}} onClick={handleCopyPassToCLip}>
                        <FontAwesomeIcon icon={faCopy} size="1x" className="align-bottom" />
                      </span>
                  <ToastContainer position='top-center' autoClose={250} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onEdit}>
          <FontAwesomeIcon icon={faEdit} size="sm" className="" />Edit
        </Button>
        <Button variant="danger" onClick={props.onDelete}>
          <FontAwesomeIcon icon={faTrashAlt} size="1x" className="" />Del 
        </Button>
      </Modal.Footer>
      <EditPasswordComp closePreview={() => {props.onHide()}} id={props.id} show={props.edit} editPassword={props.editPassword} onEdit={props.onEdit}
        accountName={props.accountName}
        accountUrl={props.accountUrl}
        email={props.email}
        password={props.password}
        title={"Edit Password for "+props.accountName}
        onHide={props.onHideEdit}/>
      </Modal>
    )
}

const myLoader=({src})=>{
  return src
}

export default PasswordPreviewComp