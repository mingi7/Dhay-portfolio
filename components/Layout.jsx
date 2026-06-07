import { Sora, Cairo } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

const Layout = ({ children }) => {
  return (
    <main className={`page ${sora.variable} ${cairo.variable} font-sora relative`}>
      <Head>
        <title>Dhay Alzaidi | Portfolio</title>
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </main>
  );
};
export default Layout;