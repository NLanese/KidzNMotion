// React
import React, { useState, useEffect } from "react";

// Apollo graphQL
import { useMutation } from '@apollo/client';
import { USER_LOGIN, CREATE_USER_TO_USER_NOTIFICATION } from "../GraphQL/operations";

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, tokenState, clientListState, colorState, fontState, sizeState, videoDataState, avatarState, meetingState, assignState, firstOpen, subscriptionState, errorDataState} from "../Recoil/atoms";



export default function SignIn() {


///////////////////////////
///      Mutations      ///
///////////////////////////
    
    // User Type Determination
    const [userLogin, { loading: loadingType, error: errorType, data: typeData }] = useMutation(USER_LOGIN);

    // Sends missed Assignment Push Notifications
    const [sendNotification, {loading: loadAss, error: errorAss, data: dataAss}] = useMutation(CREATE_USER_TO_USER_NOTIFICATION)

/////////////////////////
//     Local State     //
/////////////////////////

    // Toggle for RememberMe
    const [rememberMe, setRememberMe] = useState(false);

    // Page Loading
    const [loading, setLoading] = useState(true)

    // Errors
    const [errors, setErrors] = useState({
        username: false,
        password: false
    })

//////////////////////////
//     Recoil State     //
//////////////////////////

    const [COLORS, setColors] = useRecoilState(colorState)
    const FONTS = useRecoilValue(fontState)
    const SIZES = useRecoilValue(sizeState)



}