import {useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner';
import { login, reset } from '../features/auth/authSlice';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isSuccess, isError, isLoading, message} = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }    

    if (isSuccess || user) {
      navigate('/')
    }
  
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const {email, password} = formData; 

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='heading'>
      <h1>
        <FaSignInAlt /> Login
        <p>Login and start setting goals</p>
      </h1>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter your password' onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Login