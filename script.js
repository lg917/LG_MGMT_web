const translations = {
  en: {
    brandLine: "Independent AI advisory · Available for new engagements",
    clientsLabel: "Trusted by operators and founders at",
    contactKicker: "Get in touch",
    navOffer: "Offer",
    navProof: "Proof",
    navContact: "Contact",
    heroTitle: "Navigate AI with business clarity.",
    heroText:
      "AI is overwhelming. It is a train not to be missed. I help you navigate today's technology and turn it into practical solutions for your business problems.",
    cta: "Reach out for more info",
    secondaryCta: "See the offer",
    offerKicker: "Offer",
    offerTitle:
      "Custom AI solutions tailored to your industry, business, teams, and capabilities.",
    offerOneTitle: "Opportunity mapping",
    offerOneText:
      "Identify where AI creates measurable value, and where it creates distraction.",
    offerTwoTitle: "AI-first architecture",
    offerTwoText:
      "Design workflows, tools, and operating models that fit your current reality.",
    offerThreeTitle: "Execution support",
    offerThreeText:
      "Move from idea to adoption with practical prototypes, training, and governance.",
    proofKicker: "Proof",
    proofTitle: "Built on transformation experience and business judgment.",
    proofOne: "Expertise in digital transformation in PE-backed FMCG.",
    proofTwo: "Serial entrepreneur with strong business acumen.",
    proofThree: "AI-native and AI-first architecture mindset.",
    contactTitle:
      "Make AI useful for the problems already in front of you.",
    contactText:
      "Reach out to discuss your company, your constraints, and where AI can create practical leverage."
  },
  fr: {
    brandLine: "Conseil IA indépendant · Disponible pour de nouvelles missions",
    clientsLabel: "Recommandé par des opérateurs et fondateurs chez",
    contactKicker: "Prendre contact",
    navOffer: "Offre",
    navProof: "Preuves",
    navContact: "Contact",
    heroTitle: "Naviguer l'IA avec clarté business.",
    heroText:
      "L'IA est déroutante. C'est un train à ne pas manquer. Je vous aide à naviguer les technologies actuelles et à les transformer en solutions concrètes pour vos enjeux business.",
    cta: "Me contacter",
    secondaryCta: "Voir l'offre",
    offerKicker: "Offre",
    offerTitle:
      "Des solutions IA sur mesure, adaptées à votre industrie, votre business, vos équipes et vos capacités.",
    offerOneTitle: "Cartographie des opportunités",
    offerOneText:
      "Identifier où l'IA crée une valeur mesurable, et où elle risque de distraire.",
    offerTwoTitle: "Architecture AI-first",
    offerTwoText:
      "Concevoir des workflows, outils et modèles opérationnels adaptés à votre réalité.",
    offerThreeTitle: "Accompagnement d'exécution",
    offerThreeText:
      "Passer de l'idée à l'adoption avec des prototypes pratiques, de la formation et de la gouvernance.",
    proofKicker: "Preuves",
    proofTitle:
      "Une approche fondée sur l'expérience de transformation et le jugement business.",
    proofOne:
      "Expertise en transformation digitale dans le FMCG sous environnement private equity.",
    proofTwo: "Entrepreneur en série avec un fort sens business.",
    proofThree: "Approche AI-native et architecture AI-first.",
    contactTitle:
      "Rendre l'IA utile pour les problèmes déjà devant vous.",
    contactText:
      "Contactez-moi pour discuter de votre entreprise, vos contraintes, et des leviers pratiques que l'IA peut créer."
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
