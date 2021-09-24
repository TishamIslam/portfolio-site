import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TheHeader from '../components/atoms/singletons/TheHeader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tisham Islam's Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHeader />

      <footer></footer>
    </div>
  )
}
