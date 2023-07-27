import React, { useState } from 'react'

function Login() {
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState('');
    const [pswd, setPswd] = useState('');

    return (
        <div className='container'>
            <form>
                <input type="text" placeholder="username" value={userName} />
                <input type="password" placeholder="password" value={pswd} />
                <button>login</button>
                <span style={{ visibility: error ? 'visible' : 'hidden' }} data-testid='error'> Something went wrong</span>

            </form>

        </div>
    )
}

export default Login