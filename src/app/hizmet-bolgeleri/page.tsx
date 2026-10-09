import { MobileActionBar, SiteFooter, SiteHeader } from "@/app/site-chrome";
import type { Metadata } from "next";
import { anatolianDistricts, europeanDistricts } from "@/lib/districts";
import { business, telHref, whatsappHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "İstanbul 39 İlçe Mobil Lastik Hizmeti",
  description: "Kahraman Oto Lastik, İstanbul'un Anadolu ve Avrupa Yakası'ndaki 39 ilçede 7/24 mobil lastik desteği sunar. İlçenizi seçin, konumunuzu iletin.",
  alternates: { canonical: "/hizmet-bolgeleri" },
};

function DistrictList({ title, id, list }: { title: string; id: string; list: typeof anatolianDistricts }) {
  return <section className="district-group" id={id}>
    <div className="district-heading"><span>{title}</span><small>{list.length} İLÇE</small></div>
    <ul className="district-list">{list.map((district) => <li key={district.slug}><a href={`/hizmet-bolgeleri/${district.slug}`}>{district.name}<span>↗</span></a></li>)}</ul>
  </section>;
}

export default function ServiceAreasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "İstanbul mobil lastik servis bölgeleri",
    numberOfItems: 39,
    itemListElement: [...anatolianDistricts, ...europeanDistricts].map((district, index) => ({
      "@type": "ListItem", position: index + 1, name: district.name,
      url: `${business.url}/hizmet-bolgeleri/${district.slug}`,
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <SiteHeader/>
    <main className="area-page">
      <nav className="breadcrumbs" aria-label="Sayfa yolu"><a href="/">Ana sayfa</a><span>/</span><span>Hizmet bölgeleri</span></nav>
      <section className="area-hero"><div className="eyebrow"><span>İSTANBUL • ANADOLU + AVRUPA</span><i/></div><h1>İstanbul'un 39 ilçesinde<br/><em>mobil lastik desteği.</em></h1><p>Kahraman Oto Lastik; binek otomobil, SUV ve ağır vasıta araçlar için İstanbul genelinde 7/24 mobil lastik değişimi ve tamiri sağlar. İlçenizi seçin, bulunduğunuz noktayı arayın veya WhatsApp'tan gönderin.</p><div className="hero-actions"><a className="button button-dark" href={telHref()}>0543 894 55 60 <span>↗</span></a><a className="button button-line" href={whatsappHref()}>WhatsApp’tan konum gönder <span>↗</span></a></div></section>
      <div className="district-columns"><DistrictList title="Anadolu Yakası" id="anadolu-yakasi" list={anatolianDistricts}/><DistrictList title="Avrupa Yakası" id="avrupa-yakasi" list={europeanDistricts}/></div>
      <section className="area-help"><div><div className="eyebrow"><span>SERVİS TALEBİ</span><i/></div><h2>Aradığınızda<br/><em>şunları paylaşın.</em></h2></div><ol><li><b>Konum:</b> ilçe, mahalle, cadde veya WhatsApp konum pini.</li><li><b>Araç:</b> binek, SUV ya da ağır vasıta; marka/model bilgisi.</li><li><b>İhtiyaç:</b> lastik değişimi veya lastik tamiri; mümkünse lastik ebatı.</li></ol><p>Yönlendirme, tahmini varış ve ücret bilgisi konum ve işin kapsamına göre telefonda teyit edilir.</p></section>
    </main>
    <SiteFooter/>
    <a href={telHref()} className="mobile-call" aria-label="Kahraman Oto Lastik'i ara"><span>↗</span> Hemen ara • 7/24</a>
  </>;
}
