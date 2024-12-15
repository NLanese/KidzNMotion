// React
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

// Apollo graphQL
import { useMutation } from '@apollo/client';
import { USER_LOGIN, CREATE_USER_TO_USER_NOTIFICATION } from "../GraphQL/operations";

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, tokenState, clientListState, colorState, fontState, sizeState, videoDataState, avatarState, meetingState, assignState, firstOpen, subscriptionState, errorDataState} from "../Recoil/atoms";


///////////////
// Component //
///////////////
export default function Login() {

    ///////////////////////////
    ///      Mutations      ///
    ///////////////////////////
        
        // User Type Determination
        // const [userLogin, { loading: loadingType, error: errorType, data: typeData }] = useMutation(USER_LOGIN);

        // Sends missed Assignment Push Notifications
        // const [sendNotification, {loading: loadAss, error: errorAss, data: dataAss}] = useMutation(CREATE_USER_TO_USER_NOTIFICATION)

    /////////////////
    // Local State //
    /////////////////

        // Trakcs Username Input
        const [username_or_email, setUsername] = useState("")

        // Tracks Password Input
        const [password, setPassword] = useState("")

        // Show/Hide password Boolean
        const [showPassword, setShowPassword] = useState(false)

    ////////////////////
    //  Recoil State  //
    ////////////////////

        const [COLORS, setColors] = useRecoilState(colorState)
        const FONTS = useRecoilValue(fontState)
        const SIZES = useRecoilValue(sizeState)

    ///////////////
    // Functions //
    ///////////////


    ////////////////
    // Renderings //
    ////////////////


    /////////////////
    // Main Return //
    /////////////////

    return(
        <View style={{backgroundColor: 'rbga(0,0,0,0)'}}>
            <Text>Meep</Text>
            <Text>Meep</Text>
            <Text>Meep</Text>
            <Text>Meep</Text>
            <Text>Meep</Text>
        </View>
    )


}