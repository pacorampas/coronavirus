var resources = {
  en: {
    index: {
      index_title: "You have been<br />infected<br />by coronavirus",
      index_subtitle: "If you don't belive it, just do the test...",
      index_quick_test: "<strong>QUICK TEST</strong><br />(less than a minute)",
      index_test:
        "<strong>ACCURATE TEST</strong><br />(less than a minute too)",
      index_disclaimer: "All of this is bullshit, don't care about it"
    },
    test: {
      test_title: "Fingerprint test",
      test_description:
        'Keep your finger over the fingerprint until the count down is over (<strong><span id="count-down"></span></strong>)',
      test_recommendation: "<i>Turn on sound for a better experience</i>"
    },
    result: {
      result_title: "You have<br />coronavirus",
      result_point_1: "Coronavirus doesn't have known cure (sad face)",
      result_point_2:
        "But don't stay at home! Go outside and infect your friends! (asshole face)",
      result_curse:
        "Run, do it, or I'll curse you with lack of sex and too much sons",
      result_share_action: "INFECT NOW!"
    },
    share: {
      share_title: "INFECT YOUR<br />FRIENDS"
    },
    cookies: {
      cookies_message_container:
        'We use cookies to check if this stupid idea, that is made just for fun, has sense and people share it with colleagues. So we have added google analytics. If you want further info, please visit: <a href="https://www.google.com/analytics/terms/">I want to know more</a>',
      cookies_button: "Understood"
    },
    shareMessage:
      "Hey yo! Remember Antrax? Well this shit's hitting stronger. Run, get some before the chinese get it all.",
    shareJoke:
      "This button doesn't work, but if you still using messenger, congrats! You're sooooo cool!"
  },
  es: {
    index: {
      index_title: "Has sido<br />infectado por<br />coronavirus",
      index_subtitle: "Si no te lo crees haz el test...",
      index_quick_test:
        "<strong>TEST RÁPIDO</strong><br />(menos de un minuto)",
      index_test:
        "<strong>TEST PRECISO</strong><br />(también menos de un minuto)",
      index_disclaimer: "Todo esto son absurdeces, tú ni caso"
    },
    test: {
      test_title: "Test de huella<br />dactilar",
      test_description:
        'Manten el dedo sobre la huella hasta que acabe la cuenta atrás (<strong><span id="count-down"></span></strong>)',
      test_recommendation:
        "<i>Activa el sonido para una experiencia completa</i>"
    },
    result: {
      result_title: "Tienes<br />coronavirus",
      result_point_1: "El coronavirus no tiene cura (carita triste)",
      result_point_2:
        "¡Pero no te quedes en casa! ¡Puedes infectar a todos tus amigos! (carita de hijo de puta)",
      result_curse:
        "Corre, hazlo, o te deseo una vida con poco sexo y muchos hijos",
      result_share_action: "¡INFECTA AHORA!"
    },
    share: {
      share_title: "INFECTA A TUS<br />AMIGOS"
    },
    cookies: {
      cookies_message_container:
        'Usamos cookies para saber si esta idea chorra y que no pretende ofender a nadie funciona y la gente lo comparte. Por eso hemos añadido google analytics. Si quieres saber más visita: <a href="https://www.google.com/analytics/terms/">quiero saber más</a>',
      cookies_button: "Entendido"
    },
    shareMessage:
      "Loc@, te acuerdas del ántrax? Esta mierda pega más, corre a pillar un poco que se lo están quedando todo los chinos!",
    shareJoke:
      "Este botón no funciona, pero si sigues usando messenger mis felicitaciones. Tu molas. :)"
  }
};

var supported = ["es", "en"];

function getLocale() {
  let language =
    navigator.languages[0] ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.systemLanguage ||
    navigator.userLanguage ||
    "en";

  if (language.indexOf("-") !== -1) {
    language = language.substr(0, language.indexOf("-"));
  }

  return supported.indexOf(language) !== -1 ? language : "en";
}

function i18n(page) {
  var locale = getLocale();
  var strings = resources[locale][page];

  Object.keys(strings).forEach(id => {
    var element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.innerHTML = strings[id];
  });

  var cookies = resources[locale].cookies;
  Object.keys(cookies).forEach(id => {
    var element = document.getElementById(id);
    element.innerHTML = cookies[id];
  });
}

function translate(key) {
  var locale = getLocale();
  var strings = resources[locale];
  return strings[key];
}
