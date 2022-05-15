import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


const NavigationComponent = () => {
    const {user, error} = useUser()
    //Navbar checks for the user session (authenticated or not)
    //and accordingly updates the navigation bar
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="mx-2 mx-md-4" href="/"><img src="./vault.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />CyberVault</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="d-lg-flex justify-content-end" id="responsive-navbar-nav">
                {(!user & !error) ? 
                    <>
                        <Tippy content={ 
                                <ol> Please register and login to access : - 
                                    <li>Cybervault - Password Manager</li>
                                    <li>Cybervault - Password Generator</li>
                                    <li>Cybervault - Password Distinctor</li>
                                    <li>Cybervault - Password Strength Analyser</li>
                                </ol>
                            }>
                            <img src="./info.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                        </Tippy>
                        <Nav.Link className="text-light" href="api/auth/login">Log-In/Register</Nav.Link> : 
                        <Image alt="avatar" loader={myLoader} src={'https://ui-avatars.com/api/?background=random&name=John+Doe'} width="35" height="35" className="rounded-circle" />
                    </> 
                    :
                    <>
                        <Nav.Link className="text-light" href="/faceReg">Register Face</Nav.Link>
                        <Nav.Link className="text-light" href="/dashboard">Manager</Nav.Link>
                        <Nav.Link className="text-light" href="/generator">Generator</Nav.Link>
                        <Nav.Link className="text-light" href="/analyser">Strength Analyser</Nav.Link>
                        <Nav.Link className="text-light" href="/distinctor">Distinctor</Nav.Link>
                        <Nav.Link className="text-light" href="api/auth/logout">Log-Out</Nav.Link>
                        <Image alt="avatar" loader={myLoader} src={`https://ui-avatars.com/api/?background=random&name=${user.name}`} width="35" height="35" className="rounded-circle" />
                    </>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

const myLoader=({src})=>{
    return src
}

export default NavigationComponent