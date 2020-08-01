import React, {useEffect, useState} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Recipes from './components/Recipes.js';

function App() {
  const APP_ID = 'a85ab5b1';
  const APP_KEY = '4db7eee7b82f92f6ff24bb7484dd474f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log(data);
      setRecipes(data.hits);
    };
  
    const searchChange = e =>{
      setSearch(e.target.value);
    }

    const getQuery = e =>{
      e.preventDefault();
      setQuery(search);
    }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input className="search-bar" placeholder="Search..." value={search} onChange={searchChange}></input>
        <button type="submit" className="search"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
      <div className="recipe-body">
      {recipes.map(recipe=>(
        <Recipes 
          key = {recipe.recipe.label}
          img = {recipe.recipe.image}
          name = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          ingredients = {recipe.recipe.ingredientLines}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
