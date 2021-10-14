import Head from "next/head"
import Image from "next/image"
import Layout, { siteTitle } from "../components/layout"

import Coininfo from "../components/coininfo"

async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/coininfoapi')
  const info = await res.json()

  return info
}


const COINS = getStaticProps()

export default function Home() {
  const COINS_old = [...Array(10).keys()]

  return (
    <Layout home>
      <title>{siteTitle}</title>
      <div>
        {console.log(COINS.BTC)}
        <p>{COINS.BTC}</p>
        </div>

    </Layout>
  )
}
