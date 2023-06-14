import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion, useScroll} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();


    
    useEffect(() => {
        getCuisine()
        console.log(params.type)
    },[params.type]);


    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        
        const recipes = await data.json();
        setCuisine(recipes.results);
    };


  return (
    <div>Cuisine</div>
  )
}

export default Cuisine