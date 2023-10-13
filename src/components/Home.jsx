import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='w-50'>
            <div className="card card-side bg-base-100 shadow-xl">
                
                <div className="card-body">
                    <h2 className="card-title">{user? user?.email :'none'}</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;