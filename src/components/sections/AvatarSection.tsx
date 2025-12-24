import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Cpu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function AvatarSection() {
  const { t } = useLanguage();

  return (
    <section id="avatar" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">
                {t("avatar.badge")}
              </span>
            </div>

            <h2 className="text-display-sm md:text-display-md font-bold mb-6">
              {t("avatar.title")} <span className="text-gradient-blue">{t("avatar.titleHighlight")}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("avatar.subtitle")}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <FeatureItem
                icon={MessageSquare}
                title={t("avatar.feature1.title")}
                description={t("avatar.feature1.desc")}
              />
              <FeatureItem
                icon={Cpu}
                title={t("avatar.feature2.title")}
                description={t("avatar.feature2.desc")}
              />
              <FeatureItem
                icon={Heart}
                title={t("avatar.feature3.title")}
                description={t("avatar.feature3.desc")}
              />
            </div>

            <Button variant="accent" size="lg">
              {t("avatar.cta")}
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Avatar Card */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
              
              {/* Card */}
              <div className="relative glass-card rounded-3xl p-8 md:p-12">
                {/* Avatar Visual */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary/50 rounded-full animate-pulse-glow" />
                  <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                    <div className="text-7xl">🧬</div>
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                    <Sparkles className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "-2s" }}>
                    <Cpu className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Chat Preview */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-primary/10 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                      <p className="text-sm">{t("avatar.chat.question")}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-muted-foreground">
                        {t("avatar.chat.answer")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Preview */}
                <div className="mt-6 flex items-center gap-3 bg-background/50 rounded-full px-4 py-3 border border-border">
                  <span className="text-sm text-muted-foreground flex-1">
                    {t("avatar.chat.placeholder")}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
