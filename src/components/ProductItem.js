import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';

function ProductItem() {
  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try{
      const response = await fetch ('https://codexplained.se/cars.php?id=' + params.id)
      const data = await response.json();

      setProduct(data);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  const SectionVariant={
    start: {x: 0, opacity: 1, transition:{duration:1}},
    stop: {x:200, opacity: 0}
  }
  const ImgVariant={
    start: {x: 0, opacity: 1, transition:{duration:1}},
    stop: {x:-200, opacity: 0}
  }

  return (
    <div>
      <article className='product-wrapper' key={product.id}> 
        <motion.img animate="start" initial="stop" variants={ImgVariant} className='single-img' src={product.url}/>
        <motion.section animate="start" initial="stop" variants={SectionVariant} className='info'>
          <h1 className='single-title'>{product.title}</h1>  
          <p className='description'>Description: {product.description} </p>
          <h3 className='single-price'>{product.price} kr</h3>
          <p className='storage'>Storage: {product.storage} </p>
        </motion.section>
      </article> 
    </div>
  )
}

export default ProductItem