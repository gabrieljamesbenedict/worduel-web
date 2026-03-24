'use client'

import { useState } from "react";
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton";

const HomePageButtons = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    function startButtonPressed() {
        alert("Hello World");
    }

    function login() {

    }

    function register() {

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

    // if (loggedIn) return (
    //     <div className='flex flex-row items-center gap-4'>
    //         <PrimaryButton onClick={startButtonPressed}>Play</PrimaryButton>
    //         <SecondaryButton onClick={startButtonPressed}>Play</SecondaryButton>
    //     </div>
    // )
    // else if (!loggedIn) return (
    //     <div>
    //         <PrimaryButton onClick={login}>Login</PrimaryButton>
    //         <SecondaryButton onClick={register}>Register</SecondaryButton>
    //     </div>
    // )
}

export default HomePageButtons