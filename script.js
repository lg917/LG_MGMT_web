const translations = {
  en: {
    brandLine: "Independent AI advisory · Available for new engagements",
    clientsLabel: "Trusted by operators and founders at",
    contactKicker: "Get in touch",
    navOffer: "Offer",
    navProof: "Proof",
    navContact: "Contact",
    heroTitle: "Turn AI into business outcomes.",
    heroText:
      "AI is loud. Most of it won't move your P&L. I help you find the parts that do — and ship them.",
    cta: "Start a conversation",
    secondaryCta: "See how it works",
    offerKicker: "Offer",
    offerTitle: "Three layers. Pick one, stack two, or run the full sequence.",
    offerLead:
      "A modular engagement model. Each layer ships value on its own — and compounds with the next.",
    offerOneTitle: "Map",
    offerOneTag: "Standalone or foundation",
    offerOneText: "Where AI moves your P&L — and where it won't.",
    offerTwoTitle: "Architect",
    offerTwoTag: "Builds on 01, or starts here",
    offerTwoText: "Workflows, tooling, and operating models built for AI leverage.",
    offerThreeTitle: "Ship",
    offerThreeTag: "Drop-in or end-to-end",
    offerThreeText: "From prototype to adoption: build, train teams, set guardrails.",
    proofKicker: "Proof",
    proofTitle: "Operator-built. Business-first.",
    proofOne: "Digital transformation lead, PE-backed FMCG.",
    proofTwo: "Serial entrepreneur. P&L instincts.",
    proofThree: "AI-native. AI-first by default.",
    contactTitle: "Make AI useful for what's already on your plate.",
    contactText:
      "A short call. Your context, your constraints — and where AI actually pays off."
  },
  fr: {
    brandLine: "Conseil IA indépendant · Disponible pour de nouvelles missions",
    clientsLabel: "Recommandé par des opérateurs et fondateurs chez",
    contactKicker: "Prendre contact",
    navOffer: "Offre",
    navProof: "Preuves",
    navContact: "Contact",
    heroTitle: "Transformer l'IA en résultats business.",
    heroText:
      "L'IA fait du bruit. L'essentiel ne bougera pas votre P&L. Je vous aide à identifier ce qui compte — et à le livrer.",
    cta: "Démarrer la conversation",
    secondaryCta: "Voir la méthode",
    offerKicker: "Offre",
    offerTitle: "Trois niveaux. Un seul, deux, ou la séquence complète.",
    offerLead:
      "Un modèle d'intervention modulaire. Chaque niveau livre de la valeur seul — et s'enrichit avec le suivant.",
    offerOneTitle: "Cartographier",
    offerOneTag: "Autonome ou fondation",
    offerOneText: "Là où l'IA bouge votre P&L — et là où elle ne le fera pas.",
    offerTwoTitle: "Architecturer",
    offerTwoTag: "Suite du 01, ou point de départ",
    offerTwoText: "Workflows, outils et modèles opérationnels pensés pour l'IA.",
    offerThreeTitle: "Livrer",
    offerThreeTag: "Ponctuel ou de bout en bout",
    offerThreeText: "Du prototype à l'adoption : construire, former, encadrer.",
    proofKicker: "Preuves",
    proofTitle: "Construit par un opérateur. Business d'abord.",
    proofOne: "Transformation digitale, FMCG sous private equity.",
    proofTwo: "Entrepreneur en série. Instinct P&L.",
    proofThree: "AI-native. AI-first par défaut.",
    contactTitle: "Rendre l'IA utile pour ce qui est déjà sur votre table.",
    contactText:
      "Un appel court. Votre contexte, vos contraintes — et là où l'IA paie vraiment."
  }
};

const buttons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const dictionary = translations[language];
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  document.documentElement.lang = language;
  localStorage.setItem("lg-mgmt-language", language);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("lg-mgmt-language") || "en");

const header = document.querySelector(".site-header");
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add("is-scrolled");
  else header.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
