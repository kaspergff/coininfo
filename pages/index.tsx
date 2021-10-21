import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import { fetchAPI } from "../lib/coinapi";

import SingleCoinInfoRow from "../components/SingleCoinInfoRow";

export async function getServerSideProps() {
    const path = "/v1/assets/BTC;ETH;BNB;ADA;USDT;XRP;SOL;DOT;USDC;DOGE";
    const data = await fetchAPI(path);
    if (!data) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default function Home(props: any) {
    console.log(props.data);
    // sort coins on price, decending
    const coins = props.data.sort((a:any,b:any) => {
      return b.price_usd - a.price_usd
    })

    return (
        <Layout home>
            <title>{siteTitle}</title>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Volume(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin: any, index: number) => {
                        return (
                            <SingleCoinInfoRow
                                key={coin.asset_id}
                                count={index + 1}
                                name={coin.name + ' ' + coin.asset_id}
                                price={coin.price_usd}
                                volume_1day_usd={coin.volume_1day_usd}
                            />
                        );
                    })}
                </tbody>
            </table>
        </Layout>
    );
}


