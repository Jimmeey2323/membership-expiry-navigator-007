
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 dark:bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-[1920px] mx-auto px-6 py-6 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          A project by Jimmeey Gondaa for Physique 57 India. All rights reserved 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
