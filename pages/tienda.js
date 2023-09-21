import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
    Image,
} from '@chakra-ui/react'
import FilterProducts from '@/components/FiltersProducts'

const inter = Inter({ subsets: ['latin'] })

const generateList = (articles) => {
    const list = [];

    return articles.map(article => {
        return <a
            key={article.Codigo}
            className="rounded border-black	border-double  dark:border-inherit transition duration-200 bg-gray-200 border duration-400 flex-none flex-shrink-0 w-[calc(17% - 10px)] my-5 mx-2 puntero text-center text-black"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className='text-sm m-5'>
            {article.Nombre}
            </div>
            <div className='text-sm m-5'>
            {"Precio: " + article.Prc_Venta + " " + article.Moneda}
            </div>
        </a>
    })
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
            <main className="flex flex-col justify-center items-start p-6 min-h-screen">
                <div className="pt-12">
                    <FilterProducts />
                    <div className="m-15 flex flex-wrap pt-50 justify-center max-w-1000 w-full mx-auto">
                        {list}
                    </div>
                </div>
            </main>
        </>
    )
}

const arminioJson = require("../public/arminio.json");
const bazarJson = require("../public/bazar");
const comestiblesJson = require("../public/comestibles");

export const getServerSideProps = async () => {

    return {
        props: {
            articles: [...arminioJson, ...bazarJson, ...comestiblesJson]
        }
    }
}