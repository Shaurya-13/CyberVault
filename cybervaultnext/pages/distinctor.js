import React, { useState } from "react";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic"
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

//Importing the HIBP API from its react component using next dynmic
const HIBPPasswordChecker=dynamic(import ('react-have-i-been-pwned'), {ssr:false})

const distinctor =()=> {
  const [inputPassword,setInputPassword]=useState('')

  const handlePasswordInput = (e) => {
    setInputPassword(e.target.value)
  };
  // The API component is used inside the page render
    return (
        <div className={styles.distinctorBg}>
            <div className={styles.distinctorContainer}>
                <div className={styles.distinctor}>
                    <div className="col-md-10 mx-auto">
                        <h2 className="text-center my-4 bg-light text-dark">
                          <img src="./hack2.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />  
                          Password Distinctor
                        </h2>
                        <h5 className="text-dark">This function will help you analyse the uniqueness of your chosen password
                        <img src="./hack1.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                        </h5>
                        <ul className="text-primary">
                          <li> It cross-references the Troy Hunt (Have-I-Been-Pawned) database
                            <Tippy content={
                                'The Troy Hunt database contains all pawned passwords that have been hacked/breached in previously known data breaches, hence determining the passwords that are easier to crack and no longer safe to use!!'
                              }>
                              <img src="./info.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                            </Tippy>
                          </li>
                          <li> It determines whether the password entered has been compromised/breached before.</li>
                          <li> It indicates whether a password is safe to utilise or not!</li>
                        </ul>
                        <div className="text-center text-dark">
                            <b>
                            Check if your password has been breached or hacked before over here:
                            </b>
                            <div className='form-group mb-3'>
                                <input type="password" onChange={handlePasswordInput} value={inputPassword} style={{ width:"50%" }}/>
                            </div>
                        </div>
                        <div style={{ textAlign: "center", minHeight: "50px" }}>
                        <HIBPPasswordChecker password={inputPassword}>
                            {({ initial, loading, error, pwned, count }) => {
                            if (initial) {
                              return null;
                            }
                            if (loading) {
                              return "Checking the uniqueness of this password...";
                            }
                            if (error) {
                              return `error: ${error}`;
                            }
                            if (!pwned){ 
                                return (
                                <h3 className={styles.textColor}>
                                    This password is good to go, strong and hasn't been used before!
                                </h3>
                                );
                              }
                            if (pwned){
                                return (
                                <h3 className="text-danger text-center">
                                    This password isn't safe to use  
                                    and appeared in <strong className="text-dark bg-warning">{count.toLocaleString()}</strong> known data breaches.
                                    You can still use it, but you probably shouldn't.
                                </h3>
                                );}
                            }}
                        </HIBPPasswordChecker>
                        </div>
                    </div>
                </div>
            </div>
            <p className="navbar fixed-bottom d-block w-100 m-0 text-center" style={{backgroundColor : "#d1e1f0e7"}} >
              <img src="./lock.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
              The ultimate Password distinctor! 
              <img src="./key.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
            </p>
      </div>
    );
}

export const getServerSideProps = withPageAuthRequired()
export default distinctor