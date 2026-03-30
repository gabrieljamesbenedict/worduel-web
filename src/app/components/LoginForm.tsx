'use client'

import { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function onSubmit(e: any) {
        e.preventDefault()

        setLoading(true)

        try {

            await new Promise(res => setTimeout(res, 1000))

            alert(`Logging in with ${email}`)

        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">

            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 p-8 rounded-xl shadow-lg w-96 border "
            >

                <h1 className="text-2xl font-bold text-center">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 rounded-lg"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-3 rounded-lg"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="
                        bg-black
                        text-white
                        p-3
                        rounded-lg
                        hover:opacity-80
                        transition
                    "
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>

            </form>

        </div>
    )
}

export default LoginForm