import React from 'react'
import "./Python.css"

const Python = () => {
    return (
        <div className="python-container">
            <h3>Python full stack</h3>
            <table border="1" className="python-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Includes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Beginner Python</td>
                        <td>45 to 60 days</td>
                        <td>₹3,000 to ₹6,000</td>
                        <td>Basics, OOP, File handling</td>
                    </tr>
                    <tr>
                        <td>Python Full Stack</td>
                        <td>5 to 6 months</td>
                        <td>₹25,000 to ₹45,000</td>
                        <td>Django/Flask, DB, Project</td>
                    </tr>
                    <tr>
                        <td>Python Data Science</td>
                        <td>3 to 4 months</td>
                        <td>₹12,000 to ₹25,000</td>
                        <td>Numpy, Pandas, ML basics</td>
                    </tr>
                </tbody>
            </table>
            <aside>
                <button>Register Now</button>
            </aside>
        </div >
    )
}

export default Python