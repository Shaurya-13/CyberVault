import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import PasswordPreviewComp from './passwordPreview'
import { decryptString } from '../passwordEncryptor'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// The password compoennt is responsible 
// for combining the Preview, edit and delete so they don't have to be called individually on the dashboard page


const Password = ({id, accountName, accountUrl, email, password, avatar, handleDelete, handleEdit}) => {

    const [openEdit, setOpenEdit] = useState(false)
    const [openPreview, setOpenPreview]=useState(false)

    const previewPassword=()=>{
        setOpenPreview(true)
    }
    const editPassword = (payload) => {
        handleEdit(payload)
        setOpenEdit(false)
        notification(editNotify)
    }

    const delNotify='Password successfully deleted!'
    const editNotify='Password edited successfully!'

    const notification = (message)=>{
        toast(message, {
            position:'top-center',
            autoClose:150,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
        })
    }

    const deletePassword = () => {
        handleDelete(id)
        notification(delNotify)
    }

    // In the rendering of the password table and the preview component, 
    // the icon for the column is updated dynamically according to the account that is added 
    // (using its URL) (The Avatar icon for the password accountrs)
    return (
        <Col sm="12">
            <Button style={{backgroundColor:'white', color:'black', margin:'5px 0px', width:'100%'}} onClick={previewPassword}>
                <Row>
                    <Col sm={1}>
                        <img alt="avatar" loader={myLoader} src={`https://www.google.com/s2/favicons?sz=64&domain_url=${accountUrl}`} width="35" height="35" className="rounded-circle" />
                    </Col>
                    <Col className="text-left mt-1">Social/Business/Personal Account : {accountName}</Col>
                    <Col className="text-left mt-1">Associated email : {email}</Col>
                </Row>
            </Button>
            <ToastContainer position='top-center' autoClose={150} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
            <PasswordPreviewComp id={id} show={openPreview} edit={openEdit} onHideEdit={()=>{setOpenEdit(false)}} onEdit={()=>{setOpenEdit(true)}} onDelete={()=>{deletePassword();setOpenPreview(false)}}
            accountName={accountName}
            accountUrl={accountUrl}
            email={email}
            password={password}
            editPassword={editPassword}
            title={"Have a peek at the password for "+accountName}
            onHide={()=>{setOpenPreview(false)}}/>
        </Col>
    )
}


const PasswordsDisplayComp = ({passwords, handleEdit, handleDelete}) => {
    return (
        <Container className="p-3 my-5 bordered"> 
      <>
        <Row className="p-2 text-white" style={{backgroundColor : "dodgerblue"}}>
            <Col xs={12} sm={7} className="pt-2">
              {passwords ? passwords.length: 0} passwords present and <strong>face verified</strong>, List of your passwords and accounts are as follows:
            </Col>
        </Row> 
        <br/><br/>
        <Row>
            {passwords.length > 0? 
                passwords.map(ele => {
                    const password = decryptString(ele.encryptedPassword)
                    const passwordData={...ele, password}
                    return <Password {...passwordData} key={ele.id} handleEdit={handleEdit} handleDelete={handleDelete} />
                })
            :
              <p className="my-5 py-5 h2 display-5 w-100" style={{textAlign : "center"}}>You do not have any passwords added!</p>
            }
        </Row>
      </>
    </Container>
    )
}

const myLoader=({src})=>{
    return src
}

export default PasswordsDisplayComp