import React, { useContext, useState, useEffect } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'
import { ShopContext } from '../context/ShopContext'

const BestSellers = () => {
    const { products } = useContext(ShopContext);
    const [bestSellerProducts, setBestSellerProducts] = useState([]);
    useEffect(() => {
        const bestProducts = products.filter((item) => (item.bestseller));
        setBestSellerProducts(bestProducts.slice(0, 5));
    }, [products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Check out our most loved products across categories and give your wardrobe a revamp
            </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSellerProducts.map((item, index) => (
                    <ProductItems key = {index} id = {item._id} image = {item.image} name = {item.name} price = {item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSellers
