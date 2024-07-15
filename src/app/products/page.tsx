import { CardProduct } from '@/components/CardProduct'
import styles from './products.module.css'

const URL = "http://127.0.0.1:8000/products"

interface Products {
  id: number
  name: string
  description: string
  price: number
}


const fetchProducts = async () => {
  const response = await fetch(URL, {
    method: "GET",
    cache: "no-store"
  })
  if (!response.ok) {
    throw new Error("Failed with fetch products in API")
  }
  const products: Products[] = await response.json();
  return products
}

const ProductsPage = async () => {
  const products = await fetchProducts()
  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <hr />
      <div className={styles.section}>
        {
          products.map(product => {
            return <CardProduct
              name={product.name}
              price={product.price}
              description={product.description}
              key={product.id} />
          })
        }
      </div>
    </div>
  )
}

export default ProductsPage;
