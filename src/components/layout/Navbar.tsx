import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
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
            <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <span className="text-xl font-bold text-gradient-gold">S</span>
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-xl font-semibold tracking-tight">
              Singul<span className="text-gradient-gold">AI</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Recursos</NavLink>
            <NavLink href="#how-it-works">Como Funciona</NavLink>
            <NavLink href="#legacy">Legado Digital</NavLink>
            <NavLink href="#avatar">Avatar IA</NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button variant="hero" size="sm">
              Começar Agora
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
