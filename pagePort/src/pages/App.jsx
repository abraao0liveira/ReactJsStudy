import { Post } from '../components/Post/Post'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'

import styles from './App.module.css'
import '../styles/global.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
