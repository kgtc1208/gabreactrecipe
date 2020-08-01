import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function Recipe(props){
    return(
        <div id = {props.name} className="recipe-container">
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
