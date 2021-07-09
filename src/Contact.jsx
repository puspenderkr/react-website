import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phoneno: "",
        email: "",
        msg: "",
    })

    const inputEvent = (event) => {
          const {name, value} = event.target;
          setData((preValue) => {
              return {
                  ...preValue, [name]: value,
              }
          })
    }

    const formSubmit = (e) => {
        // e.preventDefault();
        alert(`Your name is: ${data.fullname}  Your phone no. is: ${data.phoneno} Your email is: ${data.email}  Your message is: ${data.msg}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control mb-3" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter your full name..." />
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control mb-3" id="exampleFormControlInput1" name='phoneno' value={data.phoneno} onChange={inputEvent} placeholder="Enter your phone number" />
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control mb-3" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" />

                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Enter your Message </label>
                                    <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={inputEvent}></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;