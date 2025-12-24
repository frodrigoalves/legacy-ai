import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Conecte sua Wallet",
    description:
      "Conecte sua carteira Web3 (MetaMask, WalletConnect, etc.) para começar a criar seu legado digital de forma segura.",
  },
  {
    number: "02",
    title: "Configure seu Legado",
    description:
      "Defina seus ativos digitais, memórias, mensagens e configure as condições de herança com total controle.",
  },
  {
    number: "03",
    title: "Adicione Beneficiários",
    description:
      "Escolha quem receberá seu legado, defina percentuais e estabeleça condições de liberação personalizadas.",
  },
  {
    number: "04",
    title: "Eternize na Blockchain",
    description:
      "Seu legado é criptografado e armazenado de forma imutável, pronto para execução automática quando necessário.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-display-sm md:text-display-md font-bold mb-4">
            Como <span className="text-gradient-blue">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos simples, seu legado digital estará protegido para sempre.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors group">
                  {/* Step Number */}
                  <div className="text-5xl font-display font-bold text-accent/20 mb-4 group-hover:text-accent/30 transition-colors">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
