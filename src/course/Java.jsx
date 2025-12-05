import React from 'react';
import "./Java.css";   // <----- Add this

const Java = () => {
    return (
        <div className="java-container">
            <h3>Full stack java</h3>
            <table className="java-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Java Full Stack</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Primary Backend Language</td>
                        <td>Java</td>
                    </tr>
                    <tr>
                        <td>Core Frameworks</td>
                        <td>Spring Boot, Spring MVC, Hibernate/JPA</td>
                    </tr>
                    <tr>
                        <td>Typical Duration</td>
                        <td>5 – 7 months</td>
                    </tr>
                    <tr>
                        <td>Estimated Price Range</td>
                        <td>₹25,000 – ₹50,000</td>
                    </tr>
                    <tr>
                        <td>Standard Includes</td>
                        <td>Core Java/OOP, REST APIs, SQL, Frontend (React/Angular), DevOps</td>
                    </tr>
                </tbody>
            </table>
            <aside className="btn-box">
                <button>Register Now</button>
            </aside>
        </div>
    );
};

export default Java;
