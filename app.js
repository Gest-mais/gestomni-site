/* ==========================================================================
   Gest'Omni Landing Page - Modern Dynamic Bilingual CMS Logic
   ========================================================================== */

// --- Default Fallback Configuration Object ---
// (Ensures the page works 100% offline or locally via file:/// protocol without CORS blocks)
const DEFAULT_CONFIG = {
  adminPassword: "admin",
  youtubeIdPt: "dQw4w9WgXcQ",
  youtubeIdEn: "dQw4w9WgXcQ",
  trialLink: "https://gestomni.com/signup",
  demoLink: "https://calendly.com/gestomni/demo",
  googleAnalyticsId: "",
  supabaseUrl: "https://okvvtrcdwshzfjfapgyl.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rdnZ0cmNkd3NoemZqZmFwZ3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2OTYzMTEsImV4cCI6MjA5ODI3MjMxMX0.FrR1d79hnJKDzBpZZl9Ddp1fjmuHYQ9Zadq4VC8Hilo",
  partner1Name: "Mercado Livre",
  partner2Name: "Efi Bank",
  partner3Name: "Mercado Pago",
  partner4Name: "PagSeguro",
  partner1Logo: "",
  partner2Logo: "",
  partner3Logo: "",
  partner4Logo: "",
  logoImgUrl: "logo.png",
  heroBanner1Url: "banner.png",
  heroBanner2Url: "video_cover.png",
  heroBanner3Url: "banner.png",
  videoCoverUrl: "video_cover.png",
  cardFrontSegment1: "banner.png",
  cardFrontSegment2: "video_cover.png",
  cardFrontSegment3: "banner.png",
  cardFrontSolution1: "video_cover.png",
  cardFrontSolution2: "banner.png",
  cardFrontSolution3: "video_cover.png",
  footerLinks: {
    featuresUrl: "#features",
    missionUrl: "#mission",
    pricingUrl: "#pricing",
    supportUrl: "#"
  },
  en: {
    meta: {
      title: "Gest'Omni - Enterprise-Grade Retail & Financial Management for Small Businesses",
      description: "Level the playing field. Get the exact same AI-powered tools, marketplace integrations, and financial tracking that retail giants spend millions on."
    },
    nav: {
      features: "Features",
      mission: "Our Purpose",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Get Started"
    },
    hero: {
      badge: "🚀 LEVEL THE PLAYING FIELD",
      title: "Enterprise Power, Scaled for Local Retailers",
      subtitle: "Stop paying fortune for advanced systems. Gest'Omni gives you AI-powered inventory, Shopee & Mercado Livre sync, and immutable financial auditing to fight and win against retail giants.",
      ctaStart: "Start Free Trial",
      ctaWatch: "Watch App Presentation",
      videoTitle: "Watch the Gest'Omni Presentation"
    },
    mission: {
      badge: "THE MISSION",
      title: "Why Gest'Omni Exists",
      description1: "For decades, retail giants have dominated the market by investing millions in advanced automation, predictive artificial intelligence, and global supply chain integrations.",
      description2: "Our mission is simple: to level the playing field. We package that exact same enterprise power into a clean, affordable, and incredibly easy-to-use application. Local shop owners, home artisans, and independent retailers now have the same technical capabilities as the largest corporations on earth.",
      stat1Number: "10x",
      stat1Text: "Faster Stock Management",
      stat2Number: "0%",
      stat2Text: "Unexplained Inventory Loss",
      stat3Number: "100%",
      stat3Text: "Control Over Cash Flow"
    },
    features: {
      title: "Equipped with Enterprise-Grade Tools",
      subtitle: "Everything you need to manage, scale, and automate your retail or artisan business in a single workspace.",
      items: [
        {
          id: "ai_invoice",
          title: "AI Invoice Parser (DANFE/XML)",
          description: "Drag and drop your XML or PDF DANFE invoice files. Our built-in Gemini AI extracts suppliers, items, quantities, and cost prices in seconds, adding them to stock automatically.",
          badge: "Gemini AI"
        },
        {
          id: "pos",
          title: "Point of Sale (POS / Checkout)",
          description: "A lightning-fast, intuitive checkout page. Search by name, scan barcodes, handle discount percentages, manage product variations, and process direct refunds instantly.",
          badge: "Fast Checkout"
        },
        {
          id: "audit",
          title: "Immutable Audit Ledger",
          description: "Sleep easy knowing your stock is fully audited. Any change triggers a system-wide secure PostgreSQL ledger tracking who, when, why, and the exact stock adjustments made.",
          badge: "Security"
        },
        {
          id: "market",
          title: "Marketplace Sync",
          description: "Synchronize your brick-and-mortar physical stock with online listings on Shopee and Mercado Livre. Sell a product in-store, and online stock updates automatically.",
          badge: "Multi-Channel"
        },
        {
          id: "finance",
          title: "Cash Flow & Consolidated DRE",
          description: "Understand your actual financial health. Consolidated revenues, cost of goods sold (CMV), fixed operating bills, and accounts payable are balanced automatically for real net profit tracking.",
          badge: "Accounting"
        },
        {
          id: "custom",
          title: "Artisan Custom Orders",
          description: "A production board tailored for tailors, artisans, and custom ateliers. Track deposits, down-payments, remaining balances, delivery deadlines, and dispatch alerts.",
          badge: "Atelier Focus"
        },
        {
          id: "partners",
          title: "Artisans & Partners Accounting",
          "description": "Track raw materials (debits) handed to external artisans and finished items (credits) returned, calculating the net financial balance of each supplier automatically.",
          badge: "Collaboration"
        },
        {
          id: "ecommerce",
          title: "Online Storefront & Dispatch",
          "description": "Launch your own integrated public e-commerce store. Customers buy online, Google Maps API computes exact shipping, and you get immediate WhatsApp dispatcher notifications.",
          badge: "Webstore"
        },
        {
          id: "devstudio",
          title: "DevStudio Layout Customizer",
          "description": "Rearrange and resize widgets directly on your dashboard visual layout without code. Customize mobile/desktop rendering columns and shadows to match your workflow.",
          badge: "No-Code"
        }
      ]
    },
    "pricing": {
      "title": "Try any plan free for 30 days.",
      "subtitle": "No commitment, no credit card required.",
      "monthly": "Monthly",
      "yearly": "Yearly (Save 20%)",
      "perMonth": "/ month",
      "perYear": "/ year",
      "trialBtn": "Start 14-Day Free Trial",
      "plans": [
        {
          "name": "Artisan Solo",
          "priceMonthly": 29,
          "priceYearly": 278,
          "description": "Perfect for individual artisans and home-based creators.",
          "features": [
            "1 User / Operator",
            "Artisans & Partners Ledger",
            "Point of Sale (POS)",
            "Manual Inventory Audit",
            "Email & Community Support"
          ],
          "popular": false
        },
        {
          "name": "Retail Growth",
          "priceMonthly": 59,
          "priceYearly": 566,
          "description": "Designed for growing physical shops and active sellers.",
          "features": [
            "Unlimited Users & Operators",
            "Gemini AI Invoice Parser (30/mo)",
            "Shopee & Mercado Livre Sync",
            "Integrated Public Webstore",
            "Full Consolidated DRE & Cash Flow",
            "Immutable Stock Auditing",
            "Priority WhatsApp Support"
          ],
          "popular": true
        },
        {
          "name": "Enterprise Scale",
          "priceMonthly": 119,
          "priceYearly": 1142,
          "description": "For businesses managing high volume and multi-store setups.",
          "features": [
            "Everything in Growth Plan",
            "Unlimited Gemini AI Invoice Parser",
            "Custom Domain for Webstore",
            "API Access & Custom Webhooks",
            "24/7 Dedicated Account Manager"
          ],
          "popular": false
        }
      ]
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "subtitle": "Got questions about Gest'Omni? We have answers.",
      "items": [
        {
          "q": "Do I need technical skills to use Gest'Omni?",
          "a": "Not at all. Gest'Omni is designed to be fully operational in minutes. The AI Invoice Parser reads XML/PDF files so you don't have to enter items manually, and our dashboard is completely visual."
        },
        {
          "q": "How does Shopee and Mercado Livre sync work?",
          "a": "Through standard secure APIs. You map your listing SKUs to physical inventory items. Whenever a checkout is finalized on your physical POS, Gest'Omni automatically triggers API updates to adjust stock levels online, avoiding double-selling."
        },
        {
          "q": "What is the Immutable Audit Ledger?",
          "a": "It is a security mechanism built directly into our database level. Every single inventory change (additions, sales, returns) registers a permanent audit row with details like timestamp, reason, and operator. This ledger cannot be edited or deleted, ensuring absolute honesty in your store data."
        },
        {
          "q": "Can I cancel my subscription at any time?",
          "a": "Yes, completely. There are no contracts or cancellation fees. You can unsubscribe directly from your billing panel with a single click."
        }
      ]
    },
    "footer": {
      "tagline": "Empowering local retailers and artisans worldwide to stand strong against global giants.",
      "adminPortal": "Admin Portal Access",
      "rights": "All rights reserved. Powered by Supabase & Gemini AI.",
      "featuresText": "Features",
      "missionText": "Our Purpose",
      "pricingText": "Pricing",
      "supportText": "Technical Support"
    }
  },
  "pt": {
    "meta": {
      "title": "Gest'Omni - Gestão Financeira e Vendas Nível Corporativo para Pequenos Negócios",
      "description": "Nivele o jogo. Tenha as mesmas ferramentas de IA, integrações de marketplaces e auditoria de estoque que as grandes multinacionais gastam fortunas para ter."
    },
    "nav": {
      "features": "Recursos",
      "mission": "Nosso Propósito",
      "pricing": "Planos",
      "faq": "Dúvidas",
      "cta": "Começar Agora"
    },
    "hero": {
      "badge": "🚀 NIVELANDO O JOGO NO VAREJO",
      "title": "Poder de Grande Empresa para o Pequeno Negócio",
      "subtitle": "Chega de pagar fortunas por sistemas limitados. O Gest'Omni entrega IA para ler notas fiscais, sincronização automática com Shopee/Mercado Livre e auditoria de estoque imutável para você competir e vencer os gigantes do varejo.",
      "ctaStart": "Começar Teste Grátis",
      "ctaWatch": "Assistir Vídeo de Apresentação",
      "videoTitle": "Assista à Apresentação do Gest'Omni"
    },
    "mission": {
      "badge": "A MISSÃO",
      "title": "Por que o Gest'Omni Existe",
      "description1": "Por décadas, os grandes gigantes do varejo dominaram o mercado investindo milhões de dólares em automação avançada, inteligência artificial preditiva e cadeias de suprimentos integradas.",
      "description2": "Nossa missão é simples: equilibrar a balança. Nós empacotamos exatamente esse mesmo poder corporativo em um aplicativo limpo, acessível e extremamente fácil de usar. Agora, lojistas locais, artesãos e pequenos comerciantes têm as mesmas capacidades tecnológicas que as maiores empresas do mundo pagam caro para possuir.",
      "stat1Number": "10x",
      "stat1Text": "Mais Rápido no Estoque",
      "stat2Number": "0%",
      "stat2Text": "Perda de Estoque Sem Explicação",
      "stat3Number": "100%",
      "stat3Text": "Controle do Fluxo de Caixa"
    },
    "features": {
      "title": "Equipado com Recursos de Elite",
      "subtitle": "Tudo o que você precisa para gerenciar, escalar e automatizar o seu negócio físico ou e-commerce em uma única tela.",
      "items": [
        {
          "id": "ai_invoice",
          "title": "Leitor de Notas com IA (DANFE/XML)",
          "description": "Arraste e solte arquivos XML ou PDF de suas notas fiscais DANFE. Nossa IA Gemini integrada extrai fornecedores, produtos, quantidades e preços de custo em segundos, alimentando o estoque automaticamente.",
          "badge": "Gemini AI"
        },
        {
          "id": "pos",
          "title": "Frente de Caixa (PDV Ágil)",
          "description": "Uma tela de checkout ultrarrápida e intuitiva. Busque por nome, escaneie código de barras, aplique descontos em porcentagem ou valor, selecione variações e realize reembolsos integrados.",
          "badge": "Vendas Rápidas"
        },
        {
          "id": "audit",
          "title": "Auditoria de Estoque Imutável",
          "description": "Durma tranquilo sabendo que seu estoque é totalmente auditável. Qualquer movimentação aciona um gatilho seguro no banco de dados (PostgreSQL) registrando quem, quando, por que e as alterações exatas.",
          "badge": "Segurança"
        },
        {
          "id": "market",
          "title": "Sincronização de Marketplaces",
          "description": "Sincronize seu estoque físico com anúncios da Shopee e Mercado Livre. Vendeu na loja física? O estoque dos seus anúncios online é atualizado automaticamente em segundos.",
          "badge": "Multicanal"
        },
        {
          "id": "finance",
          "title": "Fluxo de Caixa & DRE Consolidada",
          "description": "Entenda a real saúde financeira da sua empresa. Receitas, custos de mercadorias vendidas (CMV), despesas operacionais fixas e contas a pagar são consolidados para calcular seu lucro líquido real.",
          "badge": "Financeiro"
        },
        {
          "id": "custom",
          "title": "Encomendas e Produção sob Medida",
          "description": "Um painel estilo Kanban sob medida para costureiras, artesãos e ateliês. Acompanhe adiantamentos, saldos devedores na entrega, prazos visuais e alertas de conclusão.",
          "badge": "Foco em Ateliê"
        },
        {
          "id": "partners",
          "title": "Acerto de Parceiras e Artesãs",
          "description": "Monitore matérias-primas e rolos de fios entregues a artesãs terceirizadas (débitos) e a entrega de produtos acabados (créditos), gerando o saldo financeiro a pagar de forma automática.",
          "badge": "Colaboração"
        },
        {
          "id": "ecommerce",
          "title": "Loja Online & Painel de Entregas",
          "description": "Tenha sua própria loja virtual pública para clientes comprarem online. Taxa de entrega calculada via Google Maps API, com acionamento de entregador e envio direto de dados via WhatsApp.",
          "badge": "Loja Própria"
        },
        {
          "id": "devstudio",
          "title": "Personalizador Visual DevStudio",
          "description": "Reorganize e altere o tamanho dos cards diretamente na tela sem mexer em código. Configure colunas para celular/computador e sombras que combinem com o seu fluxo de trabalho.",
          "badge": "Sem Código"
        }
      ]
    },
    "pricing": {
      "title": "Experimente qualquer plano grátis por 30 dias.",
      "subtitle": "Sem compromisso, sem cartão de crédito.",
      "monthly": "Mensal",
      "yearly": "Anual (Economize 20%)",
      "perMonth": "/ mês",
      "perYear": "/ ano",
      "trialBtn": "Começar Teste de 14 Dias Grátis",
      "plans": [
        {
          "name": "Artesão Solo",
          "priceMonthly": 29,
          "priceYearly": 278,
          "description": "Perfeito para artesãos individuais e criadores que trabalham em casa.",
          "features": [
            "1 Usuário / Operador",
            "Gestão de Parceiras e Artesãs",
            "Frente de Caixa (PDV)",
            "Auditoria de Estoque Manual",
            "Suporte por E-mail e Comunidade"
          ],
          "popular": false
        },
        {
          "name": "Varejo Crescimento",
          "priceMonthly": 59,
          "priceYearly": 566,
          "description": "Ideal para lojas físicas em crescimento e vendedores ativos.",
          "features": [
            "Usuários e Operadores Ilimitados",
            "Importador com IA Gemini (30 notas/mês)",
            "Sincronização Shopee e Mercado Livre",
            "Loja Virtual Integrada",
            "DRE Consolidada e Fluxo de Caixa",
            "Auditoria de Estoque Automática",
            "Suporte prioritário via WhatsApp"
          ],
          "popular": true
        },
        {
          "name": "Escala Enterprise",
          "priceMonthly": 119,
          "priceYearly": 1142,
          "description": "Para empresas que gerenciam alto volume de vendas ou múltiplas lojas.",
          "features": [
            "Tudo do plano Crescimento",
            "Leitor de Notas com IA Ilimitado",
            "Domínio Personalizado para Loja Online",
            "Acesso à API e Webhooks Personalizados",
            "Gerente de Conta Dedicado 24/7"
          ],
          "popular": false
        }
      ]
    },
    "faq": {
      "title": "Perguntas Frequentes",
      "subtitle": "Ficou com alguma dúvida sobre o Gest'Omni? Nós respondemos.",
      "items": [
        {
          "q": "Preciso de conhecimento técnico para usar o Gest'Omni?",
          "a": "Nenhum. O Gest'Omni foi projetado para estar funcionando em poucos minutos. A inteligência artificial lê suas notas fiscais automaticamente para que você não precise digitar itens, e todo o painel é totalmente visual."
        },
        {
          "q": "Como funciona a sincronização com Shopee e Mercado Livre?",
          "a": "Usamos APIs oficiais e seguras. Você faz o mapeamento do código do anúncio (SKU) com o produto físico. Sempre que uma venda for concluída no PDV da sua loja física, o Gest'Omni avisa as plataformas para atualizar o estoque online automaticamente."
        },
        {
          "q": "O que é a Auditoria de Estoque Imutável?",
          "a": "É um sistema de segurança integrado direto no banco de dados. Qualquer alteração de estoque (entradas, vendas, devoluções) registra uma linha definitiva com data, hora, motivo e operador. Essa linha não pode ser alterada ou apagada, garantindo total controle."
        },
        {
          "q": "Posso cancelar minha assinatura a qualquer momento?",
          "a": "Sim, com certeza. Não existem contratos de fidelidade ou taxas de cancelamento. Você pode cancelar sua assinatura diretamente no painel de faturamento com um único clique."
        }
      ]
    },
    "footer": {
      "tagline": "Empoderando comerciantes locais e artesãos para competirem e vencerem os gigantes do varejo global.",
      "adminPortal": "Acesso Administrativo",
      "rights": "Todos os direitos reservados. Desenvolvido com Supabase & Gemini AI.",
      "featuresText": "Recursos",
      "missionText": "Nosso Propósito",
      "pricingText": "Planos",
      "supportText": "Suporte Técnico"
    }
  }
};

// --- Application State ---
let siteConfig = {};
let activeLang = "en"; // Default language
let isYearlyBilling = false; // Monthly vs Yearly Pricing Toggle State
let isAdminAuthenticated = false;
let ytPlayer = null;
let usdToBrlRate = 5.20; // Live BRL/USD exchange rate, defaults to 5.20 fallback
let databasePlans = [];

// --- SVG Icons Map for Features ---
const FEATURE_ICONS = {
  ai_invoice: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  pos: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="12" y1="4" x2="12" y2="20"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>`,
  audit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
  market: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
  finance: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  custom: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  partners: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  ecommerce: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  devstudio: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
};

// --- Initialization / Config Loader ---
window.addEventListener("DOMContentLoaded", async () => {
  // Step 1: Synchronously load cached config and render the page immediately to avoid flashing
  loadConfigFromCache();
  detectUserLanguage();
  hydrateDOM();
  setupEventListeners(); // Bind click listeners right away so page is interactive

  // Step 2: Asynchronously fetch latest configurations and DB plans in the background
  try {
    await loadConfiguration(); // Fetches from Supabase DB, updates siteConfig and localCache
    hydrateDOM(); // Re-hydrate with any new settings (images, copy, links)
  } catch (err) {
    console.error("Error loading remote configuration:", err);
  }

  try {
    await fetchExchangeRate();
  } catch (err) {
    console.error("Error fetching exchange rate:", err);
  }

  try {
    await fetchPlansFromSupabase(); // Fetches dynamic plans
    const t = siteConfig[activeLang];
    if (t) {
      renderPricing(t.pricing.plans, t.pricing.perMonth, t.pricing.perYear, t.pricing.trialBtn);
    }
  } catch (err) {
    console.error("Error fetching plans:", err);
  }

  // GA can be initialized after remote config is fetched
  initializeGoogleAnalytics();
});

/**
 * Fetches active plans dynamically from the Supabase database.
 */
async function fetchPlansFromSupabase() {
  const supabaseUrl = siteConfig.supabaseUrl || DEFAULT_CONFIG.supabaseUrl;
  const supabaseAnonKey = siteConfig.supabaseAnonKey || DEFAULT_CONFIG.supabaseAnonKey;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/subscription_plans?select=*&is_active=eq.true&order=display_order.asc`, {
      method: "GET",
      headers: {
        "apikey": supabaseAnonKey,
        "Authorization": `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      databasePlans = await response.json();
      console.log("Planos dinâmicos carregados com sucesso do Supabase:", databasePlans);
      
      // Define o link de teste grátis dinamicamente pelo plano em destaque (popular)
      if (databasePlans && databasePlans.length > 0) {
        const popularPlan = databasePlans.find(plan => plan.is_popular || plan.display_order === 2 || plan.name.toLowerCase().includes('growth') || plan.name.toLowerCase().includes('crescimento')) || databasePlans[0];
        if (popularPlan) {
          siteConfig.trialLink = popularPlan.checkout_url || `https://gestomni-app.vercel.app/auth?signup=true&plan=${popularPlan.id}&interval=monthly`;
          console.log("Link de teste grátis (Header/Hero) definido dinamicamente pela API:", siteConfig.trialLink);
        }
      }
    } else {
      console.warn("Status de erro do Supabase ao buscar planos. Usando planos estáticos do config.json.");
    }
  } catch (error) {
    console.error("Falha ao se conectar com a API do Supabase:", error);
  }
}

/**
 * Dynamically injects Google Analytics 4 Measurement Tag if configured.
 */
function initializeGoogleAnalytics() {
  const gaId = siteConfig.googleAnalyticsId;
  if (!gaId || gaId.trim() === "") return;

  // Check if already injected
  if (document.getElementById("ga-gtag-script")) return;

  // 1. Load the external Google Analytics script
  const gaScript = document.createElement("script");
  gaScript.id = "ga-gtag-script";
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(gaScript);

  // 2. Setup global dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', gaId);
  
  console.log(`Google Analytics initialized with ID: ${gaId}`);
}

/**
 * Fetches the current USD to BRL exchange rate from public APIs.
 * Leverages er-api.com and economia.awesomeapi.com.br fallback.
 */
async function fetchExchangeRate() {
  // 1. Primary API: open.er-api.com
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (response.ok) {
      const data = await response.json();
      if (data && data.rates && data.rates.BRL) {
        usdToBrlRate = parseFloat(data.rates.BRL);
        console.log(`Live USD/BRL exchange rate: 1 USD = ${usdToBrlRate} BRL`);
        return;
      }
    }
  } catch (e) {
    console.warn("er-api.com failed. Trying fallback AwesomeAPI.", e);
  }

  // 2. Fallback API: AwesomeAPI (popular in Brazil)
  try {
    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    if (response.ok) {
      const data = await response.json();
      if (data && data.USDBRL && data.USDBRL.bid) {
        usdToBrlRate = parseFloat(data.USDBRL.bid);
        console.log(`Live USD/BRL from fallback: 1 USD = ${usdToBrlRate} BRL`);
      }
    }
  } catch (e) {
    console.error("All exchange rate APIs failed. Using fallback 5.20", e);
  }
}

/**
 * Helper to ensure all required configuration keys are present.
 */
function fillMissingKeysWithDefaults() {
  Object.keys(DEFAULT_CONFIG).forEach(key => {
    if (siteConfig[key] === undefined) {
      siteConfig[key] = DEFAULT_CONFIG[key];
    }
  });
}

/**
 * Loads cached configuration from localStorage synchronously to prevent screen flashing.
 */
function loadConfigFromCache() {
  let loadedConfig = null;
  
  // 1. Try reading the saved config from localStorage
  try {
    const savedConfig = localStorage.getItem("gestomni_landing_config");
    if (savedConfig) {
      loadedConfig = JSON.parse(savedConfig);
      console.log("Cached configuration loaded synchronously to prevent flashing.");
      
      // Force migration to the new Supabase credentials if it's still using the old ones
      if (loadedConfig.supabaseUrl && loadedConfig.supabaseUrl.includes("mipuonyuunqizkoizftv")) {
        console.log("Migrating Supabase credentials in local cache to the new project...");
        loadedConfig.supabaseUrl = DEFAULT_CONFIG.supabaseUrl;
        loadedConfig.supabaseAnonKey = DEFAULT_CONFIG.supabaseAnonKey;
        try {
          localStorage.setItem("gestomni_landing_config", JSON.stringify(loadedConfig));
        } catch (e) {}
      }
    }
  } catch (e) {
    console.error("Error loading configuration from localStorage:", e);
  }
  
  // 2. Fallback to DEFAULT_CONFIG
  if (!loadedConfig) {
    loadedConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    console.log("Using default configuration synchronously.");
  }
  
  siteConfig = loadedConfig;
  fillMissingKeysWithDefaults();
}

/**
 * Loads the application configuration.
 * Prioritizes: Supabase database -> localStorage overrides -> static config.json file -> fallback object.
 */
async function loadConfiguration() {
  let loadedConfig = null;

  // 1. Try reading the custom Supabase credentials from localStorage first
  let localKeys = {};
  try {
    const saved = localStorage.getItem("gestomni_landing_config");
    if (saved) localKeys = JSON.parse(saved);
  } catch (e) {}

  const url = localKeys.supabaseUrl || DEFAULT_CONFIG.supabaseUrl;
  const key = localKeys.supabaseAnonKey || DEFAULT_CONFIG.supabaseAnonKey;

  // 2. Try fetching the configuration from Supabase Database
  if (url && key) {
    try {
      const response = await fetch(`${url}/rest/v1/landing_config?id=eq.1&select=config`, {
        method: "GET",
        headers: {
          "apikey": key,
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0 && data[0].config && Object.keys(data[0].config).length > 0) {
          loadedConfig = data[0].config;
          console.log("Configuration successfully loaded from Supabase database.");
        }
      }
    } catch (error) {
      console.warn("Could not fetch configuration from Supabase database. Trying fallbacks.", error);
    }
  }

  // 3. Fallback: try loading from localStorage (local preview override)
  if (!loadedConfig) {
    const savedConfig = localStorage.getItem("gestomni_landing_config");
    if (savedConfig) {
      try {
        loadedConfig = JSON.parse(savedConfig);
        console.log("Configuration successfully loaded from local storage overrides.");
      } catch (e) {
        console.error("Error parsing configuration from local storage.", e);
      }
    }
  }

  // 4. Fallback: try fetching the static config.json file from the server
  if (!loadedConfig) {
    try {
      const response = await fetch("config.json");
      if (response.ok) {
        loadedConfig = await response.json();
        console.log("Configuration successfully loaded from config.json file.");
      }
    } catch (error) {
      console.warn("Could not fetch config.json. Falling back to defaults.");
    }
  }

  // 5. Fallback to hardcoded DEFAULT_CONFIG
  if (!loadedConfig) {
    loadedConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    console.log("Using integrated DEFAULT_CONFIG fallback.");
  }

  // Set active config
  siteConfig = loadedConfig;
  fillMissingKeysWithDefaults();

  // Cache back to localStorage to keep it up to date
  try {
    localStorage.setItem("gestomni_landing_config", JSON.stringify(siteConfig));
  } catch (e) {}
}

/**
 * Detects user preferred language, saving preference in localStorage.
 */
function detectUserLanguage() {
  const savedLang = localStorage.getItem("gestomni_lang");
  if (savedLang === "en" || savedLang === "pt") {
    activeLang = savedLang;
  } else {
    // Check browser preference, default to english if not portuguese
    const browserLang = navigator.language || navigator.userLanguage;
    activeLang = browserLang.startsWith("pt") ? "pt" : "en";
  }
  
  // Set visual switch position
  const langSwitcher = document.getElementById("lang-switcher");
  if (langSwitcher) {
    langSwitcher.setAttribute("data-lang", activeLang);
    langSwitcher.querySelectorAll(".lang-option").forEach(opt => {
      opt.classList.toggle("active", opt.getAttribute("data-opt") === activeLang);
    });
  }
}

/**
 * Safe DOM manipulation helpers to prevent runtime TypeErrors from halting execution
 */
function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function safeSetHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function safeSetAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

/**
 * Hydrates all static and dynamic elements on the page based on the active language.
 */
function hydrateDOM() {
  const t = siteConfig[activeLang];
  if (!t) return;

  // Hydrate Meta SEO elements
  safeSetText("meta-title", t.meta.title);
  const elMetaDesc = document.getElementById("meta-desc");
  if (elMetaDesc) elMetaDesc.setAttribute("content", t.meta.description);
  document.title = t.meta.title;

  // Hydrate Customizable App Images
  document.querySelectorAll(".brand-logo-img").forEach(img => {
    img.src = siteConfig.logoImgUrl || "logo.png";
  });

  const hero1 = document.getElementById("hero-slide-1");
  if (hero1) hero1.style.backgroundImage = `linear-gradient(rgba(7, 10, 19, 0.4), rgba(7, 10, 19, 0.85)), url('${siteConfig.heroBanner1Url || "banner.png"}')`;

  const hero2 = document.getElementById("hero-slide-2");
  if (hero2) hero2.style.backgroundImage = `linear-gradient(rgba(7, 10, 19, 0.6), rgba(7, 10, 19, 0.9)), url('${siteConfig.heroBanner2Url || "video_cover.png"}')`;

  const hero3 = document.getElementById("hero-slide-3");
  if (hero3) hero3.style.backgroundImage = `linear-gradient(rgba(7, 10, 19, 0.5), rgba(7, 10, 19, 0.85)), url('${siteConfig.heroBanner3Url || "banner.png"}')`;

  const videoCover = document.getElementById("video-placeholder");
  if (videoCover) videoCover.style.backgroundImage = `linear-gradient(rgba(7, 10, 19, 0.35), rgba(7, 10, 19, 0.8)), url('${siteConfig.videoCoverUrl || "video_cover.png"}')`;

  const cardSeg1 = document.getElementById("card-seg-1-front");
  if (cardSeg1) cardSeg1.style.backgroundImage = `linear-gradient(rgba(15, 53, 98, 0.8), rgba(7, 10, 19, 0.95)), url('${siteConfig.cardFrontSegment1 || "banner.png"}')`;

  const cardSeg2 = document.getElementById("card-seg-2-front");
  if (cardSeg2) cardSeg2.style.backgroundImage = `linear-gradient(rgba(15, 53, 98, 0.8), rgba(7, 10, 19, 0.95)), url('${siteConfig.cardFrontSegment2 || "video_cover.png"}')`;

  const cardSeg3 = document.getElementById("card-seg-3-front");
  if (cardSeg3) cardSeg3.style.backgroundImage = `linear-gradient(rgba(15, 53, 98, 0.8), rgba(7, 10, 19, 0.95)), url('${siteConfig.cardFrontSegment3 || "banner.png"}')`;

  const cardSol1 = document.getElementById("card-sol-1-front");
  if (cardSol1) cardSol1.style.backgroundImage = `linear-gradient(rgba(15, 53, 98, 0.8), rgba(7, 10, 19, 0.95)), url('${siteConfig.cardFrontSolution1 || "video_cover.png"}')`;

  const cardSol2 = document.getElementById("card-sol-2-front");
  if (cardSol2) cardSol2.style.backgroundImage = `linear-gradient(rgba(15, 53, 98, 0.8), rgba(7, 10, 19, 0.95)), url('${siteConfig.cardFrontSolution2 || "banner.png"}')`;

  const cardSol3 = document.getElementById("card-sol-3-front");
  if (cardSol3) cardSol3.style.backgroundImage = `linear-gradient(rgba(15, 53, 98, 0.8), rgba(7, 10, 19, 0.95)), url('${siteConfig.cardFrontSolution3 || "video_cover.png"}')`;

  // Hydrate Header Navigation
  safeSetText("nav-features", t.nav.features);
  safeSetText("nav-mission", t.nav.mission);
  safeSetText("nav-pricing", t.nav.pricing);
  safeSetText("nav-faq", t.nav.faq);
  safeSetText("nav-cta", t.nav.cta);
  safeSetAttr("nav-cta", "href", siteConfig.trialLink);

  // Hydrate Hero Carousel slide texts and buttons dynamically based on active language
  const slide1Title = document.getElementById("hero-slide1-title");
  const slide1Desc = document.getElementById("hero-slide1-desc");
  const slide1Btn = document.getElementById("hero-slide1-btn");
  const slide1Subtext = document.getElementById("hero-slide1-subtext");
  
  if (slide1Title) {
    slide1Title.textContent = activeLang === "pt" 
      ? "Evolução Comercial Inteligente e Confiável." 
      : "Intelligent and Reliable Business Evolution.";
  }
  if (slide1Desc) {
    slide1Desc.textContent = activeLang === "pt"
      ? "Automatize a gestão, otimize o estoque e impulsione as vendas com nossa plataforma SaaS de nível corporativo. Experimente o futuro do seu negócio."
      : "Automate management, optimize inventory, and boost sales with our enterprise-grade SaaS platform. Experience the future of your business.";
  }
  if (slide1Btn) {
    slide1Btn.setAttribute("href", siteConfig.trialLink || "#pricing");
    slide1Btn.textContent = activeLang === "pt" ? "Começar Teste Grátis de 30 Dias" : "Start 30-Day Free Trial";
  }
  if (slide1Subtext) {
    slide1Subtext.textContent = activeLang === "pt" ? "Sem necessidade de cartão" : "No credit card required";
  }

  const slide2Btn = document.querySelector("#hero-slide-2 .trial-btn");
  if (slide2Btn) {
    slide2Btn.setAttribute("href", "#pricing");
    slide2Btn.textContent = activeLang === "pt" ? "Iniciar Testes" : "Start Testing";
  }

  const slide3Btn = document.querySelector("#hero-slide-3 .trial-btn");
  if (slide3Btn) {
    slide3Btn.setAttribute("href", "#pricing");
    slide3Btn.textContent = activeLang === "pt" ? "Iniciar Testes" : "Start Testing";
  }

  // Footer Links Bindings
  const featuresLink = document.getElementById("footer-link-features");
  if (featuresLink) {
    featuresLink.textContent = t.footer.featuresText || t.nav.features;
    featuresLink.setAttribute("href", siteConfig.footerLinks?.featuresUrl || "#features");
  }

  const missionLink = document.getElementById("footer-link-mission");
  if (missionLink) {
    missionLink.textContent = t.footer.missionText || t.nav.mission;
    missionLink.setAttribute("href", siteConfig.footerLinks?.missionUrl || "#mission");
  }

  const pricingLink = document.getElementById("footer-link-pricing");
  if (pricingLink) {
    pricingLink.textContent = t.footer.pricingText || t.nav.pricing;
    pricingLink.setAttribute("href", siteConfig.footerLinks?.pricingUrl || "#pricing");
  }

  // Hydrate Hero Section (Only if present in DOM, else fallbacks for slider)
  if (document.getElementById("hero-badge")) {
    safeSetHtml("hero-badge", `🚀 ${t.hero.badge.replace(/^🚀\s*/, "")}`);
    safeSetText("hero-title", t.hero.title);
    safeSetText("hero-subtitle", t.hero.subtitle);
    safeSetText("hero-cta-start", t.hero.ctaStart);
    safeSetAttr("hero-cta-start", "href", siteConfig.trialLink);
    safeSetText("hero-cta-watch-text", t.hero.ctaWatch);
  }

  // Hydrate Video Placeholder text
  safeSetText("video-placeholder-text", t.hero.ctaWatch);

  // Hydrate Mission / Core Purpose Section (Only if present in DOM)
  if (document.getElementById("mission-badge")) {
    safeSetText("mission-badge", t.mission.badge);
    safeSetText("mission-title", t.mission.title);
    safeSetText("mission-desc-1", t.mission.description1);
    safeSetText("mission-desc-2", t.mission.description2);
    
    safeSetText("stat1-num", t.mission.stat1Number);
    safeSetText("stat1-lbl", t.mission.stat1Text);
    safeSetText("stat2-num", t.mission.stat2Number);
    safeSetText("stat2-lbl", t.mission.stat2Text);
    safeSetText("stat3-num", t.mission.stat3Number);
    safeSetText("stat3-lbl", t.mission.stat3Text);
  }

  // Hydrate Features Section Header (Only if present in DOM)
  if (document.getElementById("features-title")) {
    safeSetText("features-title", t.features.title);
    safeSetText("features-subtitle", t.features.subtitle);
  }

  // Dynamically populate features cards
  renderFeatures(t.features.items);

  // Hydrate Pricing Section Header
  safeSetText("pricing-title", t.pricing.title);
  safeSetText("pricing-subtitle", t.pricing.subtitle);
  
  let middleDiscount = 20; // default fallback
  const useDatabasePlans = databasePlans && databasePlans.length > 0;
  if (useDatabasePlans) {
    const middlePlan = databasePlans.find(plan => plan.display_order === 2 || plan.name.toLowerCase().includes("growth") || plan.name.toLowerCase().includes("crescimento")) || databasePlans[1] || databasePlans[0];
    if (middlePlan) {
      middleDiscount = Number(middlePlan.yearly_discount_percent !== null && middlePlan.yearly_discount_percent !== undefined ? middlePlan.yearly_discount_percent : 20);
    }
  } else {
    const staticPlans = t.pricing.plans || [];
    if (staticPlans.length >= 2) {
      const middlePlan = staticPlans[1];
      const fullMonthly = middlePlan.priceMonthly * 12;
      const discount = ((fullMonthly - middlePlan.priceYearly) / fullMonthly) * 100;
      middleDiscount = Math.round(discount);
    } else if (staticPlans.length > 0) {
      const p = staticPlans[0];
      const fullMonthly = p.priceMonthly * 12;
      const discount = ((fullMonthly - p.priceYearly) / fullMonthly) * 100;
      middleDiscount = Math.round(discount);
    }
  }

  safeSetText("billing-monthly-lbl", t.pricing.monthly);
  
  const yearlyHtml = activeLang === "en" 
    ? `Yearly <span class="discount-badge" style="background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(255, 255, 255, 0.2); color: #0f3562; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; margin-left: 6px; display: inline-block;">Save up to ${middleDiscount}%</span>`
    : `Anual <span class="discount-badge" style="background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(255, 255, 255, 0.2); color: #0f3562; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; margin-left: 6px; display: inline-block;">Economize até ${middleDiscount}%</span>`;
  safeSetHtml("billing-yearly-lbl", yearlyHtml);

  // Dynamically populate pricing cards
  renderPricing(t.pricing.plans, t.pricing.perMonth, t.pricing.perYear, t.pricing.trialBtn);

  // Hydrate FAQ Header
  safeSetText("faq-title", t.faq.title);
  safeSetText("faq-subtitle", t.faq.subtitle);

  // Dynamically populate FAQs
  renderFAQs(t.faq.items);

  // Hydrate Partner Company Names
  safeSetText("partner-text-1", siteConfig.partner1Name || "Mercado Livre");
  safeSetText("partner-text-2", siteConfig.partner2Name || "Efi Bank");
  safeSetText("partner-text-3", siteConfig.partner3Name || "Mercado Pago");
  safeSetText("partner-text-4", siteConfig.partner4Name || "PagSeguro");

  // Hydrate Partner Logos
  const hydratePartnerLogo = (imgId, fallbackId, logoUrl) => {
    const img = document.getElementById(imgId);
    const fallback = document.getElementById(fallbackId);
    if (img && fallback) {
      if (logoUrl && logoUrl.trim() !== "") {
        img.src = logoUrl;
        img.style.display = "block";
        fallback.style.display = "none";
      } else {
        img.src = "";
        img.style.display = "none";
        fallback.style.display = "block";
      }
    }
  };
  hydratePartnerLogo("partner-logo-1", "fallback-logo-1", siteConfig.partner1Logo);
  hydratePartnerLogo("partner-logo-2", "fallback-logo-2", siteConfig.partner2Logo);
  hydratePartnerLogo("partner-logo-3", "fallback-logo-3", siteConfig.partner3Logo);
  hydratePartnerLogo("partner-logo-4", "fallback-logo-4", siteConfig.partner4Logo);

  // Hydrate Footer static content
  safeSetText("footer-tagline", t.footer.tagline);
  const rightsEl = document.getElementById("footer-rights");
  if (rightsEl) {
    rightsEl.textContent = `© ${new Date().getFullYear()} Gest'Omni. ${t.footer.rights}`;
  }
  // safeSetText("footer-admin-portal", t.footer.adminPortal);
  
  const demoLinkEl = document.getElementById("footer-link-demo");
  if (demoLinkEl) {
    demoLinkEl.setAttribute("href", siteConfig.demoLink);
    demoLinkEl.textContent = activeLang === "en" ? "Book a Demo" : "Agendar Demonstração";
  }
  const supportLink = document.getElementById("footer-link-support");
  if (supportLink) {
    supportLink.textContent = t.footer.supportText || (activeLang === "en" ? "Technical Support" : "Suporte Técnico");
    supportLink.setAttribute("href", siteConfig.footerLinks?.supportUrl || "#");
  }

  // Re-adjust active state for toggle labels
  const monthlyLbl = document.getElementById("billing-monthly-lbl");
  if (monthlyLbl) monthlyLbl.classList.toggle("active", !isYearlyBilling);
  const yearlyLbl = document.getElementById("billing-yearly-lbl");
  if (yearlyLbl) yearlyLbl.classList.toggle("active", isYearlyBilling);

  // Translate Partners Section Title
  const partnersTitle = document.getElementById("partners-title");
  if (partnersTitle) {
    partnersTitle.textContent = activeLang === "pt"
      ? "Empresas Integradas e Parceiras"
      : "Trusted by Leading Companies";
  }
}

/**
 * Renders the 9 features cards dynamically into the HTML container.
 */
function renderFeatures(featuresList) {
  const container = document.getElementById("features-container");
  if (!container) return;

  container.innerHTML = featuresList.map(item => {
    const iconSvg = FEATURE_ICONS[item.id] || FEATURE_ICONS.pos; // fallback icon
    return `
      <div class="feature-card" id="feature-${item.id}">
        <div class="feature-icon-wrapper">
          ${iconSvg}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="feature-badge">${item.badge}</span>
      </div>
    `;
  }).join("");
}

/**
 * Renders the Pricing Cards Grid based on billing cycle state.
 */
function renderPricing(plans, perMonthLabel, perYearLabel, trialBtnLabel) {
  const container = document.getElementById("pricing-container");
  if (!container) return;

  const useDatabasePlans = databasePlans && databasePlans.length > 0;
  const plansToRender = useDatabasePlans ? databasePlans : plans;

  const cardsHtml = plansToRender.map((plan, index) => {
    let priceValueBRL = 0;
    let originalUSD = 0;
    let isUsd = false;
    let checkoutLink = "";
    let planFeatures = [];
    let planDescription = "";
    let planPopular = false;
    let discountPercent = 20;
    let priceHtml = "";
    let subPriceHtml = "";

    if (useDatabasePlans) {
      isUsd = plan.currency === 'USD';
      let baseMonthlyPrice = Number(plan.price);
      
      // Real-time conversion from USD to BRL if needed
      if (isUsd) {
        originalUSD = baseMonthlyPrice;
        baseMonthlyPrice = baseMonthlyPrice * usdToBrlRate;
      }
      
      // Get discount percent (fallback to 20 if null or missing)
      discountPercent = plan.hasOwnProperty('yearly_discount_percent') && plan.yearly_discount_percent !== null && plan.yearly_discount_percent !== undefined ? Number(plan.yearly_discount_percent) : 20;

      // Calculate price with discount when in annual mode
      if (isYearlyBilling) {
        priceValueBRL = baseMonthlyPrice * (1 - discountPercent / 100);
      } else {
        priceValueBRL = baseMonthlyPrice;
      }
      
      // Dynamic context-aware Vercel checkout redirection
      const intervalParam = isYearlyBilling ? 'yearly' : 'monthly';
      checkoutLink = `https://gestomni-app.vercel.app/auth?signup=true&plan=${plan.id}&interval=${intervalParam}`;

      planFeatures = plan.features || [];
      planDescription = plan.description || "";
      planPopular = plan.is_popular === true || index === 1;
    } else {
      // Fallback/Static Plans Backup
      isUsd = false;
      const fullMonthly = plan.priceMonthly * 12;
      discountPercent = Math.round(((fullMonthly - plan.priceYearly) / fullMonthly) * 100);
      if (isNaN(discountPercent)) discountPercent = 20;

      priceValueBRL = isYearlyBilling ? plan.priceMonthly * (1 - discountPercent / 100) : plan.priceMonthly;
      checkoutLink = siteConfig.trialLink;
      planFeatures = plan.features || [];
      planDescription = plan.description || "";
      planPopular = plan.popular === true || index === 1;
    }

    const periodLabel = perMonthLabel;
    
    // Check popular badge highlighting
    const popularCardClass = planPopular ? "pricing-card popular" : "pricing-card";
    const popularBadgeHtml = planPopular ? `<span class="popular-badge">${activeLang === 'en' ? 'Most Popular' : 'Mais Popular'}</span>` : "";

    const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="pricing-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    const featuresListHtml = planFeatures.map(f => `<li>${checkIcon}<span>${f}</span></li>`).join("");

    const trialDays = plan.hasOwnProperty('trial_days') && plan.trial_days !== null ? plan.trial_days : 30;

    if (activeLang === "en") {
      let priceValueUSD = 0;
      let yearlyUSD = 0;
      
      if (useDatabasePlans) {
        if (isUsd) {
          priceValueUSD = isYearlyBilling ? (originalUSD * (1 - discountPercent / 100)).toFixed(2) : originalUSD.toFixed(2);
          yearlyUSD = (originalUSD * 12 * (1 - discountPercent / 100)).toFixed(2);
        } else {
          priceValueUSD = (priceValueBRL / usdToBrlRate).toFixed(2);
          yearlyUSD = ((priceValueBRL * 12) / usdToBrlRate).toFixed(2);
        }
      } else {
        priceValueUSD = isYearlyBilling 
          ? (plan.priceMonthly * (1 - discountPercent / 100) / usdToBrlRate).toFixed(2) 
          : (plan.priceMonthly / usdToBrlRate).toFixed(2);
        yearlyUSD = (plan.priceYearly / usdToBrlRate).toFixed(2);
      }

      priceHtml = `
        <div class="pricing-trial-badge">${trialDays} days</div>
        <div class="pricing-free-title">FREE</div>
        <div class="pricing-after-trial">After ${trialDays} days, $${priceValueUSD}/month</div>
      `;
      
      const formattedBRL = priceValueBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      subPriceHtml = `
        <div style="margin-top: 4px; font-size: 0.85rem; color: hsl(var(--text-muted)); font-weight: 500;">
          Equivalent: <strong>R$ ${formattedBRL}</strong> / month
        </div>
        ${isYearlyBilling ? `
          <small style="color: hsl(var(--secondary-hover)); font-weight: 600; display:block; margin-top: 4px;">$ ${yearlyUSD} billed annually</small>
          <div class="savings-tag" style="margin-top: 6px; display: inline-flex; align-items: center; background: hsl(var(--secondary) / 0.15); border: 1px solid hsl(var(--secondary) / 0.3); color: hsl(var(--secondary-hover)); font-size: 0.75rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">
            ${discountPercent}% savings applied on annual
          </div>
        ` : ""}
      `;
    } else {
      const formattedBRL = priceValueBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      priceHtml = `
        <div class="pricing-trial-badge">${trialDays} dias</div>
        <div class="pricing-free-title">GRÁTIS</div>
        <div class="pricing-after-trial">Após ${trialDays} dias, R$ ${formattedBRL}/mês</div>
      `;
      
      let yearlyBRLText = "";
      if (useDatabasePlans) {
        const baseMonthly = isUsd ? Number(plan.price) * usdToBrlRate : Number(plan.price);
        const yearlyTotal = baseMonthly * 12 * (1 - discountPercent / 100);
        const formattedYearly = yearlyTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        yearlyBRLText = isYearlyBilling ? `R$ ${formattedYearly} cobrado anualmente` : "";
      } else {
        const yearlyTotal = plan.priceMonthly * 12 * (1 - discountPercent / 100);
        const formattedYearly = yearlyTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        yearlyBRLText = isYearlyBilling ? `R$ ${formattedYearly} cobrado anualmente` : "";
      }
      
      subPriceHtml = `
        ${isUsd ? `<div style="margin-top: 4px; font-size: 0.75rem; color: hsl(var(--text-muted)); font-weight: 500;">💵 Original: $${Number(plan.price).toFixed(2)} USD (Conversão em tempo real)</div>` : ""}
        ${isYearlyBilling ? `
          <small style="color: hsl(var(--secondary-hover)); font-weight: 600; display:block; margin-top: 4px;">${yearlyBRLText}</small>
          <div class="savings-tag" style="margin-top: 6px; display: inline-flex; align-items: center; background: hsl(var(--secondary) / 0.15); border: 1px solid hsl(var(--secondary) / 0.3); color: hsl(var(--secondary-hover)); font-size: 0.75rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">
            Economia de ${discountPercent}% aplicada no anual
          </div>
        ` : ""}
      `;
    }

    const planButtonText = useDatabasePlans 
      ? (plan.trial_days > 0 ? (activeLang === 'en' ? `Start ${plan.trial_days}-Day Trial` : `Começar Teste de ${plan.trial_days} Dias`) : trialBtnLabel)
      : trialBtnLabel;

    return `
      <div class="${popularCardClass}">
        ${popularBadgeHtml}
        <div class="pricing-card-header">
          <h3 class="pricing-plan-name">${plan.name}</h3>
          <div class="pricing-price-container">
            ${priceHtml}
          </div>
          ${subPriceHtml}
          <p class="pricing-card-description" style="margin-top: 15px;">${planDescription}</p>
        </div>
        <div class="pricing-divider"></div>
        <ul class="pricing-features-list">
          ${featuresListHtml}
        </ul>
        <a href="${checkoutLink}" class="btn ${planPopular ? 'btn-primary' : 'btn-secondary'} trial-btn">${planButtonText}</a>
      </div>
    `;
  }).join("");

  let exchangeRateNoteHtml = "";
  if (activeLang === "en") {
    exchangeRateNoteHtml = `
      <div style="grid-column: 1 / -1; text-align: center; margin-top: 30px; font-size: 0.85rem; color: hsl(var(--text-muted)); font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: hsl(var(--secondary-hover));"></span>
        <span>Live Exchange Rate: <strong>1 USD = ${usdToBrlRate.toFixed(4)} BRL</strong> (AwesomeAPI Real-Time)</span>
      </div>
    `;
  } else {
    exchangeRateNoteHtml = `
      <div style="grid-column: 1 / -1; text-align: center; margin-top: 30px; font-size: 0.85rem; color: hsl(var(--text-muted)); font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: hsl(var(--secondary-hover));"></span>
        <span>Planos carregados dinamicamente via Supabase API. Cotação do dólar atualizada em tempo real.</span>
      </div>
    `;
  }

  container.innerHTML = cardsHtml + exchangeRateNoteHtml;
}

/**
 * Renders the interactive Accordion FAQs.
 */
function renderFAQs(items) {
  const container = document.getElementById("faq-container");
  if (!container) return;

  container.innerHTML = items.map((item, index) => {
    return `
      <div class="faq-item" id="faq-item-${index}">
        <button class="faq-question" onclick="toggleFaq(${index})">
          <span>${item.q}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Toggles FAQ accordion active state.
 */
window.toggleFaq = function(index) {
  const item = document.getElementById(`faq-item-${index}`);
  if (!item) return;

  // Toggle self
  const isActive = item.classList.contains("active");
  
  // Close all FAQs first for clean single-view accordion
  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
  
  if (!isActive) {
    item.classList.add("active");
  }
};

/**
 * Dynamic YouTube Link Parser to extract the 11-character video ID
 * Supports full watch URLs, share links (youtu.be), embeds, and raw IDs
 */
function extractYoutubeId(urlOrId) {
  if (!urlOrId) return "dQw4w9WgXcQ"; // Default fallback
  urlOrId = urlOrId.trim();
  
  // 1. If it's already a clean 11-character ID, return it
  if (urlOrId.length === 11 && !urlOrId.includes("/") && !urlOrId.includes("?")) {
    return urlOrId;
  }
  
  // 2. Try parsing using standard regex
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = urlOrId.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  
  // 3. Fallback manual splits for short share links
  if (urlOrId.includes("youtu.be/")) {
    const parts = urlOrId.split("youtu.be/");
    if (parts.length > 1) {
      const idPart = parts[1].split("?")[0].split("/")[0];
      if (idPart.length === 11) return idPart;
    }
  }
  
  // 4. Fallback manual splits for standard v= query parameters
  if (urlOrId.includes("v=")) {
    const parts = urlOrId.split("v=");
    if (parts.length > 1) {
      const idPart = parts[1].split("&")[0].split("#")[0];
      if (idPart.length === 11) return idPart;
    }
  }

  return urlOrId;
}

// --- YouTube API Video Loader ---
function loadYoutubeVideo() {
  const placeholder = document.getElementById("video-placeholder");
  const container = document.getElementById("player-container");
  if (!placeholder || !container) return;

  // Immediately expand the video section
  const videoSection = document.getElementById("video");
  if (videoSection) {
    videoSection.classList.add("video-expanded");
  }

  // Hide placeholder
  placeholder.style.display = "none";

  // Check if YT script is loaded
  if (window.YT && window.YT.Player) {
    createYtPlayer();
  } else {
    // Load YouTube Iframe API asynchronously
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Bind global YT ready function
    window.onYouTubeIframeAPIReady = () => {
      createYtPlayer();
    };
  }
}

function createYtPlayer() {
  const videoId = activeLang === "pt" ? siteConfig.youtubeIdPt : siteConfig.youtubeIdEn;
  const cleanId = extractYoutubeId(videoId);
  ytPlayer = new YT.Player("player-container", {
    videoId: cleanId,
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  const videoSection = document.getElementById("video");
  if (event.data === window.YT.PlayerState.PLAYING) {
    if (videoSection) {
      videoSection.classList.add("video-expanded");
    }
  } else if (event.data === window.YT.PlayerState.ENDED) {
    if (videoSection) {
      videoSection.classList.remove("video-expanded");
    }
    // Scroll down to the pricing/plans section
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// --- Event Listeners and Setup ---
function setupEventListeners() {
  // Language Switcher Action
  const langSwitcher = document.getElementById("lang-switcher");
  if (langSwitcher) {
    langSwitcher.addEventListener("click", () => {
      activeLang = activeLang === "en" ? "pt" : "en";
      localStorage.setItem("gestomni_lang", activeLang);
      langSwitcher.setAttribute("data-lang", activeLang);
      
      // Update options active class
      langSwitcher.querySelectorAll(".lang-option").forEach(opt => {
        opt.classList.toggle("active", opt.getAttribute("data-opt") === activeLang);
      });

      // Rerender page texts
      hydrateDOM();
      
      // If admin editing language matches, sync the admin dropdown select too
      if (isAdminAuthenticated) {
        document.getElementById("edit-lang-select").value = activeLang;
        loadAdminFormFields();
      }
    });
  }

  // Mobile Hamburger Menu Action
  const menuToggle = document.getElementById("menu-toggle");
  const headerNav = document.getElementById("header-nav");
  if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      headerNav.classList.toggle("open");
    });
    
    headerNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        headerNav.classList.remove("open");
      });
    });
  }

  // Monthly / Annual Pricing Toggle
  const pricingSwitch = document.getElementById("pricing-switch");
  if (pricingSwitch) {
    pricingSwitch.addEventListener("click", () => {
      isYearlyBilling = !isYearlyBilling;
      pricingSwitch.classList.toggle("yearly", isYearlyBilling);
      
      const t = siteConfig[activeLang];
      renderPricing(t.pricing.plans, t.pricing.perMonth, t.pricing.perYear, t.pricing.trialBtn);
      
      const monthlyLbl = document.getElementById("billing-monthly-lbl");
      if (monthlyLbl) monthlyLbl.classList.toggle("active", !isYearlyBilling);
      const yearlyLbl = document.getElementById("billing-yearly-lbl");
      if (yearlyLbl) yearlyLbl.classList.toggle("active", isYearlyBilling);
    });
  }

  // Bind specific labels to trigger toggle too
  const monthlyLbl = document.getElementById("billing-monthly-lbl");
  if (monthlyLbl) {
    monthlyLbl.addEventListener("click", () => {
      if (isYearlyBilling && pricingSwitch) pricingSwitch.click();
    });
  }
  const yearlyLbl = document.getElementById("billing-yearly-lbl");
  if (yearlyLbl) {
    yearlyLbl.addEventListener("click", () => {
      if (!isYearlyBilling && pricingSwitch) pricingSwitch.click();
    });
  }

  // Video Click Trigger
  const videoPlaceholder = document.getElementById("video-placeholder");
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener("click", loadYoutubeVideo);
  }

  // Admin Access Portal Open Triggers
  const adminTrigger = document.getElementById("admin-access-trigger");
  if (adminTrigger) {
    adminTrigger.addEventListener("click", openAdminDrawer);
  }

  // Hotkey support Ctrl+Alt+A to open Admin Panel
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      openAdminDrawer();
    }
  });

  // Close Admin Panel Actions
  const adminClose = document.getElementById("admin-close");
  if (adminClose) adminClose.addEventListener("click", closeAdminDrawer);
  const adminBackdrop = document.getElementById("admin-backdrop");
  if (adminBackdrop) adminBackdrop.addEventListener("click", closeAdminDrawer);

  // Authenticate Admin Form
  const adminLoginBtn = document.getElementById("admin-login-btn");
  if (adminLoginBtn) adminLoginBtn.addEventListener("click", handleAdminLogin);
  const adminPass = document.getElementById("admin-pass");
  if (adminPass) {
    adminPass.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleAdminLogin();
    });
  }

  // Admin Drawer Tab Switching
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      const targetPane = document.getElementById(btn.getAttribute("data-tab"));
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Dynamic Live Admin Forms Input Listening (Saves immediately to local storage on change!)
  setupAdminFormInputListeners();

  // Admin Save Button Action
  const adminSaveBtn = document.getElementById("admin-save-btn");
  if (adminSaveBtn) adminSaveBtn.addEventListener("click", saveConfigurationLocally);

  // Admin Export / Reset Buttons Actions
  const adminDownloadBtn = document.getElementById("admin-download-btn");
  if (adminDownloadBtn) adminDownloadBtn.addEventListener("click", downloadConfiguration);
  const adminResetBtn = document.getElementById("admin-reset-btn");
  if (adminResetBtn) adminResetBtn.addEventListener("click", resetConfigurationToDefaults);

  // Copy SQL Action
  const btnCopySql = document.getElementById("btn-copy-sql");
  if (btnCopySql) {
    btnCopySql.addEventListener("click", () => {
      const sqlText = document.getElementById("sql-script-box").value;
      navigator.clipboard.writeText(sqlText).then(() => {
        const originalText = btnCopySql.innerHTML;
        btnCopySql.innerHTML = activeLang === "pt" 
          ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Copiado!`
          : `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
        btnCopySql.style.backgroundColor = "hsl(142, 70%, 40%)";
        setTimeout(() => {
          btnCopySql.innerHTML = originalText;
          btnCopySql.style.backgroundColor = "";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text:", err);
      });
    });
  }

  // Sync edits language select dropdown change
  const editLangSelect = document.getElementById("edit-lang-select");
  if (editLangSelect) {
    editLangSelect.addEventListener("change", (e) => {
      // Update local config form view
      loadAdminFormFields();
    });
  }

  // Initialize carousel slider, solution tabs and admin image controls
  initHeroSlider();
  initTabs();
  setupAdminImageListeners();
}

// --- Admin CMS Functionality ---

function openAdminDrawer() {
  document.getElementById("admin-drawer").classList.add("open");
  document.getElementById("admin-backdrop").classList.add("open");
  document.getElementById("admin-pass").focus();
}

function closeAdminDrawer() {
  document.getElementById("admin-drawer").classList.remove("open");
  document.getElementById("admin-backdrop").classList.remove("open");
}

function handleAdminLogin() {
  const passInput = document.getElementById("admin-pass");
  const errorMsg = document.getElementById("login-error-msg");
  
  if (passInput.value === siteConfig.adminPassword) {
    // Access Granted
    isAdminAuthenticated = true;
    errorMsg.style.display = "none";
    passInput.value = "";
    
    // Hide login, show editor forms
    document.getElementById("admin-login-view").style.display = "none";
    document.getElementById("admin-editor-view").style.display = "block";
    document.getElementById("admin-drawer-footer").style.display = "block";
    
    // Sync language selection dropdown to active language
    document.getElementById("edit-lang-select").value = activeLang;

    // Load active settings into forms
    loadAdminFormFields();
  } else {
    // Denied
    errorMsg.style.display = "block";
    passInput.focus();
  }
}

/**
 * Loads current in-memory configurations directly into form inputs.
 */
function loadAdminFormFields() {
  const editLang = document.getElementById("edit-lang-select").value;
  const t = siteConfig[editLang];

  // 1. General Tab
  document.getElementById("input-youtube-pt").value = siteConfig.youtubeIdPt || "";
  document.getElementById("input-youtube-en").value = siteConfig.youtubeIdEn || "";
  document.getElementById("input-live-rate").value = `1 USD = ${usdToBrlRate.toFixed(4)} BRL`;
  document.getElementById("input-ga-id").value = siteConfig.googleAnalyticsId || "";
  document.getElementById("input-trial-link").value = siteConfig.trialLink;
  document.getElementById("input-demo-link").value = siteConfig.demoLink;
  document.getElementById("input-admin-password").value = siteConfig.adminPassword;

  // Partner Names
  const partner1Input = document.getElementById("input-partner-1");
  if (partner1Input) partner1Input.value = siteConfig.partner1Name || "Mercado Livre";
  const partner2Input = document.getElementById("input-partner-2");
  if (partner2Input) partner2Input.value = siteConfig.partner2Name || "Efi Bank";
  const partner3Input = document.getElementById("input-partner-3");
  if (partner3Input) partner3Input.value = siteConfig.partner3Name || "Mercado Pago";
  const partner4Input = document.getElementById("input-partner-4");
  if (partner4Input) partner4Input.value = siteConfig.partner4Name || "PagSeguro";

  // Partner Logos Previews
  const p1Preview = document.getElementById("preview-partner1Logo");
  if (p1Preview) p1Preview.src = siteConfig.partner1Logo || "";
  const p2Preview = document.getElementById("preview-partner2Logo");
  if (p2Preview) p2Preview.src = siteConfig.partner2Logo || "";
  const p3Preview = document.getElementById("preview-partner3Logo");
  if (p3Preview) p3Preview.src = siteConfig.partner3Logo || "";
  const p4Preview = document.getElementById("preview-partner4Logo");
  if (p4Preview) p4Preview.src = siteConfig.partner4Logo || "";

  // 2. Hero Tab
  document.getElementById("input-hero-badge").value = t.hero.badge;
  document.getElementById("input-hero-title").value = t.hero.title;
  document.getElementById("input-hero-subtitle").value = t.hero.subtitle;
  document.getElementById("input-hero-cta-start").value = t.hero.ctaStart;
  document.getElementById("input-hero-cta-watch").value = t.hero.ctaWatch;

  // 3. Mission Tab
  document.getElementById("input-mission-badge").value = t.mission.badge;
  document.getElementById("input-mission-title").value = t.mission.title;
  document.getElementById("input-mission-desc1").value = t.mission.description1;
  document.getElementById("input-mission-desc2").value = t.mission.description2;
  
  document.getElementById("input-stat1-num").value = t.mission.stat1Number;
  document.getElementById("input-stat1-lbl").value = t.mission.stat1Text;
  document.getElementById("input-stat2-num").value = t.mission.stat2Number;
  document.getElementById("input-stat2-lbl").value = t.mission.stat2Text;
  document.getElementById("input-stat3-num").value = t.mission.stat3Number;
  document.getElementById("input-stat3-lbl").value = t.mission.stat3Text;

  // 4. Pricing Tab
  document.getElementById("input-pricing-title").value = t.pricing.title;
  document.getElementById("input-pricing-subtitle").value = t.pricing.subtitle;
  document.getElementById("input-pricing-monthly-lbl").value = t.pricing.monthly;
  document.getElementById("input-pricing-yearly-lbl").value = t.pricing.yearly;
  document.getElementById("input-pricing-trial-btn").value = t.pricing.trialBtn;
  document.getElementById("input-supabase-url").value = siteConfig.supabaseUrl || "";
  document.getElementById("input-supabase-anon-key").value = siteConfig.supabaseAnonKey || "";

  // Pricing plans inputs side-by-side
  const plansContainer = document.getElementById("admin-plans-prices-container");
  plansContainer.innerHTML = t.pricing.plans.map((plan, i) => `
    <div class="form-group" style="border: 1px solid hsl(var(--border)); padding: 12px; border-radius: 6px; margin-bottom: 12px;">
      <h6 style="color: hsl(var(--primary-hover)); font-size: 0.9rem; margin-bottom: 8px;">Plan: ${plan.name}</h6>
      <div style="display: flex; gap: 10px;">
        <div style="flex: 1;">
          <label style="font-size: 0.75rem;">Price Monthly (R$)</label>
          <input type="number" class="plan-price-monthly-input" data-index="${i}" value="${plan.priceMonthly}">
        </div>
        <div style="flex: 1;">
          <label style="font-size: 0.75rem;">Price Yearly (R$)</label>
          <input type="number" class="plan-price-yearly-input" data-index="${i}" value="${plan.priceYearly}">
        </div>
      </div>
    </div>
  `).join("");

  // Re-bind dynamically rendered inputs listeners
  plansContainer.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("input", savePlanPriceEdits);
  });

  // 5. FAQ Tab
  document.getElementById("input-faq-title").value = t.faq.title;
  document.getElementById("input-faq-subtitle").value = t.faq.subtitle;

  const faqsContainer = document.getElementById("admin-faqs-container");
  faqsContainer.innerHTML = t.faq.items.map((item, i) => `
    <div style="border: 1px solid hsl(var(--border)); padding: 12px; border-radius: 6px; margin-bottom: 12px;">
      <div class="form-group" style="margin-bottom: 10px;">
        <label style="font-size: 0.75rem;">Q${i+1}: Question</label>
        <input type="text" class="faq-q-input" data-index="${i}" value="${item.q}">
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label style="font-size: 0.75rem;">A${i+1}: Answer Text</label>
        <textarea class="faq-a-input" data-index="${i}" style="min-height: 80px;">${item.a}</textarea>
      </div>
    </div>
  `).join("");

  // Re-bind FAQ dynamically rendered inputs listeners
  faqsContainer.querySelectorAll("input, textarea").forEach(inp => {
    inp.addEventListener("input", saveFaqEdits);
  });

  // 6. Media / Images Tab
  const imageKeys = [
    "logoImgUrl",
    "heroBanner1Url",
    "heroBanner2Url",
    "heroBanner3Url",
    "videoCoverUrl",
    "cardFrontSegment1",
    "cardFrontSegment2",
    "cardFrontSegment3",
    "cardFrontSolution1",
    "cardFrontSolution2",
    "cardFrontSolution3"
  ];
  imageKeys.forEach(key => {
    const inputEl = document.getElementById(`input-img-${key}`);
    const previewEl = document.getElementById(`preview-${key}`);
    if (inputEl) {
      const val = siteConfig[key] || "";
      if (val.startsWith("data:image")) {
        inputEl.value = "";
        inputEl.placeholder = "Imagem carregada por arquivo local";
      } else {
        inputEl.value = val;
        inputEl.placeholder = "URL da imagem (http...)";
      }
    }
    if (previewEl) {
      previewEl.src = siteConfig[key] || DEFAULT_CONFIG[key];
    }
  });

  // 7. Footer Links Tab
  const safeGetFooterText = (lang, key) => siteConfig[lang]?.footer?.[key] || DEFAULT_CONFIG[lang]?.footer?.[key] || "";
  
  document.getElementById("input-footer-features-pt").value = safeGetFooterText("pt", "featuresText");
  document.getElementById("input-footer-features-en").value = safeGetFooterText("en", "featuresText");
  document.getElementById("input-footer-features-url").value = siteConfig.footerLinks?.featuresUrl || DEFAULT_CONFIG.footerLinks?.featuresUrl || "";

  document.getElementById("input-footer-mission-pt").value = safeGetFooterText("pt", "missionText");
  document.getElementById("input-footer-mission-en").value = safeGetFooterText("en", "missionText");
  document.getElementById("input-footer-mission-url").value = siteConfig.footerLinks?.missionUrl || DEFAULT_CONFIG.footerLinks?.missionUrl || "";

  document.getElementById("input-footer-pricing-pt").value = safeGetFooterText("pt", "pricingText");
  document.getElementById("input-footer-pricing-en").value = safeGetFooterText("en", "pricingText");
  document.getElementById("input-footer-pricing-url").value = siteConfig.footerLinks?.pricingUrl || DEFAULT_CONFIG.footerLinks?.pricingUrl || "";

  document.getElementById("input-footer-support-pt").value = safeGetFooterText("pt", "supportText");
  document.getElementById("input-footer-support-en").value = safeGetFooterText("en", "supportText");
  document.getElementById("input-footer-support-url").value = siteConfig.footerLinks?.supportUrl || DEFAULT_CONFIG.footerLinks?.supportUrl || "";
}

/**
 * Sets up change listeners on fields, applying edits to in-memory config and triggering real-time rendering updates!
 */
function setupAdminFormInputListeners() {
  const inputs = [
    // General
    { id: "input-youtube-pt", key: "youtubeIdPt", type: "global" },
    { id: "input-youtube-en", key: "youtubeIdEn", type: "global" },
    { id: "input-ga-id", key: "googleAnalyticsId", type: "global" },
    { id: "input-demo-link", key: "demoLink", type: "global" },
    { id: "input-admin-password", key: "adminPassword", type: "global" },
    { id: "input-supabase-url", key: "supabaseUrl", type: "global" },
    { id: "input-supabase-anon-key", key: "supabaseAnonKey", type: "global" },
    { id: "input-partner-1", key: "partner1Name", type: "global" },
    { id: "input-partner-2", key: "partner2Name", type: "global" },
    { id: "input-partner-3", key: "partner3Name", type: "global" },
    { id: "input-partner-4", key: "partner4Name", type: "global" },
    // Hero
    { id: "input-hero-badge", key: "hero.badge" },
    { id: "input-hero-title", key: "hero.title" },
    { id: "input-hero-subtitle", key: "hero.subtitle" },
    { id: "input-hero-cta-start", key: "hero.ctaStart" },
    { id: "input-hero-cta-watch", key: "hero.ctaWatch" },
    // Mission
    { id: "input-mission-badge", key: "mission.badge" },
    { id: "input-mission-title", key: "mission.title" },
    { id: "input-mission-desc1", key: "mission.description1" },
    { id: "input-mission-desc2", key: "mission.description2" },
    { id: "input-stat1-num", key: "mission.stat1Number" },
    { id: "input-stat1-lbl", key: "mission.stat1Text" },
    { id: "input-stat2-num", key: "mission.stat2Number" },
    { id: "input-stat2-lbl", key: "mission.stat2Text" },
    { id: "input-stat3-num", key: "mission.stat3Number" },
    { id: "input-stat3-lbl", key: "mission.stat3Text" },
    // Pricing headers
    { id: "input-pricing-title", key: "pricing.title" },
    { id: "input-pricing-subtitle", key: "pricing.subtitle" },
    { id: "input-pricing-monthly-lbl", key: "pricing.monthly" },
    { id: "input-pricing-yearly-lbl", key: "pricing.yearly" },
    { id: "input-pricing-trial-btn", key: "pricing.trialBtn" },
    // FAQ headers
    { id: "input-faq-title", key: "faq.title" },
    { id: "input-faq-subtitle", key: "faq.subtitle" }
  ];

  inputs.forEach(item => {
    const element = document.getElementById(item.id);
    if (!element) return;

    element.addEventListener("input", (e) => {
      const editLang = document.getElementById("edit-lang-select").value;
      const value = e.target.value;

      let cleanedValue = value;
      if (item.key === "youtubeIdPt" || item.key === "youtubeIdEn") {
        cleanedValue = extractYoutubeId(value);
      }

      if (item.type === "global") {
        siteConfig[item.key] = cleanedValue;
      } else {
        // Nested path e.g. "hero.title"
        const [section, subkey] = item.key.split(".");
        siteConfig[editLang][section][subkey] = cleanedValue;
      }

      // If Supabase Url/Key is modified, trigger immediate dynamic plan fetching
      if (item.key === "supabaseUrl" || item.key === "supabaseAnonKey") {
        fetchPlansFromSupabase().then(() => {
          if (editLang === activeLang) {
            hydrateDOM();
          }
        });
        return;
      }

      // 1. Live preview: in-memory state updated
      
      // 2. Hydrate only if editing matches display language
      if (editLang === activeLang) {
        hydrateDOM();
      }

      // If YouTube ID edited, reload player if active
      const activeVideoKey = activeLang === "pt" ? "youtubeIdPt" : "youtubeIdEn";
      if (item.key === activeVideoKey && ytPlayer) {
        try {
          ytPlayer.destroy();
          loadYoutubeVideo();
        } catch (_) {}
      }
    });
  });

  // Footer Links Text & URL bindings
  const footerInputBindings = [
    { id: "input-footer-features-pt", lang: "pt", key: "featuresText" },
    { id: "input-footer-features-en", lang: "en", key: "featuresText" },
    { id: "input-footer-mission-pt", lang: "pt", key: "missionText" },
    { id: "input-footer-mission-en", lang: "en", key: "missionText" },
    { id: "input-footer-pricing-pt", lang: "pt", key: "pricingText" },
    { id: "input-footer-pricing-en", lang: "en", key: "pricingText" },
    { id: "input-footer-support-pt", lang: "pt", key: "supportText" },
    { id: "input-footer-support-en", lang: "en", key: "supportText" },
  ];

  footerInputBindings.forEach(binding => {
    const el = document.getElementById(binding.id);
    if (el) {
      el.addEventListener("input", (e) => {
        if (!siteConfig[binding.lang]) siteConfig[binding.lang] = {};
        if (!siteConfig[binding.lang].footer) siteConfig[binding.lang].footer = {};
        siteConfig[binding.lang].footer[binding.key] = e.target.value;
        hydrateDOM();
      });
    }
  });

  const footerUrlBindings = [
    { id: "input-footer-features-url", key: "featuresUrl" },
    { id: "input-footer-mission-url", key: "missionUrl" },
    { id: "input-footer-pricing-url", key: "pricingUrl" },
    { id: "input-footer-support-url", key: "supportUrl" },
  ];

  footerUrlBindings.forEach(binding => {
    const el = document.getElementById(binding.id);
    if (el) {
      el.addEventListener("input", (e) => {
        if (!siteConfig.footerLinks) siteConfig.footerLinks = {};
        siteConfig.footerLinks[binding.key] = e.target.value;
        hydrateDOM();
      });
    }
  });
}

/**
 * Handles price updates for individual plans side-by-side in admin pricing tab.
 */
function savePlanPriceEdits(e) {
  const editLang = document.getElementById("edit-lang-select").value;
  const index = parseInt(e.target.getAttribute("data-index"));
  const val = parseInt(e.target.value) || 0;

  if (e.target.classList.contains("plan-price-monthly-input")) {
    siteConfig[editLang].pricing.plans[index].priceMonthly = val;
  } else {
    siteConfig[editLang].pricing.plans[index].priceYearly = val;
  }

  // Live re-render (in-memory)
  if (editLang === activeLang) {
    hydrateDOM();
  }
}

/**
 * Handles FAQ Q&A updates in admin FAQ tab.
 */
function saveFaqEdits(e) {
  const editLang = document.getElementById("edit-lang-select").value;
  const index = parseInt(e.target.getAttribute("data-index"));
  const val = e.target.value;

  if (e.target.classList.contains("faq-q-input")) {
    siteConfig[editLang].faq.items[index].q = val;
  } else {
    siteConfig[editLang].faq.items[index].a = val;
  }

  // Live re-render (in-memory)
  if (editLang === activeLang) {
    hydrateDOM();
  }
}

/**
 * Triggers browser download of updated config.json so the owner can push it to GitHub Pages.
 */
function downloadConfiguration() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteConfig, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "config.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Clears overrides in localStorage and reloads defaults.
 */
function resetConfigurationToDefaults() {
  if (confirm(activeLang === "en" 
    ? "Are you sure you want to reset all configurations to file defaults? Unsaved changes will be lost." 
    : "Tem certeza de que deseja restaurar as configurações padrão de fábrica? As alterações não publicadas serão perdidas.")) {
    
    localStorage.removeItem("gestomni_landing_config");
    window.location.reload();
  }
}

/**
 * Saves active configurations in memory to browser localStorage.
 * Displays a beautiful visual toast for confirmation.
 */
/**
 * Saves active configurations in memory to browser localStorage and attempts to publish to Supabase cloud.
 * Displays a beautiful visual toast for confirmation.
 */
async function saveConfigurationLocally() {
  try {
    // 1. Save to browser localStorage first (Local Cache)
    localStorage.setItem("gestomni_landing_config", JSON.stringify(siteConfig));
    
    let dbSaved = false;
    let dbErrorMessage = "";

    // 2. Attempt to save to Supabase Database
    const supabaseUrl = siteConfig.supabaseUrl || DEFAULT_CONFIG.supabaseUrl;
    const supabaseAnonKey = siteConfig.supabaseAnonKey || DEFAULT_CONFIG.supabaseAnonKey;
    
    if (supabaseUrl && supabaseAnonKey) {
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/landing_config?id=eq.1`, {
          method: "PATCH",
          headers: {
            "apikey": supabaseAnonKey,
            "Authorization": `Bearer ${supabaseAnonKey}`,
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({ config: siteConfig })
        });
        
        if (response.ok) {
          dbSaved = true;
          console.log("Configuration successfully published to Supabase database.");
        } else {
          dbErrorMessage = await response.text();
          console.warn("Supabase save returned status:", response.status, dbErrorMessage);
        }
      } catch (e) {
        dbErrorMessage = e.message;
        console.error("Failed to connect to Supabase for saving:", e);
      }
    }

    // 3. Play visual toast
    const toast = document.getElementById("admin-save-toast");
    const toastText = document.getElementById("admin-toast-text");
    
    if (toast && toastText) {
      if (dbSaved) {
        toastText.textContent = activeLang === "pt" 
          ? "Alterações publicadas com sucesso na nuvem (Supabase)!" 
          : "Changes published successfully to the cloud (Supabase)!";
      } else {
        toastText.textContent = activeLang === "pt" 
          ? "Salvo no navegador. Para nuvem, execute o script SQL da aba Geral no Supabase." 
          : "Saved in browser. For cloud, run the SQL script under General tab in Supabase.";
      }
        
      toast.style.display = "flex";
      
      // Flash save button based on status (green if database saved, yellow/orange if localStorage fallback)
      const saveBtn = document.getElementById("admin-save-btn");
      if (saveBtn) {
        const originalBg = saveBtn.style.backgroundColor;
        saveBtn.style.backgroundColor = dbSaved ? "hsl(142, 70%, 40%)" : "hsl(35, 90%, 45%)";
        setTimeout(() => {
          saveBtn.style.backgroundColor = "";
        }, 1000);
      }

      // Hide toast after 4.5 seconds
      setTimeout(() => {
        toast.style.display = "none";
      }, 4500);
    }
  } catch (error) {
    console.error("Failed to save config", error);
    alert(activeLang === "pt" ? "Erro ao salvar alterações." : "Error saving changes.");
  }
}

/**
 * Hero Carousel / Slider controller
 */
let currentSlide = 0;
let slideInterval = null;

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");
  }

  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");
  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => showSlide(idx));
  });

  // Auto-slide every 6 seconds
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 6000);

  // Stop auto-slide on hover
  const sliderRoot = document.querySelector(".hero-carousel-root");
  if (sliderRoot) {
    sliderRoot.addEventListener("mouseenter", () => clearInterval(slideInterval));
    sliderRoot.addEventListener("mouseleave", () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 6000);
    });
  }
}

/**
 * Segment and Solution tab switcher controller
 */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-nav-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-target");
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add("active");
    });
  });
}

/**
 * Binds live event listeners for customizable images in the Admin Panel
 */
function setupAdminImageListeners() {
  // URL Input elements
  document.querySelectorAll(".img-url-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const key = e.target.getAttribute("data-key");
      const val = e.target.value.trim();
      
      // Update config
      siteConfig[key] = val || DEFAULT_CONFIG[key];
      
      // Update preview thumbnail
      const previewEl = document.getElementById(`preview-${key}`);
      if (previewEl) {
        previewEl.src = siteConfig[key];
      }
      
      // Update page dynamic elements
      hydrateDOM();
    });
  });

  // File Uploader elements
  document.querySelectorAll(".img-file-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const key = e.target.getAttribute("data-key");
      const file = e.target.files[0];
      if (!file) return;

      document.body.style.cursor = "wait";

      compressAndSaveImage(file, key, async (base64Data) => {
        try {
          let newUrl = base64Data;
          const supabaseUrl = siteConfig.supabaseUrl || DEFAULT_CONFIG.supabaseUrl;
          const supabaseAnonKey = siteConfig.supabaseAnonKey || DEFAULT_CONFIG.supabaseAnonKey;
          
          if (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("your-supabase-project")) {
            try {
              const blob = dataURLtoBlob(base64Data);
              const ext = file.type === "image/png" ? "png" : "jpg";
              const filename = `${key}_${Date.now()}.${ext}`;
              
              // 1. Delete old image from Supabase Storage if it exists
              const oldUrl = siteConfig[key];
              if (oldUrl && oldUrl.startsWith("http")) {
                await deleteImageFromSupabase(oldUrl);
              }
              
              // 2. Upload new image
              newUrl = await uploadImageToSupabase(blob, filename);
              console.log("Uploaded successfully to Supabase Storage");
            } catch (supabaseErr) {
              console.warn("Failed to upload to Supabase, falling back to local Base64 storage:", supabaseErr);
              newUrl = base64Data;
            }
          }
          
          // Update config
          siteConfig[key] = newUrl;
          
          // Update preview thumbnail
          const previewEl = document.getElementById(`preview-${key}`);
          if (previewEl) {
            previewEl.src = newUrl;
          }
          
          // Clear text input and set placeholder
          const textInput = document.getElementById(`input-img-${key}`);
          if (textInput) {
            textInput.value = "";
            textInput.placeholder = newUrl.startsWith("data:") ? "Salvo localmente (Base64)" : "Salvo no Supabase Storage";
          }
          
          // Update page dynamic elements
          hydrateDOM();
          console.log(`Imagem salva com sucesso!`);
        } catch (err) {
          console.error("Erro ao processar imagem:", err);
          alert("Erro ao processar imagem.");
        } finally {
          document.body.style.cursor = "default";
        }
      });
    });
  });

  // Reset Individual Image buttons
  document.querySelectorAll(".btn-reset-image").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const key = e.target.getAttribute("data-key");
      
      // If there was an old image uploaded to Supabase, delete it!
      const oldUrl = siteConfig[key];
      if (oldUrl) {
        await deleteImageFromSupabase(oldUrl);
      }
      
      // Restore default fallback
      siteConfig[key] = DEFAULT_CONFIG[key];
      
      // Update inputs & preview
      const textInput = document.getElementById(`input-img-${key}`);
      if (textInput) {
        textInput.value = DEFAULT_CONFIG[key];
        textInput.placeholder = "URL da imagem (http...)";
      }
      
      const fileInput = document.getElementById(`file-img-${key}`);
      if (fileInput) {
        fileInput.value = ""; // clear selected file
      }
      
      const previewEl = document.getElementById(`preview-${key}`);
      if (previewEl) {
        previewEl.src = DEFAULT_CONFIG[key];
      }
      
      // Update page dynamic elements
      hydrateDOM();
    });
  });
}

/**
 * Converts a data URL (base64) back to a Blob object for binary uploads.
 */
function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while(n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

/**
 * Uploads a Blob directly to Supabase Storage 'landing-images' bucket using anonymous key.
 */
async function uploadImageToSupabase(blob, filename) {
  const supabaseUrl = siteConfig.supabaseUrl || DEFAULT_CONFIG.supabaseUrl;
  const supabaseAnonKey = siteConfig.supabaseAnonKey || DEFAULT_CONFIG.supabaseAnonKey;
  
  const uploadUrl = `${supabaseUrl}/storage/v1/object/landing-images/${filename}`;
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`,
      "Content-Type": blob.type
    },
    body: blob
  });
  
  if (!response.ok) {
    throw new Error(`Erro ao enviar imagem para o Supabase Storage: ${response.statusText}`);
  }
  
  return `${supabaseUrl}/storage/v1/object/public/landing-images/${filename}`;
}

/**
 * Deletes a file from Supabase Storage 'landing-images' bucket.
 */
async function deleteImageFromSupabase(imageUrl) {
  if (!imageUrl) return;
  const supabaseUrl = siteConfig.supabaseUrl || DEFAULT_CONFIG.supabaseUrl;
  const supabaseAnonKey = siteConfig.supabaseAnonKey || DEFAULT_CONFIG.supabaseAnonKey;
  
  // Verify that the URL belongs to our bucket
  const bucketPrefix = `${supabaseUrl}/storage/v1/object/public/landing-images/`;
  if (!imageUrl.startsWith(bucketPrefix)) return;
  
  const filename = imageUrl.replace(bucketPrefix, "");
  const deleteUrl = `${supabaseUrl}/storage/v1/object/landing-images/${filename}`;
  
  try {
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "apikey": supabaseAnonKey,
        "Authorization": `Bearer ${supabaseAnonKey}`
      }
    });
    if (response.ok) {
      console.log(`Imagem antiga ${filename} excluída com sucesso do Supabase Storage.`);
    } else {
      console.warn(`Falha ao excluir imagem antiga ${filename}:`, response.statusText);
    }
  } catch (e) {
    console.error("Erro ao conectar ao Supabase para excluir imagem antiga:", e);
  }
}

/**
 * Resizes and compresses uploaded images using HTML5 Canvas to prevent localStorage QuotaExceededError and keep builds lightweight
 */
function compressAndSaveImage(file, key, callback) {
  const reader = new FileReader();
  reader.onload = (event) => {
    // If it's a SVG or something that shouldn't be converted to JPEG, handle gracefully
    if (file.type === "image/svg+xml") {
      callback(event.target.result);
      return;
    }

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Max size for web images is 1920px width/height
      const max_size = 1920; 
      if (width > height) {
        if (width > max_size) {
          height *= max_size / width;
          width = max_size;
        }
      } else {
        if (height > max_size) {
          width *= max_size / height;
          height = max_size;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      // Convert to JPEG with 0.8 quality for an optimized file size
      const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
      callback(dataUrl);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

