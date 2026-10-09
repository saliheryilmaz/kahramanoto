const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kahramanotolastik.com.tr";

export const business = {
  name: "Kahraman Oto Lastik",
  url: siteUrl.replace(/\/$/, ""),
  phone: process.env.NEXT_PUBLIC_PHONE || "+90 543 894 55 60",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+90 543 894 55 60",
};

export const displayPhone = business.phone;

export function telHref() {
  return business.phone ? `tel:${business.phone.replace(/[^+\d]/g, "")}` : "#iletisim";
}

export function whatsappHref(message = "Merhaba, oto lastik hizmeti hakkında bilgi almak istiyorum.") {
  const number = business.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#iletisim";
}
