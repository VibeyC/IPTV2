/* ------------------------------------------------------------------
   CENTRAL WHATSAPP CONFIGURATION
   Change the number and/or the message templates HERE ONLY.
   Every WhatsApp button on every page reads from this file.
------------------------------------------------------------------ */
window.WHATSAPP_CONFIG = {
  // International format, digits only (no +, no spaces)
  number: "447478036804",

  // Default pre-filled message per language
  messages: {
    en: "Hello IPTV Web! I'd like to know more about your IPTV subscription.",
    de: "Hallo IPTV Web! Ich möchte mehr über Ihr IPTV-Abonnement erfahren.",
    fr: "Bonjour IPTV Web ! Je souhaite en savoir plus sur votre abonnement IPTV.",
    es: "¡Hola IPTV Web! Me gustaría saber más sobre su suscripción IPTV.",
    it: "Ciao IPTV Web! Vorrei saperne di più sul vostro abbonamento IPTV."
  },

  // Message used when a specific plan button is clicked. {plan} and {price} are replaced.
  planMessages: {
    en: "Hello IPTV Web! I'd like to order the {plan} plan ({price}).",
    de: "Hallo IPTV Web! Ich möchte das {plan}-Paket ({price}) bestellen.",
    fr: "Bonjour IPTV Web ! Je souhaite commander l'offre {plan} ({price}).",
    es: "¡Hola IPTV Web! Quiero contratar el plan {plan} ({price}).",
    it: "Ciao IPTV Web! Vorrei acquistare il piano {plan} ({price})."
  },

  // Message used by the free-trial buttons
  trialMessages: {
    en: "Hello IPTV Web! I'd like to start my free 24-hour trial.",
    de: "Hallo IPTV Web! Ich möchte meinen kostenlosen 24-Stunden-Test starten.",
    fr: "Bonjour IPTV Web ! Je souhaite démarrer mon essai gratuit de 24 heures.",
    es: "¡Hola IPTV Web! Quiero empezar mi prueba gratuita de 24 horas.",
    it: "Ciao IPTV Web! Vorrei iniziare la mia prova gratuita di 24 ore."
  }
};

/* Helper used by the pages — do not edit below unless you know what you're doing. */
window.waLink = function (lang, kind, vars) {
  var c = window.WHATSAPP_CONFIG;
  var l = (lang && c.messages[lang]) ? lang : "en";
  var tpl;
  if (kind === "plan") tpl = c.planMessages[l];
  else if (kind === "trial") tpl = c.trialMessages[l];
  else tpl = c.messages[l];
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      tpl = tpl.split("{" + k + "}").join(vars[k]);
    });
  }
  return "https://wa.me/" + c.number + "?text=" + encodeURIComponent(tpl);
};
