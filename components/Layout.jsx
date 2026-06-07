import { Sora } from "next/font/google";
import { Cairo } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page text-white bg-cover bg-center bg-no-repeat ${sora.variable} ${cairo.variable} font-sora relative`}
      style={{ backgroundImage: "var(--bg-image, url('/dark.png'))" }}
    >
      <Head>
        <title>Dhay ALzaidi | Portfolio</title>
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </main>
  );
};

export default Layout;