import axios from 'axios';
import React, { useState } from 'react'

export const URL = 'https://jsonplaceholder.typicode.com/users/1'
function Login() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [pswd, setPswd] = useState('');
    const [user, setUser] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.get(URL)
            setUser(data)
            setLoading(false);

        } catch (error) {
            setError(true);
            setLoading(false);
        }


    }

    return (
        <div className='container'>
            <div>{user?.name}  </div>
            <form>
                <input type="text" placeholder="username" value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input type="password" placeholder="password" value={pswd}
                    onChange={(e) => setPswd(e.target.value)}
                />
                <button
                    disabled={userName === '' || pswd === ''}
                    onClick={(e) => handleSubmit(e)}
                >{loading ? 'please wait' : 'login'}</button>
                <span style={{ visibility: error ? 'visible' : 'hidden' }} data-testid='error'> Something went wrong</span>

            </form>

        </div>
    )
}

export default Login