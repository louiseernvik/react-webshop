import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try{
      const response = await fetch ('https://codexplained.se/cars.php')
      const data = await response.json();

      setProducts(data);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const PageVariant={
    start: {opacity: 1, transition:{duration:1}},
    stop: {opacity: 0}
  }

  return (
    <div className='max-width'>
      <section className='products-wrapper'>
        {
          products.map( product => (
            <motion.article animate="start" initial="stop" variants={PageVariant} className='products-article'> 
              <h1 className='title'>{product.title}</h1>
              <h2 className='price'>{product.price} kr</h2> 
              <img className='products-img' src={product.url}/> 
              <Link to={`/products/${product.id}`} key={product.id} className='link'>
                <p className='read-more-btn'>LÄS MER</p>
              </Link>
            </motion.article>
          ))
        }
      </section>
    </div>
  )
}

export default Products