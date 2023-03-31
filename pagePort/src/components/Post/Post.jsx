import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/abraao0liveira.png" />
                    <div className={styles.authorInfo}>
                        <strong>Abraão Oliveira</strong>
                        <span>Desenvolvedor Full-Stack</span>
                    </div>
                </div>

                <time title="31 de Março às 00:24h" dateTime='2023-03-31 00:24:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!👋</p>
                <p>Estou muito feliz em poder compartilhar com vocês o meu primeiro post no blog.</p>
                <p>link para portífolio: ⚡<a href="https:/github.com/abraao0liveira">link GitHub</a>⚡</p>
                <p>Espero que gostem!</p>
                <p>
                    <a href="">#novopost</a>{' '}
                    <a href="">#github</a>{' '}
                </p>
            </div>
        </article>
    )
}