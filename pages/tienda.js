import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
    Image,
} from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

const generateList = () => {
    const list = [];

    for (let i = 0; i < 30; i++) {
        list.push(
            <a
                key={i}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    priority="true"
                    className={styles.logo}
                    src={`/camisa1.jpeg`}
                    alt="Camisa"
                />

            </a>
        );
    }

    return list;
};

export default function Home({ articles }) {
    const list = generateList(articles);
    return (
        <>
            <Head>
                <title>Tienda</title>
                <meta name="description" content="Store as test" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                
                <div className={styles.grid}>
                    {list}
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    //const res = await fetch('http://localhost:3000/api/article');
    //const articles = await res.json({});

    return {
        props: {
            articles: "si"
        }
    }
}