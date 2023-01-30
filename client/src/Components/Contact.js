import React, { useEffect, useState } from 'react'

const Contact = () => {


  const [userData, setUserData] = useState({});

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  // async function userContact() {
  //   try {
  //     const res = await fetch('/getdata', {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     setUserData(data);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    userContact();
  }, []);

  return (
    <>
     <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
              {/** phone number */}
              <div className='contact_info_item d-flex justify-content-start align-item-center'>
                <div className='contact_info_title'>
                  Phone
                </div>
                <div className='contact_info_text'>
                  +91 98989 89898
                </div>
              </div>
              {/** email */}
              <div className='contact_info_item d-flex justify-content-start align-item-center'>
                <div className='contact_info_title'>
                  Phone
                </div>
                <div className='contact_info_text'>
                  +91 98989 89898
                </div>
              </div>
              {/** address */}
              <div className='contact_info_item d-flex justify-content-start align-item-center'>
                <div className='contact_info_title'>
                  Phone
                </div>
                <div className='contact_info_text'>
                  +91 98989 89898
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/** contact us form */}

      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title'>
                  Get in Touch
                </div>
                <form id='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between align-item-between'>
                    <input type="text" id="contact_form_name" className="contact_form_name input_field" value={userData.name} placeholder='Your Name'/>
                    <input type="email" id="contact_form_email" className="email input_field" value={userData.email} placeholder='Your Email'/>
                    <input type="number" id="contact_form_phone" className="phone input_field" value={userData.phone} placeholder='Your Phone Number'/>
                  </div>

                  <div className='contact_form_text mt-5'>
                    <textarea className='text_field contact_form_message' placeholder='Type your message here' cols="122" rows="10"></textarea>
                  </div>

                  <div className='contact_form_button'>
                    <button type='submit' className='button contact_submit_button'>Send Message</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
