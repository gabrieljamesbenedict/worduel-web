'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton";

const HomePageButtons = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const router = useRouter()

    function startButtonPressed() {
        alert("Hello World");
    }

    function login() {
        //alert("Login");
        router.push('/login')
    }

    function register() {
        //alert("Register");
        router.push('/register')
    }

    return (
        <div className='flex flex-row items-center gap-4'>
            {loggedIn ? (
                <PrimaryButton onClick={startButtonPressed}>Play</PrimaryButton>
            ) : (
                <>
                    <PrimaryButton onClick={login}>Login</PrimaryButton>
                    <SecondaryButton onClick={register}>Register</SecondaryButton>
                </>
            )}
        </div>
    )
}

export default HomePageButtons