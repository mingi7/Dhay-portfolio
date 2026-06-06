import { useState } from "react";
import Link from "next/link";
import Socials from "../components/Socials";

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

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;