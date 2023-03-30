import { Post } from './Post'
import '../styles/global.css'
import { Header } from '../components/Header/Header'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Abraão Oliveira" 
        content="Olá, meu nome é Abraão Oliveira e eu sou um desenvolvedor front-end." 
      />
      <Post 
        author="Gabriel Oliveira" 
        content="Olá, meu nome é Gabriel Oliveira e eu sou um desenvolvedor back-end." 
      />
    </div>
  )
}