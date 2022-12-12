import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

type Props = {
    children?: React.ReactNode;
    title?: string;
    description?: string;
}

export default function Layout({ children, title, description}: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        //<div className='wrap'>
            //<Head>
                //<title>{ pageTitle }</title>
                //<meta name="description" content={ description || "ホームページ概要"} />
            //</Head>
            //<header>
                //<h1>{ pageTitle }</h1>
            //</header>
            //<nav>
                //<button><Link href="/">Home</Link></button>
            //&nbsp;&nbsp;
                //<button><Link href="/ibaraki">茨城県</Link></button>
            //&nbsp;&nbsp;
                //<button><Link href="/tochigi">栃木県</Link></button>
            //&nbsp;&nbsp;
                //<button><Link href="/gunma">群馬県</Link></button>
            //&nbsp;&nbsp;
            //</nav>
            //<main>{ children }</main>
            //<footer>&copy; next.js Demo</footer>
        //</div>

        <div className = {styles.grid}>
          <Head>
            <title>{ pageTitle }</title>
              <meta name="description" content={ description || "ホームページ概要"} />
            </Head>  
          <header>
              <h1>{ pageTitle }</h1>
          </header>


            <a href="/ibaraki" className={styles.card}>
              <h2>茨城県 &rarr;</h2>
            </a>
            <a href="/tochigi" className={styles.card}>
              <h2>栃木県 &rarr;</h2>
            </a>
            <a href="/gunma" className={styles.card}>
              <h2>群馬県 &rarr;</h2>
            </a>

            <main>{children}</main>
        </div>
        
    );
};



