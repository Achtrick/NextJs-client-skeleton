import Head from "next/head";

function Meta(props) {
  return (
    <>
      <Head>
        <link defer rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          defer
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          defer
          href="https://fonts.googleapis.com/css2?family=Noticia+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}

export default Meta;
