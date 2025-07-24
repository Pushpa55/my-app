import React, { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        //alert(Email: ${email}\nPassword: ${password});
        // Later: Add API call for real login
    };

    return (
        <div style={{ maxWidth: '300px', margin: '50px auto', border: '1px solid gray', padding: '20px', borderRadius: '8px' }}>

            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: '10px' }}>

                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '8px 15px' }}>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;