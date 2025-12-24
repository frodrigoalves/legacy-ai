import { motion } from "framer-motion";
import { 
  Shield, 
  Brain, 
  Wallet, 
  FileKey, 
  Users, 
  Clock 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: FileKey,
      title: t("features.smartWills.title"),
      description: t("features.smartWills.desc"),
    },
    {
      icon: Brain,
      title: t("features.aiAvatar.title"),
      description: t("features.aiAvatar.desc"),
    },
    {
      icon: Wallet,
      title: t("features.cryptoRecovery.title"),
      description: t("features.cryptoRecovery.desc"),
    },
    {
      icon: Shield,
      title: t("features.encryption.title"),
      description: t("features.encryption.desc"),
    },
    {
      icon: Users,
      title: t("features.beneficiaries.title"),
      description: t("features.beneficiaries.desc"),
    },
    {
      icon: Clock,
      title: t("features.timeCapsules.title"),
      description: t("features.timeCapsules.desc"),
    },
  ];

  return (
    <section id="features" className="section-spacing relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-display-sm md:text-display-md font-bold mb-4">
            {t("features.title")}{" "}
            <span className="text-gradient-gold">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/20 transition-colors duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
