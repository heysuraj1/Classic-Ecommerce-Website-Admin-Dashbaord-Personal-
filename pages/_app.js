import useEffect from "react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer"; //bxs-user
import Login from "../Components/Login";
import cookie from "js-cookie";
import { parseCookies } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const cook = parseCookies();
  const user = cook.user ? JSON.stringify(cook.user) : "";
  const userR = cook.userR ? JSON.stringify(cook.userR) : "";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dashboard - Ecom Ninja</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/vendor/quill/quill.snow.css" rel="stylesheet" />
        <link href="/vendor/quill/quill.bubble.css" rel="stylesheet" />
        <link href="/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/vendor/simple-datatables/style.css" rel="stylesheet" />

        <link href="/css/style.css" rel="stylesheet" />
      </Head>

      <Script src="/vendor/apexcharts/apexcharts.min.js" />
      <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/vendor/chart.js/chart.min.js" />
      <Script src="/vendor/echarts/echarts.min.js" />
      <Script src="/vendor/quill/quill.min.js" />
      <Script src="/vendor/simple-datatables/simple-datatables.js" />
      <Script src="/vendor/tinymce/tinymce.min.js" />
      <Script src="/vendor/php-email-form/validate.js" />

      <Script src="/js/main.js" />

      
          <Header />
          <Slider />
          <ToastContainer />

          <Component {...pageProps} />

          <Footer />
      
    
      {/* {!userR == '"admin"' ?  (
        <>
        
         
        </>
      ) : (
        <>
          <ToastContainer />
          <h1 className="mt-5 text-center">
            You Are Not Athenticated For This Page
          </h1>
        </>
      )} */}
    </>
  );
}

export default MyApp;
