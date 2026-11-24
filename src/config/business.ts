export const business = {
  name: "Pankaj GFX",
  phoneDisplay: "+91 88059 20106",
  phone: "918805920106",
  email: "pnkjmeshram@gmail.com",
  address:
    "Dr. Ambedkar Chowk, Gidhadi, Tah. Goregaon, Dist. Gondia, Maharashtra 441801",
};

export function whatsappUrl(message = "Hello Pankaj GFX, I would like to know about your services.") {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}
