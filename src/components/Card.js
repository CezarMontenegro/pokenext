import Image from 'next/image'
import Link from 'next/link'

export default function Card({ pokemon }) {
return (
  <div>
    <Image
      src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}
      height="120"
      width="120"
      alt={pokemon.name}
    />
    <p>#{pokemon.id}</p>
    <h3>{pokemon.name}</h3>
    <Link href='#'>
      Detalhes
    </Link>
  </div>
  )
}