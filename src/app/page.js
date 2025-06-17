'use client';


import Email from './components/Email';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Trending from './components/Trending';


export default function HomePage() {
  return (
    <>
      <Header />
      <Trending />
      <FAQ />
      <Email />
      <Footer />
    </>
  );
}
