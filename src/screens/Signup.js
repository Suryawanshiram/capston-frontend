
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  //Make a Network Request 
  const PostData = () => {
    // eslint-disable-next-line
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      alert("Invalid email")
      return
    }
    fetch("/api/creatuser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        password

      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          alert("Something went wrong plz try again ")
        } else {
          // M.toast({html: data.message, classes: '#c62828 green darken-1'})
          alert("sucessfully done ")
          navigate('/login');
        }
      }).catch(err => {
        //   console.log(err)
      })
  }
  return (
    <div className='mycard' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/05/16/21/45/coffee-2319107__340.jpg")', backgroundSize: 'cover',height: '100vh' }}>
      <div className='container'>
          <h2 style={{"color":"black"}}>Food Delivery</h2>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label"> Name </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"> Email address </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Mobile </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-success" onClick={() => PostData()}>  Submit </button>

          <Link to="/login" className='m-3 btn btn-danger'>Already Have an Account?</Link>

        </div>
      </div>
  )
}

export default Signup

