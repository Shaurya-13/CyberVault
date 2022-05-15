import React, {useRef, useState} from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import IdleTimer from 'react-idle-timer'
import { Button, Modal } from 'react-bootstrap'


const InactivityTimerComponent = () => {
    const {user} = useUser()
    const [modalOpen, setModalOpen]=useState(false)
    const inActiveTimerRef=useRef(null)
    const sessTimeOutRef=useRef(null)

    //2 minutes of inactivity after the modal popup logs out the user
    const onIdle=()=>{
        setModalOpen(true)
        sessTimeOutRef.current=setTimeout(logout,120*1000)
    }
    const handleClose =() => {
        clearTimeout(sessTimeOutRef.current)
        setModalOpen(false)
    }
    // This function is called when the user clicks the stay button which resets all timers
    const active=()=>{
        clearTimeout(sessTimeOutRef.current)
        setModalOpen(false)
    }
    
    const logout=()=>{
        clearTimeout(sessTimeOutRef.current)
        window.location="api/auth/logout"
    }
    //rendering the popup modal for idle timer 
    //(only works when the user is logged in i.e., includes the check for the user object)
    return(
        <div>
            {user &&(
            <div>
                <Modal show={modalOpen} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>You Have Been Idle!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Due to prolonged in-activity you are going to be logged-out, Do you want to stay?</Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={logout}>Logout</Button>
                        <Button variant="primary" onClick={active}>
                            Stay
                        </Button>
                    </Modal.Footer>
                </Modal>
                <IdleTimer ref={inActiveTimerRef} timeout={180*1000} onIdle={onIdle}></IdleTimer>
            </div>
            )}
        </div>
    )
}

export default InactivityTimerComponent