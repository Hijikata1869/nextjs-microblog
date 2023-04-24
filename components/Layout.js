import Head from "next/head";

const name = "Hijikata";

function Layout() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
    </div>
  );
}

export default Layout;