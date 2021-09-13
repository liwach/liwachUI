import React,{useState} from "react"
import {Button,TextInput} from 'react-native'
import auth from '@react-native-firebase/auth'


export const phoneSignin = () => {
    const [confirm,setConfirm] = useState(null)
    const [code,setCode] = useState(null)
    
    async function signInWithPhone(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
        await confirmation.confirm(code).then((result) => {
            console.log("Signed in successfully")
        })
        setConfirm(confirmation)
        console.log("confirmation",confirmation)
    }

    async function confirmCode() {
        try{
            await confirm.confirm(code).then((result) => {
                console.log("Signed in successfully")
            })
        }
        catch(error){
            console.log(error.message)
        }
    }

    if(!confirm){
        return(
            <Button
                title={'Sign in'}
                onPress={()=>signInWithPhone('+251-923-289-633')}
            />
        )
    }
    return(
        <>
        <TextInput
        value={code}
        onChangeText={text=>setCode(text)}
        />
        <Button title={"Confirm Code"} onPress={()=>confirmCode()}/>
        </>
    )
}
