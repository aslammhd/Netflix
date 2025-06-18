'use client';


import Email from './components/email/page';
import FAQ from './components/faq/page';
import Footer from './components/footer/page';
import Header from './components/header/page';
import Trending from './components/trending/page';


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
