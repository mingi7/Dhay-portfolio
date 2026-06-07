'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  return (
    <header className="absolute z-30 w-full px-16 xl:px-0">
      <div className="container mx-auto flex justify-between items-center py-8">
        <Link href="/">
          <div className="text-3xl font-bold text-white hover:text-blue-500 transition-all">Dhay Alzaidi</div>
        </Link>

        {/* أدوات التحكم */}
        <div className="fixed right-4 top-[30%] flex flex-col items-center gap-y-4 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 z-50">
          <button onClick={() => setTheme('light')} className="text-2xl">☀️</button>
          <button onClick={() => setTheme('dark')} className="text-2xl">🌙</button>
          <div className="w-6 h-[1px] bg-white/30"></div>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="font-bold hover:text-blue-500">
            {lang === 'ar' ? 'EN' : 'ع'}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;