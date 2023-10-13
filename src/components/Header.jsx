import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
    }
    return (
        <div className="navbar bg-neutral text-neutral-content mb-20">
           <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
           <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>           
           <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>           
           {
            user? <button className="btn btn-ghost normal-case text-xl" onClick={handleLogOut}>Sign Out</button>  :
            <>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>         
            <Link className="btn btn-ghost normal-case text-xl" to='/resister'>Resister</Link>
            </>
           }           

        </div>
    );
};

export default Header;