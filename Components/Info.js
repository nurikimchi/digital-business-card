import React from "react"

export default function Info() {
    return (
        <div className = "info">
            <img className = "info__profile-picture" src = "https://octodex.github.com/images/pusheencat.png"></img>
            <h1 className = "info__name">Nuri Kim</h1>
            <h2 className = "info__occupation">Semi-Beginner Programmer</h2>
            <button className = "info__email-button">Email</button>
        </div>
    )
}