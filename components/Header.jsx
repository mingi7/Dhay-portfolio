import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  // دالة تغيير الخلفية
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? "light-mode" : "dark-mode";
  };

  return (
    <header className={`${isDark ? "text-white" : "text-black"} absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          
          <Link href="/">
            <div className="text-3xl font-bold cursor-pointer">
              Dhay Alzaidi
            </div>
          </Link>

          {/* زر التبديل */}
          <button onClick={toggleTheme} className="text-2xl">
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* الإطار الجانبي للشمس والقمر */}
<div className="fixed right-4 top-[30%] flex flex-col items-center gap-y-4 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
  <button onClick={() => document.body.className = 'light-mode'} className="text-2xl hover:scale-110 transition-all">
    ☀️
  </button>
  <div className="w-6 h-[1px] bg-white/30"></div> {/* خط فاصل بسيط */}
  <button onClick={() => document.body.className = 'dark-mode'} className="text-2xl hover:scale-110 transition-all">
    🌙
  </button>
</div>

          
        </div>
      </div>
    </header>
  );
};

export default Header;