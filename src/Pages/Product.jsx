import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find(item => item.id === Number(productId))
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      </div>
  )
}

export default Product