import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis urna id neque dictum pellentesque in in nulla. Phasellus a tempor nulla. Vestibulum condimentum ex arcu, et volutpat tortor molestie et. Quisque placerat sodales risus, ut sodales turpis eleifend eget. Duis bibendum placerat pellentesque. Morbi dapibus eget dui vitae feugiat. Integer vitae turpis ut erat iaculis posuere. Sed aliquet at mauris et bibendum. Vivamus viverra turpis sit amet viverra ullamcorper. Aliquam at sapien tempor, mattis lectus nec, tincidunt mi. Cras interdum efficitur felis ultrices suscipit.
        Cras nec scelerisque enim. Pellentesque varius, orci et tempus hendrerit, urna erat varius tellus, nec fermentum nunc purus eu risus. Aliquam cursus dui eu sem elementum suscipit. Morbi volutpat lorem id erat commodo tincidunt. Maecenas aliquet, eros sit amet egestas lacinia, ex lorem euismod ipsum, quis fermentum dolor mauris non mi. Cras varius condimentum hendrerit. Sed fringilla consectetur libero eu porttitor. Etiam sit amet tincidunt est. Vestibulum sit amet commodo felis, non volutpat ipsum. Praesent in vehicula purus.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      /> 
    </div>
  )
}