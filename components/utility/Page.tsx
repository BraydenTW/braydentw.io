import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React, { ReactChildren } from "react";

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Brayden Wright - Web Developer, Designer, Creator."
      : `${currentPage} - BraydenTW.io`
  }`;
  console.log(currentPage);
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="title"
          content={pageTitle}
        />
        <meta
          name="description"
          content={desc}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://braydentw.io/" />
        <meta
          property="og:title"
          content={pageTitle}
        />
        <meta
          property="og:description"
          content={desc}
        />
        <meta property="og:image" content="./static/misc/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://braydentw.io/" />
        <meta
          property="twitter:title"
          content={pageTitle}
        />
        <meta
          property="twitter:description"
          content={desc}
        />
        <meta property="twitter:image" content="./static/misc/og.png"></meta>
      </Head>

      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string,
  meta: {
    title?: string,
    desc: string
  },
  children?: JSX.Element | JSX.Element[]
}
