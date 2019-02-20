import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { getTodo } from '../services'

function About (todo) {
  return (
    <div>
      <Head>
        <title>swhurl.com | About</title>
      </Head>
      <Nav />
      <H1>About</H1>
      <p>{todo.userId}</p>
    </div>
  )
}

About.getInitialProps = async ({ req }) => {
  const todo = await getTodo()
  return todo
}

export default About
