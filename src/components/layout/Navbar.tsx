import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSingulai from "@/assets/logo-singulai.png";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
              <img src={logoSingulai} alt="SingulAI" className="w-full h-full object-contain" />
            </div>
            <span className="font-display text-xl font-semibold tracking-tight">
              Singul<span className="text-gradient-gold">AI</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features">{t("nav.features")}</NavLink>
            <NavLink href="#how-it-works">{t("nav.howItWorks")}</NavLink>
            <NavLink href="#legacy">{t("nav.digitalLegacy")}</NavLink>
            <NavLink href="#avatar">{t("nav.aiAvatar")}</NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              {t("nav.signIn")}
            </Button>
            <Button variant="hero" size="sm">
              {t("nav.getStarted")}
            </Button>
          </div>
        </nav>
      </div>

      {/* Gradient border bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
}
