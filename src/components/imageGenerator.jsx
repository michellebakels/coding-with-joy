import React from 'react'
import {initialForm} from "../App";

const resetForm = (setShowForm, setPetForm) => {
    setShowForm(true)
    return setPetForm(initialForm)
}

const ImageGenerator = ({setShowForm, petForm, setPetForm}) => {
    return(
        <div className="petForm" style={{maxWidth: "450px"}}>
            <p>I love you&nbsp;{petForm?.petName}!</p><br/>
            <img className="pet-img" src={petForm?.image} /><br/>
            <p>You are the best&nbsp;{(petForm?.petType).toLowerCase()}&nbsp;in the world!</p><br/>
            <p>I love you because&nbsp;{(petForm?.loveYou).toLowerCase()}</p><br/>
            <p>My favorite thing you do is&nbsp;{(petForm?.favoriteThing).toLowerCase()}</p><br/>
            <button onClick={() => resetForm(setShowForm, setPetForm)}>Reset</button>
        </div>
    )
}

export default ImageGenerator