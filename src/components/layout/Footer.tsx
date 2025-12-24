import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageCircle, Shield, Lock, Award, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { label: t("footer.product.features"), href: "#features" },
      { label: t("footer.product.howItWorks"), href: "#how-it-works" },
      { label: t("footer.product.pricing"), href: "#pricing" },
      { label: t("footer.product.roadmap"), href: "#roadmap" },
    ],
    legacy: [
      { label: t("footer.legacy.digitalWills"), href: "#" },
      { label: t("footer.legacy.aiAvatar"), href: "#" },
      { label: t("footer.legacy.timeCapsules"), href: "#" },
      { label: t("footer.legacy.cryptoRecovery"), href: "#" },
    ],
    company: [
      { label: t("footer.company.about"), href: "#" },
      { label: t("footer.company.blog"), href: "#" },
      { label: t("footer.company.careers"), href: "#" },
      { label: t("footer.company.contact"), href: "#" },
    ],
    legal: [
      { label: t("footer.legal.privacy"), href: "#" },
      { label: t("footer.legal.terms"), href: "#" },
      { label: t("footer.legal.security"), href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border">
      <div className="container-wide section-spacing-sm">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-xl font-bold text-gradient-gold">S</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">
                Singul<span className="text-gradient-gold">AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("footer.legacy")}</h4>
            <ul className="space-y-3">
              {footerLinks.legacy.map((link, index) => (
                <li key={index}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Security Badges */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">{t("footer.copyright")}</p>
          
          {/* Security Badges - Small & Discrete */}
          <div className="flex items-center gap-6 text-muted-foreground/60">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
              <Shield className="w-3 h-3" strokeWidth={1.5} />
              <span>{t("footer.blockchain")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
              <Lock className="w-3 h-3" strokeWidth={1.5} />
              <span>{t("footer.quantum")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
              <Award className="w-3 h-3" strokeWidth={1.5} />
              <span>{t("footer.inpi")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
              <Globe className="w-3 h-3" strokeWidth={1.5} />
              <span>{t("footer.ssl")}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" />Polygon Mainnet</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
