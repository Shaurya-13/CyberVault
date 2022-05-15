import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState } from 'react'
import MetaData from '../components/MetaData'
import styles from '../styles/Home.module.css'
import zxcvbn from 'zxcvbn'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const Analyser = () =>{
    const[passForStrength, setPassForStrength]=useState('')

    // The ZXCVBN library gives multiple parameters of strength of a password
    // Out of those the score parameter is chosen and is multiplied by 100 and 
    // divided by four to get exactly four parameters of strength which are then 
    // used to dynamically update all colors (text and progression bar)

    //gets all strength result parameters 
    const analysisResult=zxcvbn(passForStrength)

    //The score parameter is singled out and utilised
    const analysisScore=analysisResult.score*100/4

    const strengthLabel = ()=>{
        switch(analysisResult.score){
            case 0:
                return 'Very Weak, easily crackable'
            case 1:
                return 'Weak-ish still'
            case 2:
                return 'Its Okay-ish'
            case 3:
                return 'Better now...'
            case 4:
                return 'Perfectly Strong & Complex!'
            default:
                return 'none'
        }
    }
    const colorProgression=()=>{
        switch(analysisResult.score){
            case 0:
                return 'black'
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

    // This function sets the percentage of the bar to be filled and what color is it to be filled with
    const progressColorChange=()=>({
        width:`${analysisScore}%`, background:colorProgression()
    })

    // Further is the logic of rendering the whole analyser page    
    return(
        <div className={styles.background}>
            <MetaData title="analyser" />
            <div className={styles.analyseContainer}>
                <div className={styles.analyser}>
                    <div className='col-md-10 mx-auto'>
                        <h2 className='text-center my-5 bg-light text-dark'>Robust Password strength analyser
                        <img src="./strength1.png" alt="" style={{width : '50px', height : '50px'}} className="mr-2" />
                        </h2>
                        <h5>Analyse the strength of your password efficiently and be rest assured 
                        <Tippy content={
                                'ZXCVBN library is used as a password strength and entropy estimator inspired by password crackers through pattern matching and password scoring'
                              }>
                              <img src="./info.png" alt="" style={{width : '30px', height : '30px'}} className="mr-2" />
                        </Tippy>
                             - 
                        </h5>
                        <br></br>
                        <div className='form-group mb-3'>
                            <input type="password" className='form-control shadow-none' placeholder='Password for strength analysis' onChange={e=>setPassForStrength(e.target.value)}/>
                        </div>
                        <div className='progress'>
                            <div className='progress-bar' style={progressColorChange()} passForStrength={passForStrength}></div>
                        </div>
                        <br></br>
                        <h3 className='text-center' style={{color:colorProgression()}}>{strengthLabel()}</h3>
                    </div>
                </div>
            </div>
            <p className="navbar fixed-bottom d-block w-100 m-0 text-center" style={{backgroundColor : "#d1e1f0e7"}} >
                <img src="./lock.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
                The ultimate Password Analyser! 
                <img src="./key.png" alt="" style={{width : '40px', height : '40px'}} className="mr-2" />
            </p>
        </div>
    )
}
export const getServerSideProps = withPageAuthRequired()

export default Analyser
