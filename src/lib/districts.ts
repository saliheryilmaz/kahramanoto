export type District = {
  name: string;
  slug: string;
  side: "Anadolu" | "Avrupa";
  note: string;
};

export const districts: District[] = [
  { name: "Adalar", slug: "adalar", side: "Anadolu", note: "Ada içindeki tam konumunuzu ve araca erişim durumunu ararken paylaşın; ekip yönlendirmesi buna göre netleşsin." },
  { name: "Arnavutköy", slug: "arnavutkoy", side: "Avrupa", note: "İlçenin geniş yüzölçümü nedeniyle konum pini veya en yakın ana yolu paylaşmanız yönlendirmeyi kolaylaştırır." },
  { name: "Ataşehir", slug: "atasehir", side: "Anadolu", note: "Site, cadde veya yakın kavşak bilgisini ekleyerek ekibin doğru noktaya ulaşmasına yardımcı olun." },
  { name: "Avcılar", slug: "avcilar", side: "Avrupa", note: "Sahil, merkez veya çevre yolu tarafında olduğunuzu belirtip konumunuzu WhatsApp'tan iletebilirsiniz." },
  { name: "Bağcılar", slug: "bagcilar", side: "Avrupa", note: "Yoğun cadde ve sokaklarda en yakın kavşak ya da işletme adını paylaşmanız doğru noktayı bulmayı hızlandırır." },
  { name: "Bahçelievler", slug: "bahcelievler", side: "Avrupa", note: "Mahalle ve cadde bilgisini, aracın binek, SUV veya ağır vasıta olduğunu belirterek iletin." },
  { name: "Bakırköy", slug: "bakirkoy", side: "Avrupa", note: "Sahil, merkez veya ana ulaşım yolu üzerindeki konumunuzu açıkça belirtin; servis uygunluğunu aramada teyit edelim." },
  { name: "Başakşehir", slug: "basaksehir", side: "Avrupa", note: "Mahalle, site girişi veya en yakın ana yol bilgisini paylaşın; geniş yerleşim alanlarında konum teyidi önemlidir." },
  { name: "Bayrampaşa", slug: "bayrampasa", side: "Avrupa", note: "Aracın bulunduğu caddeyi ve yakındaki bilinen noktayı paylaşın; yönlendirme bilgisini telefonda netleştirelim." },
  { name: "Beşiktaş", slug: "besiktas", side: "Avrupa", note: "Merkezde veya sahil hattında olduğunuzu ve aracın yanaşabileceği en yakın noktayı belirtin." },
  { name: "Beykoz", slug: "beykoz", side: "Anadolu", note: "Mahalle ve en yakın ana yol bilgisini paylaşın; kırsal veya orman çevresindeki konumlarda açık tarif faydalı olur." },
  { name: "Beylikdüzü", slug: "beylikduzu", side: "Avrupa", note: "Mahalle, site adı veya en yakın bağlantı yolunu ekleyin; servis noktası ve araç türünü birlikte teyit edelim." },
  { name: "Beyoğlu", slug: "beyoglu", side: "Avrupa", note: "Cadde, meydan veya aracın erişilebilir olduğu yakın noktayı belirtin; dar sokaklarda buluşma noktası gerekebilir." },
  { name: "Büyükçekmece", slug: "buyukcekmece", side: "Avrupa", note: "Sahil, merkez ya da dış mahallelerde olduğunuzu ve en yakın ana yolu paylaşın." },
  { name: "Çatalca", slug: "catalca", side: "Avrupa", note: "İlçe merkezi dışındaki noktalarda konum pini ve en yakın yerleşim bilgisini paylaşarak uygunluğu önceden teyit edin." },
  { name: "Çekmeköy", slug: "cekmekoy", side: "Anadolu", note: "Mahalle ve site/cadde girişini belirtin; konum bilgisini WhatsApp üzerinden paylaşmanız yönlendirmeyi kolaylaştırır." },
  { name: "Esenler", slug: "esenler", side: "Avrupa", note: "Cadde veya yakın kavşak bilgisini verin; yoğun saatlerde uygun buluşma noktasını telefonda belirleyelim." },
  { name: "Esenyurt", slug: "esenyurt", side: "Avrupa", note: "Mahalle ve site/ana cadde bilgisini ekleyin; ilçedeki geniş servis alanında kesin konum yönlendirme için önemlidir." },
  { name: "Eyüpsultan", slug: "eyupsultan", side: "Avrupa", note: "Merkez, Alibeyköy veya dış mahallelerde olduğunuzu belirterek konumunuzu paylaşın." },
  { name: "Fatih", slug: "fatih", side: "Avrupa", note: "Cadde, meydan veya erişilebilir bir yakın noktayı bildirin; tarihi yarımadadaki dar sokaklarda buluşma noktası gerekebilir." },
  { name: "Gaziosmanpaşa", slug: "gaziosmanpasa", side: "Avrupa", note: "Mahalle ve yakındaki ana cadde bilgisini verin; servis noktasını aramada birlikte netleştirelim." },
  { name: "Güngören", slug: "gungoren", side: "Avrupa", note: "Sokak adı ya da yakın kavşakla birlikte araç tipinizi paylaşın; ihtiyaca uygun ekip yönlendirilsin." },
  { name: "Kadıköy", slug: "kadikoy", side: "Anadolu", note: "Merkez, sahil veya mahalle içindeki konumunuzu ve aracın güvenli biçimde durduğu noktayı paylaşın." },
  { name: "Kağıthane", slug: "kagithane", side: "Avrupa", note: "Mahalle, cadde ve varsa kapalı otopark bilgilerini belirtin; aracın yanına erişim durumunu teyit edelim." },
  { name: "Kartal", slug: "kartal", side: "Anadolu", note: "Sahil, merkez veya ana ulaşım yolu üzerindeki konumunuzu belirterek servis talebi oluşturun." },
  { name: "Küçükçekmece", slug: "kucukcekmece", side: "Avrupa", note: "Göl çevresi, merkez ya da mahalle içindeki konumunuzu ve en yakın ana caddeyi paylaşın." },
  { name: "Maltepe", slug: "maltepe", side: "Anadolu", note: "Sahil hattı, merkez veya mahalle içindeki noktayı belirtin; konum pini doğru yönlendirmeye yardımcı olur." },
  { name: "Pendik", slug: "pendik", side: "Anadolu", note: "Merkez veya dış mahallelerde olduğunuzu, en yakın ana yolu ve aracın türünü ararken paylaşın." },
  { name: "Sancaktepe", slug: "sancaktepe", side: "Anadolu", note: "Mahalle, site girişi veya yakın ana yol bilgisini vererek mobil servis noktasını netleştirin." },
  { name: "Sarıyer", slug: "sariyer", side: "Avrupa", note: "Sahil, merkez veya kuzey mahallelerdeki tam konumunuzu ve yakın ana yolu bildirin." },
  { name: "Silivri", slug: "silivri", side: "Avrupa", note: "Merkez dışındaki konumlarda yerleşim adı ve konum piniyle servis uygunluğunu önceden sorun." },
  { name: "Şile", slug: "sile", side: "Anadolu", note: "Merkez dışındaki uzun mesafeli noktalarda açık konum ve en yakın yerleşim bilgisini paylaşarak yönlendirmeyi teyit edin." },
  { name: "Şişli", slug: "sisli", side: "Avrupa", note: "Cadde, mahalle ve kapalı otopark bilgilerini verin; aracın yanına erişimi aramada netleştirelim." },
  { name: "Sultanbeyli", slug: "sultanbeyli", side: "Anadolu", note: "Mahalle veya ana yol bilgisini paylaşın; binek, SUV ve ağır vasıta taleplerinde araç türünü belirtin." },
  { name: "Sultangazi", slug: "sultangazi", side: "Avrupa", note: "Mahalle, cadde veya yakın kavşak bilgisiyle konumu netleştirin; uygun servis yönlendirmesini teyit edelim." },
  { name: "Tuzla", slug: "tuzla", side: "Anadolu", note: "Merkez, sahil veya sanayi çevresinde olduğunuzu ve ağır vasıta için erişim koşullarını belirtin." },
  { name: "Ümraniye", slug: "umraniye", side: "Anadolu", note: "Mahalle, cadde ya da iş merkezi adını paylaşın; kapalı otoparktaki araçlarda giriş yüksekliğini de bildirin." },
  { name: "Üsküdar", slug: "uskudar", side: "Anadolu", note: "Merkez, sahil veya mahalle içindeki konumunuzu ve aracın erişilebilir olduğu noktayı paylaşın." },
  { name: "Zeytinburnu", slug: "zeytinburnu", side: "Avrupa", note: "Sahil, merkez veya ana cadde üzerindeki konumunuzu ve araç tipinizi ileterek servis isteyin." },
];

export const anatolianDistricts = districts.filter((district) => district.side === "Anadolu");
export const europeanDistricts = districts.filter((district) => district.side === "Avrupa");

export function getDistrict(slug: string) {
  return districts.find((district) => district.slug === slug);
}
