import React from 'react';
import "./DotNet.css";   // <----- add this

const DotNet = () => {
    return (
        <div className="dotnet-container">
            <h3>.NET Full Stack</h3>
            <table className="dotnet-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>.NET Full Stack</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Primary Backend Language</td>
                        <td>C# (C-Sharp)</td>
                    </tr>
                    <tr>
                        <td>Core Frameworks</td>
                        <td>ASP.NET Core (MVC, Web API), Entity Framework Core</td>
                    </tr>
                    <tr>
                        <td>Typical Duration</td>
                        <td>4 – 6 months</td>
                    </tr>
                    <tr>
                        <td>Estimated Price Range</td>
                        <td>₹20,000 – ₹40,000</td>
                    </tr>
                    <tr>
                        <td>Standard Includes</td>
                        <td>Core C#/OOP, REST APIs, SQL, Frontend (React/Angular/Blazor), Azure Services</td>
                    </tr>
                </tbody>
            </table>
            <aside className="btn-box">
                <button>Register Now</button>
            </aside>
        </div>
    );
};

export default DotNet;
