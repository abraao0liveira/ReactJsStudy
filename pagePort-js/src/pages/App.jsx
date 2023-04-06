import { Post } from '../components/Post/Post'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'

import styles from './App.module.css'
import '../styles/global.css'

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/abraao0liveira.png",
        name: "Abraão Oliveira",
        role: "Desenvolvedor Full-Stack"
      },
      content: [
        { type: 'paragraph', content: 'Fala galera!👋' },
        { type: 'paragraph', content: 'Estou muito feliz em poder compartilhar com vocês o meu primeiro post no blog.' },
        { type: 'link', content: '⚡link GitHub⚡', href: 'https:/github.com/abraao0liveira' },
        { type: 'paragraph', content: 'Espero que gostem!' },
        { type: 'hashtag', content: '#novopost' },
        { type: 'hashtag', content: '#github' },
      ],
      publishedAt: new Date('2023-03-31 00:24:30')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://thicc.mywaifulist.moe/waifus/18127/7b673b37bc9076e7872b5259d5a61c7bf067c8ffb37a39409578fbe58c6cb9ab_thumb.jpg",
        name: "Sophie Hatter",
        role: "Chapeleira"
      },
      content: [
        { type: 'paragraph', content: 'Oi pessoal.' },
      ],
      publishedAt: new Date('2023-04-01 20:00:00')
    },
  ];  

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => { 
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />) 
          })}
        </main>
      </div>
    </div>
  )
}
