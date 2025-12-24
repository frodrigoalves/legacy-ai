import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section-spacing-sm relative overflow-hidden">
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl border border-primary/20" />
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/50 via-transparent to-accent/50 opacity-20" />

          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-sm font-medium text-primary">
                {t("cta.badge")}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-display-sm md:text-display-md font-bold mb-6 text-balance">
              {t("cta.title")}{" "}
              <span className="text-gradient-gold">{t("cta.titleHighlight")}</span>?
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              {t("cta.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                {t("cta.button.create")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Button>
              <Button variant="glass" size="lg">
                {t("cta.button.talk")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
