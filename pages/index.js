import React from 'react'
import OutputSection from '../src/components/OutputSection'
import NavSection from '../src/components/ControlSection'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Home = () => {
  
  return (
    <>
      <Head><title>Dashboard</title></Head>
      <div className={styles.home}>
        <NavSection />
        <OutputSection />
      </div>
    </>
  )
}

export default Home