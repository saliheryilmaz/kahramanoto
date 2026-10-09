import { business, displayPhone, telHref, whatsappHref } from "@/lib/business";
import { districts } from "@/lib/districts";
import { services } from "@/lib/services";
import { MobileActionBar, SiteFooter, SiteHeader } from "@/app/site-chrome";
import Image from "next/image";

const faqs = [
  ["İstanbul'un hangi bölgelerine hizmet veriyorsunuz?", "İstanbul'un 39 ilçesinde mobil hizmet veriyoruz. Konumunuzu ve ihtiyacınızı iletin; bulunduğunuz noktaya servis yönlendirmesini teyit edelim."],
  ["Yolda kaldığımda mobil lastik hizmeti alabilir miyim?", "Bulunduğunuz konumu ve lastik sorununuzu telefonla ya da WhatsApp üzerinden iletin. Ekip ve bölge uygunluğunu teyit edelim."],
  ["Lastik değişimi için önceden aramam gerekir mi?", "Bekleme süresini azaltmak için gelmeden önce arayıp hizmet ve uygunluk bilgisi almanızı öneririz."],
  ["Hangi araçlara hizmet veriyorsunuz?", "Binek otomobil, SUV ve ağır vasıta araçlara hizmet veriyoruz. Aracınızı ve bulunduğunuz konumu ararken belirtmeniz yeterli."],
];

function PhoneIconInline() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3.5 4.8 4.6c-1.1.6-.9 2.6-.2 4.3 2 4.8 5.7 8.5 10.5 10.5 1.7.7 3.7.9 4.3-.2l1.1-2.2-4.2-2.6-1.8 1.8c-2.8-1.2-4.9-3.3-6.1-6.1l1.8-1.8L7 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>; }
function WhatsAppIconInline() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8"/><path d="M9 8.4c.2-.4.4-.4.7-.4h.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.3-.1.5.4.8 1 1.4 1.8 1.8.2.1.3.1.5-.1l.7-.8.6-.1 1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.5.5-1.2.6-1.9.4-1.1-.3-2.4-.9-3.7-2.2-1.1-1.1-1.8-2.4-2-3.4-.2-.6 0-1.1.3-1.4.3-.3.6-.5.9-.5Z" fill="currentColor"/></svg>; }
function LocationIconInline() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m21 3-7.2 18-3.7-7.1L3 10.2 21 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m10.1 13.9 4.6-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }

function TireArt() {
  return <div className="premium-art"><Image src="/images/kahraman-mobil-servis.jpg" alt="Kahraman Oto Lastik mobil servis aracı İstanbul'da 7/24 lastik hizmeti için hazır" width={864} height={1152} sizes="(max-width: 900px) 100vw, 48vw" fetchPriority="high" /></div>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kahraman Oto Lastik 7/24 Mobil Lastik Hizmeti",
    serviceType: ["Mobil lastik değişimi", "Mobil lastik tamiri", "Ağır vasıta lastik hizmeti", "Binek ve SUV lastik hizmeti"],
    provider: { "@type": "Organization", name: business.name, url: business.url, telephone: business.phone },
    areaServed: districts.map((district) => ({ "@type": "AdministrativeArea", name: `${district.name}, İstanbul` })),
    description: "İstanbul'un 39 ilçesinde binek, SUV ve ağır vasıta araçlara 7/24 mobil lastik hizmeti.",
    ...(business.phone ? { telephone: business.phone } : {}),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <SiteHeader/>
    <main>
      <section className="hero section-wrap" id="ust"><div className="hero-copy"><div className="eyebrow"><span>7/24 MOBİL OTO LASTİK</span><i/></div><h1>Yolda kalma.<br/><em>Yola devam et.</em></h1><p className="hero-lead">İstanbul'un 39 ilçesinde binek, SUV ve ağır vasıta araçlara 7/24 mobil lastik desteği. Konumunu söyle, ihtiyacına göre yola çıkalım.</p><div className="hero-actions hero-contact-actions"><a className="button button-call" href={telHref()}><span className="action-icon"><PhoneIconInline/></span><span>Hemen ara</span></a><a className="button button-whatsapp" href={whatsappHref("Merhaba, mobil lastik hizmeti için destek istiyorum.")}><span className="action-icon"><WhatsAppIconInline/></span><span>WhatsApp</span></a><a className="button button-location" href={whatsappHref("Merhaba, mobil lastik hizmeti için konumumu WhatsApp üzerinden paylaşmak istiyorum.")}><span className="action-icon"><LocationIconInline/></span><span>Konum gönder</span></a></div><div className="hero-proof"><span className="proof-icon">✓</span><span>Önce net bilgi.<br/><b>Sonra güvenli yol.</b></span><span className="proof-divider"/><span className="proof-city">İSTANBUL<br/><b>39 İLÇE • 7/24</b></span></div></div><TireArt/><div className="hero-index">01 <i/> 04</div></section>
      <section className="trust-strip"><span>İHTİYACA GÖRE DESTEK</span><i/><span>İKİ YAKADA HİZMET</span><i/><span>ÖNCEDEN BİLGİ ALIN</span><i/><span>KAHRAMAN OTO LASTİK</span></section>
      <section className="services-section section-wrap" id="hizmetler"><div className="section-heading"><div><div className="eyebrow"><span>NEYE İHTİYACIN VAR?</span><i/></div><h2>Lastik işini<br/><em>uzatmayalım.</em></h2></div><p>Her yol ve her lastik sorunu farklı. İhtiyacınızı kısaca anlatın; uygun hizmet ve bölge bilgisini netleştirelim.</p></div><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.slug}><div className="service-card-top"><span>0{index + 1} / 04</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.short}</p><a href={`/hizmetler/${service.slug}`} aria-label={`${service.title} detaylarını gör`}>Hizmet detayı <span>↗</span></a></article>)}</div></section>
      <section className="split-section" id="bolgeler"><div className="split-art"><div className="coverage-visual" aria-label="İstanbul'un Anadolu ve Avrupa yakasındaki 39 ilçede 7/24 mobil servis"><div className="coverage-topline"><span>7/24 MOBİL SERVİS</span><span className="coverage-city-tag"><i/> İSTANBUL</span></div><div className="coverage-city-name">İstanbul<span>TR · 34</span></div><div className="coverage-panels"><div className="coverage-panel"><span>AVRUPA YAKASI</span><strong>25</strong><small>ilçe</small></div><div className="coverage-separator"><i/><b>39</b><i/></div><div className="coverage-panel"><span>ANADOLU YAKASI</span><strong>14</strong><small>ilçe</small></div></div><div className="coverage-bottom"><span>İKİ YAKA</span><b>TEK MOBİL SERVİS</b></div></div></div><div className="split-copy"><div className="eyebrow"><span>İSTANBUL'UN 39 İLÇESİNDE</span><i/></div><h2>Şehrin neresindesin?<br/><em>Konumunu söyle.</em></h2><p>İstanbul'un Anadolu ve Avrupa Yakası'ndaki tüm ilçelere 7/24 mobil lastik servisi. İlçenizi seçin, hizmet kapsamı ve bölge bilgilerini inceleyin.</p><div className="region-pills"><a href="/hizmet-bolgeleri#anadolu-yakasi">ANADOLU YAKASI <b>14 İLÇE ↗</b></a><a href="/hizmet-bolgeleri#avrupa-yakasi">AVRUPA YAKASI <b>25 İLÇE ↗</b></a></div><a className="text-link" href="/hizmet-bolgeleri">39 ilçenin tümünü gör <span>↗</span></a></div></section>
      <section className="gallery-promo section-wrap"><div><div className="eyebrow"><span>MOBİL SERVİSİMİZDEN</span><i/></div><h2>Yoldaki hizmetimizden<br/><em>görsel örnekler.</em></h2><p>Mobil lastik servis akışımızı ve örnek görselleri galeride inceleyin.</p></div><a className="button button-dark" href="/galeri">Fotoğraf galerisi <span>↗</span></a></section><section className="process-section section-wrap"><div className="process-intro"><div className="eyebrow"><span>ÜÇ ADIMDA</span><i/></div><h2>Kolayca<br/><em>halledelim.</em></h2></div><div className="steps"><article><span>01</span><h3>Bizi ara</h3><p>Sorununuzu ve bulunduğunuz noktayı paylaşın.</p></article><article><span>02</span><h3>Bilgi al</h3><p>Hizmet uygunluğu ve sonraki adımı netleştirelim.</p></article><article><span>03</span><h3>Yola devam et</h3><p>Size uygun çözümle yolunuza güvenle dönün.</p></article></div></section>
      <section className="faq-section section-wrap" id="sorular"><div className="faq-intro"><div className="eyebrow"><span>MERAK EDİLENLER</span><i/></div><h2>Kafanda<br/><em>soru kalmasın.</em></h2><p>Aradığınız cevabı bulamadıysanız, doğrudan bize ulaşın.</p><a className="text-link" href={telHref()}>Bize ulaşın <span>↗</span></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} className="faq-item" open={i === 0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div></section>
      <section className="contact-section" id="iletisim"><div className="contact-spark">✳</div><div className="eyebrow"><span>7 GÜN 24 SAAT HİZMET</span><i/></div><h2>İhtiyacın varsa,<br/><em>buradayız.</em></h2><p>Arayın, konumunuzu söyleyin. Binek, SUV veya ağır vasıta fark etmez; 7/24 mobil lastik desteği için buradayız.</p><div className="hero-actions"><a className="button button-light" href={telHref()}><span className="button-icon">↗</span> Hemen ara</a><a className="button button-outline-light" href={whatsappHref()}>WhatsApp’tan yaz <span>↗</span></a></div><div className="contact-note">{displayPhone} • 7/24</div></section>
    </main>
    <SiteFooter/>
    <MobileActionBar/>
  </>;
}
