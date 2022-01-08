import Feed from "../src/Components/FeedPokemon/Feed";
import styles from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";
export default function Home({ FeedList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Seja Bem vindo</h1>
      </div>
      <div className={styles.listPokes}>
        <Feed state={FeedList} />
      </div>
    </div>
  );
}
