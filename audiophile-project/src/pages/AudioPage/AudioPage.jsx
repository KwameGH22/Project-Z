import React from 'react';
import data from "../../../public/resources/data.json"
import Tagline from '../../components/tagline/Tagline';
import AudioCard from '../../components/AudioCard/AudioCard';
import { useParams, Link } from 'react-router-dom'

const AudioPage = () => {

    const { category } = useParams()

    // filter the data
    const filteredProducts = data.filter(item => item.category === category);

    console.log(filteredProducts);

    // flip the data
    const flippedProducts = [...filteredProducts].reverse()

    console.log(flippedProducts);

    // map over the flipped data
    const productElement = flippedProducts.map(product => (
        <div key={product.id} className='products'>
            <div 
                className="productsImage"
                style={{backgroundImage: `url(${product.categoryImage.mobile})`}}
            >
            </div>
            <div className="productsContent">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link to={`/${category}/${product.id}`} className='prodBtnContainer'>
                    <button className='productsBtn'>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    ))

  return (
    <section>
        <div className="productsHeading">
            <h1>{flippedProducts[0].category.toUpperCase()}</h1>
        </div>
        <div className="productsWrapper">
            {productElement}
        </div>
        <AudioCard/>
        <Tagline />
    </section>
  )
}

export default AudioPage
