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
        avatarUrl: "https://github.com/davicotting.png",
        name: "Davi Cotting",
        role: "Desenvolvedor Back-End"
      },
      content: [
        { type: 'paragraph', content: 'Fala galera!👋' },
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
