import { CardProduct } from '@/components/CardProduct'
import styles from './products.module.css'

export default function ProductsPage() {

  //Ponto de conexao com a api sera recebida aqui
  const products = [
    {
      id: 1,
      name: 'Alface',
      price: 22.5,
      description: 'Bom para saude',
    },
    {
      id: 2,
      name: 'Batata',
      price: 22.5,
      description: 'Bom para saude',
    },
    {
      id: 3,
      name: 'Cebola',
      price: 22.5,
      description: 'Bom para saude',
    },
  ]

  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <div className={styles.section}>
        {
          products.map(products => {
            return <CardProduct
              name={products.name}
              price={products.price}
              description={products.description}
              key={products.id} />
          })
        }
      </div>
    </div>
  )
}

