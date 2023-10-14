import { useContext} from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const {logIn,logInGoogle}= useContext(AuthContext)
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value 
        const password=event.target.password.value
        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate('/login')
        })
        .catch(error=>{
            alert(`${error}`)
        })

        event.target.reset();
    }
    const google=()=>{
        logInGoogle()
        .then(result=>{
            console.log(result.user)
            navigate('/login')
        })
        .catch(error=>{
            alert(`${error}`)
        })
    }
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                   <Link to='/resister'>New on site? Resister!!!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={google} className="btn btn-primary">Login with google</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;