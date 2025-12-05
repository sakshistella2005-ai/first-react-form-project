import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import "./Register.css"

const Register = () => {
    const [details, setDetails] = useState({
        name: "",
        contactno: "",
        course: "",
        classmode: "",

    });



    let handleChange = (e) => {
        let { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        setDetails({
            name: "",
            contactno: "",
            course: "",
            classmode: ""
        });
        addUser(details)
    }
    let addUser = async (data) => {
        console.log(data)
        await axios.post(`http://localhost:3000/users`, data)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="">Full Name:</label>
                    <input type="text" name="name" value={details.name} onChange={handleChange} />
                </aside>
                <aside>
                    <label htmlFor="">Contact No:</label>
                    <input type="tel" name="contactno" value={details.contactno} onChange={handleChange} />
                </aside>
                <aside>
                    <label htmlFor="">Course Name:</label>
                    <input type="text" name="course" value={details.course} onChange={handleChange} />
                </aside>
                <aside>
                    <label htmlFor="">Class Mode:</label>
                    <input type="text" name="classmode" value={details.classmode} onChange={handleChange} />
                </aside>
                <aside>
                    <button>Submit</button>
                </aside>
            </form>
        </div>
    )
}

export default Register