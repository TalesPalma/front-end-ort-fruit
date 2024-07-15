import styles from './cardProduct.module.css'


interface CardProductProps {
  name: string
  price: number
  description: string
}

export const CardProduct = ({ name, price, description }: CardProductProps) => {
  return (
    <div className={styles.card}>
      <h1>CardProduct</h1>
      <p>{`Nome: ${name}`}</p>
      <p>{`Price: R$ ${price}`}</p>
      <p>{`Description: ${description}`}</p>
    </div>
  )
}
