import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="foud — Inspiration and art in food-form." />
    <Nav />

    <div className="hero">
      <h1 className="title">foud</h1>
      <p className="description">Inspiration and art in food-form.</p>
    </div>

    <style jsx>{`
      :global(body),
      :global(html) {
        background: #090909;
      }
      .hero {
        width: 100%;
        margin: 0 auto;
        max-width: 980px;
        padding: 0 24px;
        box-sizing: border-box;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-family: Playfair Display, serif;
        font-size: 72px;
        font-weight: 400;
        color: #ffffff;
      }
      .title em {
        font-style: normal;
        opacity: 0.45;
      }
      .description {
        margin-top: 16px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  </div>
)

export default Home
