import React from 'react'
import OutputSection from '../src/components/OutputSection'
import ControlSection from '../src/components/ControlSection'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Home = _ => 
  <>
    <Head><title>Dashboard</title></Head>
    <div className={styles.home}>
      <ControlSection />
      <OutputSection />
    </div>
  </>

export default Home