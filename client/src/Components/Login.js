import React, {useState} from 'react'
// import loginpic from '../images/loginpic.svg'
import { NavLink, useHistory } from 'react-router-dom';
// import './Login.css'
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon
// }
//   from 'mdb-react-ui-kit';


const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    
    e.preventDefault();

    const res = await fetch ('/login', {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = res.json();
    if(data.status === 400 || !data) {
      window.alert("Invalid User");
    }else {
      window.alert("Login Successful");
      history.push("/");
    }

  }

  return (

    // <MDBContainer fluid>

    //   <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    //     <MDBCol col='12'>

    //       <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
    //         <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

    //           <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    //           <p className="text-white-50 mb-5">Please enter your login and password!</p>

    //           <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
    //           <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

    //           <p className="small mb-3 pb-lg-2"><NavLink className="text-white-50" to="/home">Forgot password?</NavLink></p>
    //           <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
    //             Login
    //           </MDBBtn>

    //           <div className='d-flex flex-row mt-3 mb-5'>
    //             <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               <MDBIcon fab icon='facebook-f' size="lg" />
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               <MDBIcon fab icon='twitter' size="lg" />
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               <MDBIcon fab icon='google' size="lg" />
    //             </MDBBtn>
    //           </div>

    //           <div>
    //             <p className="mb-0">Don't have an account? <NavLink to="/signup" className="text-white-50 fw-bold">Sign Up</NavLink></p>

    //           </div>
    //         </MDBCardBody>
    //       </MDBCard>

    //     </MDBCol>
    //   </MDBRow>

    // </MDBContainer>

    <>
      <section className='login'>
        <div className='container mt-5'>
          <div className='login-content'>

            {/* <div className='login-image'>
              <figure>
                <img src={loginpic} alt="" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">Create Account</NavLink>
            </div> */}
            <div className='signup-form'>
              <h2 className='from-title'>Log-in</h2>
              <form method='POST' className='signup-form' id='signup-form'>
                

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class='bx bxs-envelope bx-sm'></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email" />
                </div>

                
                

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class='bx bxs-lock-alt bx-sm'></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password" />
                </div>

                

                <div className='form-group form-button'>
                  <input type="submit" name="login" id="login" className="form-submit" value="Login" onClick={loginUser} />
                </div>
                <div className='account'>
                <NavLink to="/signup" className="signup-image-link">Create Account</NavLink>
                </div>
              </form>

            </div>



          </div>
        </div>
      </section>
    </>
  );
}


export default Login
