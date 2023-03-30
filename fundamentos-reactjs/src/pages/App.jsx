import { Post } from './Post'
import '../styles/global.css'
import { Header } from '../components/Header/Header'
import styles from './App.module.css'
import { Sidebar } from '../components/Sidebar/Sidebar'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
          author="Abraão Oliveira" 
          content="Olá, meu nome é Abraão Oliveira e eu sou um desenvolvedor front-end." 
          />
          <Post 
          author="Gabriel Oliveira" 
          content="Olá, meu nome é Gabriel Oliveira e eu sou um desenvolvedor back-end." 
          />
        </main>
      </div>
    </div>
  )
}
