import React, { useState } from 'react'
// import signpic from '../images/welcome.svg'
import { NavLink, useHistory } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import './Signup.css';


const Signup = () => {

  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;

  const handelInputs = (e) => {
    console.log(e);
    name = e.target.name
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      history.push("/login");
    }
  }

  return (
    <>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' name='name' id='name' type='text' value={user.name} onChange={handelInputs} />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' id='email' type='email' value={user.email} onChange={handelInputs} />
            <MDBInput wrapperClass='mb-4' label='Your Phone Number' size='lg' name='phone' id='phone' type='number' value={user.phone} onChange={handelInputs} />
            <MDBInput wrapperClass='mb-4' label='Your Profession' size='lg' name='work' id='work' type='text' value={user.work} onChange={handelInputs} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' id='password' type='password' value={user.password} onChange={handelInputs} />
            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' name='cpassword' id='cpassword' type='password' value={user.cpassword} onChange={handelInputs} />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' name="signup" id="signup" onClick={PostData}>Signup</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      {/* <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='from-title'>Sign-up</h2>
              <form method='POST' className='signup-form' id='signup-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i class='bx bxs-user bx-sm'></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off" 
                    value={user.name}
                    onChange={handelInputs}
                  placeholder="Your Name" />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class='bx bxs-envelope bx-sm'></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off" 
                    value={user.email}
                    onChange={handelInputs}
                  placeholder="Your Email" />
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>
                    <i class='bx bxs-phone bx-sm'></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off" 
                    value={user.phone}
                    onChange={handelInputs}
                  placeholder="Your Number" />
                </div>

                <div className='form-group'>
                  <label htmlFor='work'>
                    <i class='bx bxs-briefcase bx-sm'></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off" 
                    value={user.work}
                    onChange={handelInputs}
                  placeholder="Your Profession" />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class='bx bxs-lock-alt bx-sm'></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off" 
                    value={user.password}
                    onChange={handelInputs}
                  placeholder="Your Password" />
                </div>

                <div className='form-group'>
                  <label htmlFor='cpassword'>
                    <i class='bx bxs-lock-alt bx-sm'></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off" 
                    value={user.cpassword}
                    onChange={handelInputs}
                  placeholder="Confirm Your Password" />
                </div>

                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className="form-submit" value="signup" onClick={PostData}/>
                </div>
                <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
              </form>

            </div>

            <div className='signup-image'>
              <figure>
                <img src={signpic} alt="" />
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
            </div>

          </div>
        </div>
      </section> */}


    </>
  )
}

export default Signup
