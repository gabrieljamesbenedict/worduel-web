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
        <></>
    )
}

export default LoginForm