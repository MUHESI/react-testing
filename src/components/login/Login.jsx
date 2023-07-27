import React from 'react'

function Login() {
    return (
        <div className='container'>
            <form>
                <input type="text" placeholder="username" value={''} />
                <input type="password" placeholder="password" />
                <button>login</button>

            </form>

        </div>
    )
}

export default Login