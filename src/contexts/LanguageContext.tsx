import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.digitalLegacy": "Digital Legacy",
    "nav.aiAvatar": "AI Avatar",
    "nav.signIn": "Sign In",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.badge": "Web3 Digital Legacy Platform",
    "hero.title.line1": "Your legacy,",
    "hero.title.highlight": "eternalized",
    "hero.title.line2": "on the blockchain",
    "hero.subtitle": "Manage digital inheritances, create perpetual AI avatars and protect your memories with decentralized smart contracts.",
    "hero.cta.create": "Create My Legacy",
    "hero.cta.demo": "View Demo",
    "hero.trust.polygon": "Polygon Network",
    "hero.trust.ipfs": "IPFS Storage",
    "hero.trust.certified": "OpenZeppelin Certified",
    
    // Features
    "features.title": "Revolutionary",
    "features.titleHighlight": "Features",
    "features.subtitle": "A complete platform to preserve and transmit your digital legacy with blockchain security.",
    "features.smartWills.title": "Smart Wills",
    "features.smartWills.desc": "Automated contracts that execute your wishes with precision, without intermediaries or bureaucracy.",
    "features.aiAvatar.title": "Perpetual AI Avatar",
    "features.aiAvatar.desc": "Create an intelligent avatar trained with your personality and knowledge to interact eternally.",
    "features.cryptoRecovery.title": "Crypto Recovery",
    "features.cryptoRecovery.desc": "Multi-sig system for secure recovery of lost or inaccessible crypto assets.",
    "features.encryption.title": "Total Encryption",
    "features.encryption.desc": "Your data protected with cutting-edge encryption and decentralized storage on IPFS.",
    "features.beneficiaries.title": "Heir Management",
    "features.beneficiaries.desc": "Define beneficiaries, percentages and release conditions transparently and immutably.",
    "features.timeCapsules.title": "Time Capsules",
    "features.timeCapsules.desc": "Schedule messages, files and memories to be revealed on specific dates in the future.",
    
    // How It Works
    "howItWorks.title": "How It",
    "howItWorks.titleHighlight": "Works",
    "howItWorks.subtitle": "In just 4 simple steps, your digital legacy will be protected forever.",
    "howItWorks.step1.title": "Connect Your Wallet",
    "howItWorks.step1.desc": "Connect your Web3 wallet (MetaMask, WalletConnect, etc.) to start creating your digital legacy securely.",
    "howItWorks.step2.title": "Configure Your Legacy",
    "howItWorks.step2.desc": "Define your digital assets, memories, messages and configure inheritance conditions with full control.",
    "howItWorks.step3.title": "Add Beneficiaries",
    "howItWorks.step3.desc": "Choose who will receive your legacy, set percentages and establish personalized release conditions.",
    "howItWorks.step4.title": "Eternalize on Blockchain",
    "howItWorks.step4.desc": "Your legacy is encrypted and stored immutably, ready for automatic execution when needed.",
    
    // Avatar Section
    "avatar.badge": "Advanced AI Technology",
    "avatar.title": "Your",
    "avatar.titleHighlight": "Perpetual AI Avatar",
    "avatar.subtitle": "Create a digital version of yourself that can converse, share knowledge and interact with your loved ones forever. Trained with your personality, memories and wisdom.",
    "avatar.feature1.title": "Natural Conversations",
    "avatar.feature1.desc": "Fluid and natural dialogues based on generative AI",
    "avatar.feature2.title": "Continuous Learning",
    "avatar.feature2.desc": "Your avatar evolves and improves with each interaction",
    "avatar.feature3.title": "Preserved Memories",
    "avatar.feature3.desc": "Stories, values and knowledge eternalized",
    "avatar.cta": "Create My Avatar",
    "avatar.chat.question": "Dad, what was your favorite song?",
    "avatar.chat.answer": "Ah, I always loved \"Imagine\" by John Lennon. It reminds me of the times when we dreamed of a better world... 🎵",
    "avatar.chat.placeholder": "Type your question...",
    
    // CTA Section
    "cta.badge": "Start for free",
    "cta.title": "Ready to eternalize",
    "cta.titleHighlight": "your legacy",
    "cta.subtitle": "Join thousands of people who are already protecting their memories, assets and knowledge for future generations.",
    "cta.button.create": "Create Free Account",
    "cta.button.talk": "Talk to Specialist",
    
    // Footer
    "footer.description": "Blockchain platform for digital legacy management, smart inheritance contracts and perpetual AI avatars.",
    "footer.product": "Product",
    "footer.product.features": "Features",
    "footer.product.howItWorks": "How It Works",
    "footer.product.pricing": "Pricing",
    "footer.product.roadmap": "Roadmap",
    "footer.legacy": "Legacy",
    "footer.legacy.digitalWills": "Digital Wills",
    "footer.legacy.aiAvatar": "AI Avatar",
    "footer.legacy.timeCapsules": "Time Capsules",
    "footer.legacy.cryptoRecovery": "Crypto Recovery",
    "footer.company": "Company",
    "footer.company.about": "About Us",
    "footer.company.blog": "Blog",
    "footer.company.careers": "Careers",
    "footer.company.contact": "Contact",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Privacy",
    "footer.legal.terms": "Terms of Use",
    "footer.legal.security": "Security",
    "footer.copyright": "© 2025 SingulAI. All rights reserved.",
    "footer.blockchain": "Blockchain Secured",
    "footer.quantum": "Quantum Safe",
    "footer.inpi": "INPI Registered",
    "footer.ssl": "SSL Certified",
  },
  pt: {
    // Navbar
    "nav.features": "Recursos",
    "nav.howItWorks": "Como Funciona",
    "nav.digitalLegacy": "Legado Digital",
    "nav.aiAvatar": "Avatar IA",
    "nav.signIn": "Entrar",
    "nav.getStarted": "Começar Agora",
    
    // Hero
    "hero.badge": "Plataforma Web3 de Legados Digitais",
    "hero.title.line1": "Seu legado,",
    "hero.title.highlight": "eternizado",
    "hero.title.line2": "na blockchain",
    "hero.subtitle": "Gerencie heranças digitais, crie avatares IA perpétuos e proteja suas memórias com contratos inteligentes descentralizados.",
    "hero.cta.create": "Criar Meu Legado",
    "hero.cta.demo": "Ver Demo",
    "hero.trust.polygon": "Polygon Network",
    "hero.trust.ipfs": "IPFS Storage",
    "hero.trust.certified": "OpenZeppelin Certified",
    
    // Features
    "features.title": "Recursos",
    "features.titleHighlight": "Revolucionários",
    "features.subtitle": "Uma plataforma completa para preservar e transmitir seu legado digital com a segurança da blockchain.",
    "features.smartWills.title": "Testamentos Inteligentes",
    "features.smartWills.desc": "Contratos automatizados que executam sua vontade com precisão, sem intermediários ou burocracia.",
    "features.aiAvatar.title": "Avatar IA Perpétuo",
    "features.aiAvatar.desc": "Crie um avatar inteligente treinado com sua personalidade e conhecimento para interagir eternamente.",
    "features.cryptoRecovery.title": "Recuperação de Cripto",
    "features.cryptoRecovery.desc": "Sistema multi-sig para recuperação segura de criptoativos perdidos ou inacessíveis.",
    "features.encryption.title": "Criptografia Total",
    "features.encryption.desc": "Seus dados protegidos com criptografia de ponta e armazenamento descentralizado no IPFS.",
    "features.beneficiaries.title": "Gestão de Herdeiros",
    "features.beneficiaries.desc": "Defina beneficiários, percentuais e condições de liberação de forma transparente e imutável.",
    "features.timeCapsules.title": "Cápsulas do Tempo",
    "features.timeCapsules.desc": "Agende mensagens, arquivos e memórias para serem revelados em datas específicas no futuro.",
    
    // How It Works
    "howItWorks.title": "Como",
    "howItWorks.titleHighlight": "Funciona",
    "howItWorks.subtitle": "Em apenas 4 passos simples, seu legado digital estará protegido para sempre.",
    "howItWorks.step1.title": "Conecte sua Wallet",
    "howItWorks.step1.desc": "Conecte sua carteira Web3 (MetaMask, WalletConnect, etc.) para começar a criar seu legado digital de forma segura.",
    "howItWorks.step2.title": "Configure seu Legado",
    "howItWorks.step2.desc": "Defina seus ativos digitais, memórias, mensagens e configure as condições de herança com total controle.",
    "howItWorks.step3.title": "Adicione Beneficiários",
    "howItWorks.step3.desc": "Escolha quem receberá seu legado, defina percentuais e estabeleça condições de liberação personalizadas.",
    "howItWorks.step4.title": "Eternize na Blockchain",
    "howItWorks.step4.desc": "Seu legado é criptografado e armazenado de forma imutável, pronto para execução automática quando necessário.",
    
    // Avatar Section
    "avatar.badge": "Tecnologia de IA Avançada",
    "avatar.title": "Seu",
    "avatar.titleHighlight": "Avatar IA Perpétuo",
    "avatar.subtitle": "Crie uma versão digital de si mesmo que pode conversar, compartilhar conhecimento e interagir com seus entes queridos para sempre. Treinado com sua personalidade, memórias e sabedoria.",
    "avatar.feature1.title": "Conversas Naturais",
    "avatar.feature1.desc": "Diálogos fluidos e naturais baseados em IA generativa",
    "avatar.feature2.title": "Aprendizado Contínuo",
    "avatar.feature2.desc": "Seu avatar evolui e melhora com cada interação",
    "avatar.feature3.title": "Memórias Preservadas",
    "avatar.feature3.desc": "Histórias, valores e conhecimento eternizados",
    "avatar.cta": "Criar Meu Avatar",
    "avatar.chat.question": "Pai, qual era sua música favorita?",
    "avatar.chat.answer": "Ah, sempre adorei \"Imagine\" do John Lennon. Me lembra dos tempos em que sonhávamos com um mundo melhor... 🎵",
    "avatar.chat.placeholder": "Digite sua pergunta...",
    
    // CTA Section
    "cta.badge": "Comece gratuitamente",
    "cta.title": "Pronto para eternizar",
    "cta.titleHighlight": "seu legado",
    "cta.subtitle": "Junte-se a milhares de pessoas que já estão protegendo suas memórias, ativos e conhecimento para as próximas gerações.",
    "cta.button.create": "Criar Conta Grátis",
    "cta.button.talk": "Falar com Especialista",
    
    // Footer
    "footer.description": "Plataforma blockchain para gestão de legados digitais, contratos inteligentes de herança e avatares IA perpétuos.",
    "footer.product": "Produto",
    "footer.product.features": "Recursos",
    "footer.product.howItWorks": "Como Funciona",
    "footer.product.pricing": "Preços",
    "footer.product.roadmap": "Roadmap",
    "footer.legacy": "Legado",
    "footer.legacy.digitalWills": "Testamentos Digitais",
    "footer.legacy.aiAvatar": "Avatar IA",
    "footer.legacy.timeCapsules": "Cápsulas do Tempo",
    "footer.legacy.cryptoRecovery": "Recuperação Cripto",
    "footer.company": "Empresa",
    "footer.company.about": "Sobre Nós",
    "footer.company.blog": "Blog",
    "footer.company.careers": "Carreiras",
    "footer.company.contact": "Contato",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Privacidade",
    "footer.legal.terms": "Termos de Uso",
    "footer.legal.security": "Segurança",
    "footer.copyright": "© 2025 SingulAI. Todos os direitos reservados.",
    "footer.blockchain": "Segurança Blockchain",
    "footer.quantum": "Quantum Safe",
    "footer.inpi": "Registrado INPI",
    "footer.ssl": "Certificado SSL",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("singulai-lang") as Language;
    return stored || "en";
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("singulai-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
