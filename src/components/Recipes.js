import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function Recipe(props){
    const [saved, setSaved] = useState(false)
    var issaved = '';
    if(saved){
        issaved = 'Saved';
    }

    const getSiblings = e => {
        const id = e.target.parentNode.className;
        console.log(id)
    }

    return(
        <div id = {props.name} className="recipe-container">
            <div className="recipe-save" onClick={getSiblings}><FontAwesomeIcon icon={faStar} /></div>
            <div className="recipe-issaved">{issaved}</div>
            <div className="recipe-image"><img src={props.img}></img></div>
            <div className="recipe-name">{props.name}</div>
            <div className="recipe-calories">Calories: {props.calories}</div>
            <ul>
                {props.ingredients.map(ingredient=>(
                    <li className="recipe-ingredients">{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe