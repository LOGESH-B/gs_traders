import React from 'react'
import Nav from '../../components/nav_component/Nav'
import "./Login.css"
import { loginreq } from '../../redux/api';
import { useNavigate } from 'react-router-dom';

function Login() {
    //api calls func
    const navigate=useNavigate();
    const api = async (obj) => {
        console.log("Login api call");
        try { 
            const newdata = await loginreq(obj);
            sessionStorage.setItem("isadmin", "true");
            navigate('/')
            alert("Login Successfull")
        } catch (e) {
            alert(e.response.data.message);
            navigate('/')
            console.log(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        var obj = {
            email: data.get("email"),
            password: data.get("password"),
        }
        api(obj);
        document.getElementById("reset").click()
        console.log(obj)


    }

    return <>
        <Nav />
        <br />
        <hr className='w-75 mx-auto' />
        <div className="container d-flex justify-content-center mt-5">
            <div className="outer-container w-50 ">
                <form onSubmit={(e)=>handleSubmit(e)}>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" aria-describedby="password" required />

                    </div>
                    <button type="submit" className="btn  sub-btn">Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default Login