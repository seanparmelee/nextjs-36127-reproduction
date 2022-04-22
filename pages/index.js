import Head from 'next/head'
import Image from 'next/image'
import { isString } from 'util';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {isString('hi') ? 'it\'s a string!' : 'not string'}
    </div>
  )
}
