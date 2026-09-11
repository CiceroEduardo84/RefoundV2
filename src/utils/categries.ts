import foodSVG from "../assets/food.svg";
import othersSVG from "../assets/others.svg";
import servicesSVG from "../assets/services.svg";
import transportSVG from "../assets/transport.svg";
import accomodationSVG from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icone: foodSVG,
  },
  others: {
    name: "Outros",
    icone: othersSVG,
  },
  services: {
    name: "Serviços",
    icone: servicesSVG,
  },
  transport: {
    name: "Transporte",
    icone: transportSVG,
  },
  accomodation: {
    name: "Hospedagem",
    icone: accomodationSVG,
  },
};

export const CATEGORIES_KEY = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
