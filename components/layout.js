import Head from "next/head";
import styles from "./layout.module.css";

const name = "Build by Kasper de Graaff";
export const siteTitle = "Coininfo.com";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Get info about crypto coins"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
            </Head>
            <header>
                {home ? (
                    <>
                        <h1 className="siteTitle">{siteTitle}</h1>
                    </>
                ) : (
                    <>
                        <h2 className="">
                            <Link href="/">
                                <a className="">{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    );
}
