import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Card.module.css'

export default function Card({ pokemon }) {
return (
  <div className={styles.card}>
    <Image
      src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}
      height="120"
      width="120"
      alt={pokemon.name}
    />
    <p className={styles.id}>#{pokemon.id}</p>
    <h3 className={styles.title}>{pokemon.name}</h3>
    <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
      Detalhes
    </Link>
  </div>
  )
}