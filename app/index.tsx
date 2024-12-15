// React
import { Image, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

// Firebase

// In House
import AppBackground from '@/components/AppBackground';
import Login from '@/LandingPage/Login';
import LoadingComponent from '@/components/Display/Loading/LoadingComponent'


//////////
// Page //
//////////
export default function LandingScreen() {

    ///////////
    // State //
    ///////////
    
        // Page Loading
        const [loading, setLoading] = useState(true)

        // Page State: Either 'Login' or 'SignUp'
        const [pageState, setPageState] = useState("Login")

        // Toggle for RememberMe
        const [rememberMe, setRememberMe] = useState(false);

        // Errors
        const [errors, setErrors] = useState({
            username: false,
            password: false
        })

    ////////////////
    // UseEffects //
    ////////////////

        useEffect(() => {
            setLoading(false)
        }, [])

    ///////////////
    // Functions //
    ///////////////

    


    ////////////////
    // Renderings //
    ////////////////
        
        function determineLandingScreen(){
            if (pageState === "Login"){
                return (<Login />)
            }
        }

    /////////////////
    // Main Return //
    /////////////////
    if (loading){
        return(
            <AppBackground>
                <LoadingComponent 
                    label={"Please Wait while we load all of your settings!"}
                    loading={loading}
                />
            </AppBackground>
        )
    }
    return(
        <AppBackground>
            {determineLandingScreen()}
        </AppBackground>
    )
}