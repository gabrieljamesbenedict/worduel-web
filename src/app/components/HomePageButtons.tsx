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
        router.push('/login')
    }

    function register() {
        router.push('/register')
    }

    function renderButtons() {
    if (loggedIn) {
        return <PrimaryButton onClick={startButtonPressed}>Play</PrimaryButton>;
    }

    return (
        <>
            <PrimaryButton onClick={login}>Login</PrimaryButton>
            <SecondaryButton onClick={register}>Register</SecondaryButton>
        </>
    );
}

    return (
        <div className='flex flex-row items-center gap-4'>
            {renderButtons()}
        </div>
    )
}

export default HomePageButtons