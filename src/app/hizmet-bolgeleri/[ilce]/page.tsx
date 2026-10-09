import { MobileActionBar, SiteFooter, SiteHeader } from "@/app/site-chrome";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business, displayPhone, telHref, whatsappHref } from "@/lib/business";
import { districts, getDistrict } from "@/lib/districts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return districts.map(({ slug }) => ({ ilce: slug }));
}

type PageProps = { params: Promise<{ ilce: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ilce: slug } = await params;
  const district = getDistrict(slug);
  if (!district) return {};
  return {
    title: `${district.name} 7/24 Mobil Lastikçi`,
    description: `${district.name}, İstanbul ${district.side} Yakası'nda 7/24 mobil lastik değişimi ve tamiri. Binek, SUV ve ağır vasıta desteği için Kahraman Oto Lastik'i arayın.`,
    alternates: { canonical: `/hizmet-bolgeleri/${district.slug}` },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: `${business.url}/hizmet-bolgeleri/${district.slug}`,
      title: `${district.name} Mobil Lastikçi | Kahraman Oto Lastik`,
      description: `${district.name} ilçesinde 7/24 mobil lastik hizmeti. Binek, SUV ve ağır vasıta için arayın.`,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { ilce: slug } = await params;
  const district = getDistrict(slug);
  if (!district) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${district.name} 7/24 mobil lastik hizmeti`,
    serviceType: ["Mobil lastik değişimi", "Mobil lastik tamiri", "Ağır vasıta lastik hizmeti", "Binek ve SUV lastik hizmeti"],
    provider: { "@type": "Organization", name: business.name, url: business.url, telephone: business.phone },
    areaServed: { "@type": "AdministrativeArea", name: `${district.name}, İstanbul, Türkiye` },
    description: `${district.name} ilçesinde binek, SUV ve ağır vasıta araçlar için 7/24 mobil lastik desteği.`,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <SiteHeader/>
    <main className="area-page district-page">
      <nav className="breadcrumbs" aria-label="Sayfa yolu"><a href="/">Ana sayfa</a><span>/</span><a href="/hizmet-bolgeleri">İstanbul hizmet bölgeleri</a><span>/</span><span>{district.name}</span></nav>
      <section className="area-hero"><div className="eyebrow"><span>{district.side.toLocaleUpperCase("tr-TR")} YAKASI • 7/24 MOBİL SERVİS</span><i/></div><h1>{district.name}<br/><em>7/24 mobil lastikçi.</em></h1><p>Kahraman Oto Lastik, İstanbul'un {district.name} ilçesinde binek otomobil, SUV ve ağır vasıta lastik ihtiyaçları için 7/24 mobil lastik değişimi ve tamiri sunar. {district.note}</p><div className="hero-actions"><a className="button button-dark" href={telHref()}><span className="button-icon">↗</span> Hemen ara • {displayPhone}</a><a className="button button-line" href={whatsappHref(`${district.name} ilçesinden yazıyorum. Konumum: `)}>WhatsApp’tan konum gönder <span>↗</span></a></div></section>
      <section className="district-detail"><div className="eyebrow"><span>{district.name.toLocaleUpperCase("tr-TR")} • İSTANBUL {district.side.toLocaleUpperCase("tr-TR")}</span><i/></div><h2>Konumunu ilet,<br/><em>servisi netleştirelim.</em></h2><p>Bulunduğunuz mahalleyi, caddeyi veya en yakın bilinen noktayı belirtin. Ağır vasıta için aracın bulunduğu noktaya erişimi; tüm araçlarda lastik ebatını ve sorunun türünü paylaşın. Uygunluk ve tahmini varış süresini yola çıkmadan önce telefonla teyit edelim.</p><div className="district-service-list"><span>7/24 mobil lastik değişimi</span><span>Mobil lastik tamiri</span><span>Binek • SUV • ağır vasıta</span></div><a className="text-link" href={telHref()}>{district.name} için hemen ara <b>↗</b></a></section>
      <section className="other-districts"><div><div className="eyebrow"><span>İSTANBUL GENELİ</span><i/></div><h2>Diğer hizmet<br/><em>bölgelerimiz.</em></h2></div><a className="button button-dark" href="/hizmet-bolgeleri">39 ilçenin tümünü gör <span>↗</span></a></section>
      <section className="district-faq"><h2>{district.name} mobil lastik hizmeti hakkında</h2><details open><summary>Bu ilçede 7/24 servis alabilir miyim?<b>+</b></summary><p>Evet. İstanbul'un tüm ilçelerine mobil hizmet veriyoruz. Konumunuzu ve araç türünüzü arayın; yönlendirme ve tahmini varış süresini teyit edelim.</p></details><details><summary>Hizmet hangi araçlara veriliyor?<b>+</b></summary><p>Binek otomobil, SUV ve ağır vasıta araçlar için mobil lastik değişimi ve tamiri hizmeti veriyoruz. Araç tipinizi ararken belirtin.</p></details></section>
    </main>
    <SiteFooter/>
    <MobileActionBar/>
  </>;
}
