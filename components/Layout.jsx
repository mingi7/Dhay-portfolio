import { useState } from "react";
import { Sora } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";

// إعداد الخط
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  // حالة التحكم بالثيم (الوضع)
  const [theme, setTheme] = useState('dark');

  return (
    <main className={`page ${theme === 'light' ? 'bg-site-light' : 'bg-site-dark'} text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative transition-all duration-500`}>
      <Head>
        <title>Dhay ALzaidi | Portfolio</title>
      </Head>

      {/* نمرر دالة التبديل للهيدر عشان يتحكم في الـ State */}
      <Header toggleTheme={setTheme} />

      {/* المحتوى */}
      {children}
    </main>
  );
};

export default Layout;