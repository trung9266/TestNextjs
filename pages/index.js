import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Heroes from "../components/Content/Hearoes/Heroes"
import Pricing from "../components/Content/Pricing/Pricing"
import Media from "../components/Content/Media/Media";
import AboutBanner from "../components/Content/AboutBanner/AboutBanner";
import Info from "../components/Content/Info/Info";

export default function Home() {
  return (
    <>
    {/* <Head>
      <link href="http://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>
      <link href="http://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet"/>
    </Head> */}

      {/* <div className={`${Wrapper.Container}`}>
        <h1>Styled Container</h1>
      </div> */}
      <Header/>
      <Heroes/>
      <Media/>
      <AboutBanner/>
      <Info/>
      <Pricing/>
      <Footer/>
    </>
  );
}
