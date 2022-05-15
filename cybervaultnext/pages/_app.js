import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import NavigationComponent from '../components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import InactivityTimerComponent from '../components/InactivityTimer'

// The _app.js file is responsible for covering the whole application
// The user provider and the inactivity timer component have also been included here to be available throughout the application

export default function App({ Component, pageProps }) {

    return (
        <UserProvider>
            <NavigationComponent />
            <InactivityTimerComponent/>
            <Component {...pageProps} />
        </UserProvider>
    )
}
