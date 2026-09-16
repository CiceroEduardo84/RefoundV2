import foodSVG from "../assets/food.svg";
import othersSVG from "../assets/others.svg";
import servicesSVG from "../assets/services.svg";
import transportSVG from "../assets/transport.svg";
import accomodationSVG from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSVG,
  },
  others: {
    name: "Outros",
    icon: othersSVG,
  },
  services: {
    name: "Serviços",
    icon: servicesSVG,
  },
  transport: {
    name: "Transporte",
    icon: transportSVG,
  },
  accomodation: {
    name: "Hospedagem",
    icon: accomodationSVG,
  },
};

export const CATEGORIES_KEY = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
