import React, { useContext } from 'react';
import './ProductDisplay.css';
import start_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left' >
           <div className='product-img-list'> 
               <img src={product.image} alt='product-img'/>
               <img src={product.image} alt='product-img'/>
               <img src={product.image} alt='product-img'/>
               <img src={product.image} alt='product-img'/>
           </div>
           <div className='productdisplay-img'>
               <img className='productdisplaymain-img' src={product.image} alt='product-img'/>
           </div>
        </div>
        <div className='productdisplay-right' >
            <h1>{product.name}</h1>
            <div className='product-display-start'>
               <img src={start_icon} alt='start-img'/>
               <img src={start_icon} alt='start-img'/>
               <img src={start_icon} alt='start-img'/>
               <img src={start_icon} alt='start-img'/>
               <img src={start_dull_icon} alt='start-img'/>
               <p>(122)</p>
            </div>
            <div className='product-display-right-prices'>
                 <div className='product-display-right-prices-old'>
                    ${product.old_price}
                 </div>
                 <div className='product-display-right-prices-new'>
                        ${product.new_price}
                    </div>
            </div>
            <div className='product-display-right-description'>
                 A light weight, usually knitted, pullover shirt, cloth fitting,
                 a ground neckline and short sleeves, worn as an undershirt or outershirt.
            </div>
            <div className='product-display-right-size'>
                 <h1>Select Size</h1>
                 <div className='product-display-right-sizes'>
                       <div>S</div>
                       <div>M</div>
                       <div>L</div>
                       <div>XL</div>
                       <div>XXL</div>
                 </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-right-category'><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p className='product-display-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
