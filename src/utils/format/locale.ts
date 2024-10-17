export const locale = navigator.language;

const Locale = {
  en: {
    defaultCurrency: "USD",
    dateFormat: "MMMM D, YYYY",
    dateTimeFormat: "MMMM D, YYYY h:mm",
  },
  es: {
    defaultCurrency: "MXN",
    dateFormat: "d MMMM YYYY",
    dateTimeFormat: "d MMMM YYYY h:mm",
  },
};

export const getLocale = (value = locale) => {
  switch (value) {
    case "en":
      return Locale["en"];
    case "es":
      return Locale["es"];
    default:
      return Locale["en"];
  }
};
