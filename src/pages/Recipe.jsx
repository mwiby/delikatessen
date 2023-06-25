import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import React from "react"

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});


  useEffect(() => {
    FetchDetails();
  },[params.name]);

  const FetchDetails = async () => {

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();

    setDetails(detailData);
  }


  return (
    <div>{details.title}</div>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949,#313131);
        color: white;
    }
        h2{
            margin-bottom: 2rem;
        }

        li{
        font-size: 1.2rem;
        line-height: 2.5rem;
        }

        ul{
        margin-top: 2rem;
        }
`;


export default Recipe   