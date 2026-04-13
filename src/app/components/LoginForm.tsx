'use client'

import { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function onSubmit(e: any) {
        e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col ">
                <label htmlFor="usernameInput" className="font-semibold text-left">Username</label>
                <input type="text" name="usernameInput" className="border"/>
                <br />
                <label htmlFor="passwordInput" className="font-semibold text-left">Password</label>
                <input type="text" name="passwordInput" className="border"/>
            </form>
        </div>
    )
}

export default LoginForm