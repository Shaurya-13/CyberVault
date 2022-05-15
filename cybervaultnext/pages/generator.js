import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import styles from '../styles/Home.module.css'
import MetaData from '../components/MetaData'
import { useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const generator = () => {
    
    const allNumbers='0123456789'
    const allUpperCase='ABCDEFGHIJKLMOPQRSTUVWXYZ'
    const allLowerCase='abcdefghijklmnopqrstuvwxyz'
    const allSpecialCharacters='!@#$%&*><`~?=+-'

    const[generatedPass, setGeneratedPass]=useState('')
    const[length, setLength]=useState(16)
    // All checks have been set to true by default in accordance with the secure by default principle
    const[upper, setIncUpper]=useState(true)
    const[lower, setIncLower]=useState(true)
    const[numbers, setIncNumbers]=useState(true)
    const[specialChar, setIncSpecialChar]=useState(true)
    const[passwordType, setPasswordType]=useState('password')

    // The generation function checks for all the checkboxe inputs
    // accordingly selects characters from the charcter sets and adds them 
    // to the list of chracters to be used for random generation
    // then calls the generate function which generates a random string based the list created
    const handlePasswordGeneration=(e)=>{

        if(!lower && !upper && !numbers && !specialChar){
            notification('You must opt for atleast one condition')
        }

        let charList=''
        if(lower){
            charList=charList+allLowerCase
        }
        if(upper){
            charList=charList+allUpperCase
        }
        if(numbers){
            charList=charList+allNumbers
        }
        if(specialChar){
            charList=charList+allSpecialCharacters
        }
        setGeneratedPass(generatePassword(charList))
    }

    // Generate password generates a random complex string based on the characterlist given as parameter
    const generatePassword=(charList)=>{
        let randomComplexPassword=''
        const charListLen=charList.length

        for(let i=0;i<length;i++){
            const randIndex=Math.round(Math.random()*charListLen)
            randomComplexPassword=randomComplexPassword+charList.charAt(randIndex)
        }
        return randomComplexPassword
    }
    const clipBoardCopy=()=>{
        const genPassTextArea=document.createElement('textarea')
        genPassTextArea.innerText=generatedPass
        document.body.appendChild(genPassTextArea)
        genPassTextArea.select()
        document.execCommand('copy')
        genPassTextArea.remove()
    }
    const notify='Successfully copied generated password to clipboard'
    const notification = (message)=>{
        toast(message, {
            position:'top-center',
            autoClose:200,
            hideProgressBar:false,
            closeOnClick:false,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
        })
    }
    const handleCopyPassToCLip=(e)=>{
        if(generatedPass===''){
            notification('Nothing has been copied, no password was generated!')
        }
        else{
            clipBoardCopy()
            notification(notify)
        }
    }

    return(
        <div className={styles.background}>
            <MetaData title="generator" />
            <main>
            <div className={styles.generatorContainer}>
                <div className={styles.passGenerator}>
                    <h2 className={styles.genHeader}>
                        Password Generator
                    </h2>
                    <div className={styles.passwordGen}>
                        <input type={passwordType} defaultValue={generatedPass} style={{width:"100%"}} disabled></input>
                        <button style={{cursor:'pointer', width : '30px', height : '30px', position:'absolute', background:'#09f855', right:'55px'}}
                                onClick={()=>{setPasswordType(passwordType==="password"?"text":"password")}}>
                                    {passwordType==="password"?
                                        <FontAwesomeIcon icon={faEye} size='1x'  /> 
                                        : 
                                        <FontAwesomeIcon icon={faEyeSlash} size='1x' />
                                    }
                        </button>
                        <button onClick={handleCopyPassToCLip} className={styles.copyBtn}> 
                            <img src="./copy.png" style={{width : '30px', height : '30px' ,position : 'relative'}} className="mr-2" />
                        </button>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='characterLength'>Number of Characters</label>
                        <input defaultValue={length} onChange={(e)=>setLength(e.target.value)} type="number" id="characterLength" name="characterLength" max="20" min="10"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='uppercase'>Include Upper case letters</label>
                        <input checked={upper} onChange={(e)=>setIncUpper(e.target.checked)} type="checkbox" id="uppercase" name="uppercase" style={{width:'25px', height:'25px'}}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='lowercase'>Include Lower case letters</label>
                        <input checked={lower} onChange={(e)=>setIncLower(e.target.checked)} type="checkbox" id="lowercase" name="lowercase" style={{width:'25px', height:'25px'}}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='numbers'>Include Numbers</label>
                        <input checked={numbers} onChange={(e)=>setIncNumbers(e.target.checked)} type="checkbox" id="numbers" name="numbers" style={{width:'25px', height:'25px'}}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='specialCharacters'>Include Special characters</label>
                        <input checked={specialChar} onChange={(e)=>setIncSpecialChar(e.target.checked)} type="checkbox" id="specialCharacters" name="specialCharacters" style={{width:'25px', height:'25px'}}/>
                    </div>
                    <button onClick={handlePasswordGeneration} className={styles.genPassBtn}>
                        <img src="./generate.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                        Generate Password
                        <img src="./key.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                    </button>
                    <ToastContainer position='top-center' autoClose={250} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
                </div>
            </div>
            </main>
            <p className="navbar fixed-bottom d-block w-100 m-0 text-center" style={{backgroundColor : "#d1e1f0e7"}} >
                <img src="./lock.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                The ultimate Password generator! 
                <img src="./key.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
            </p>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired()

export default generator
