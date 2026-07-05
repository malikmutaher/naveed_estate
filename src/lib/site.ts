export const SITE = {
  name: "Naveed Real Estate",
  phone: "0300-5015118",
  phoneIntl: "+923005015118",
  whatsapp: "923005015118",
  email: "info@naveedrealestate.pk",
  address:
    "5B Commercial, Block B, AWT Housing Scheme Phase 2, Lahore, Pakistan",
  hours: "Monday – Saturday · 9:00 AM – 7:00 PM",
  whatsappMessage:
    "Hello Naveed Real Estate, I would like to inquire about your real estate services.",
};

export const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
export const telLink = `tel:${SITE.phoneIntl}`;
