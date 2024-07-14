import styles from './style.module.css'
import imageLogo from './icone.svg'
import Image from 'next/image'
export const Logo = () => {
  return (
    <div className={styles.container}>
      Welcome to new era of healthcare
      <Image className={styles.logo} src={imageLogo} alt="Logo" width={150} height={100} />
    </div >
  )
}
