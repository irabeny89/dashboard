import React from 'react'
import DisplaySection from '../src/components/DisplaySection'
import NavSection from '../src/components/NavSection'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Home = () => {
  
  return (
    <>
      <Head><title>Dashboard</title></Head>
      <div className={styles.home}>
        <NavSection />
        <DisplaySection />
      </div>
    </>
  )
}

export default Home