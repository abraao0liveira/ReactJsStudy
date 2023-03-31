import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1492998680170-81f8863d8d2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/abraao0liveira.png" />

                <strong>Abraão Oliveira</strong>
                <span>Full-Stack Developer</span>
            </div>

            <footer>
                <a href="https://github.com/abraao0liveira">
                    <PencilLine size={18}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
