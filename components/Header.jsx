import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-8">
          <Link href="/">
            <div className="text-3xl font-bold cursor-pointer text-white hover:text-blue-500 transition-all">
              Dhay Alzaidi
            </div>
          </Link>

          {/* الإطار الجانبي */}
          <div className="fixed right-4 top-[30%] flex flex-col items-center gap-y-4 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 z-50">
            <button onClick={() => document.body.className = 'light-mode'} className="text-2xl hover:scale-110 transition-all">☀️</button>
            <div className="w-6 h-[1px] bg-white/30"></div>
            <button onClick={() => document.body.className = 'dark-mode'} className="text-2xl hover:scale-110 transition-all">🌙</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;