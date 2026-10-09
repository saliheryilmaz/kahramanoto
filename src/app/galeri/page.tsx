import { MobileActionBar, SiteFooter, SiteHeader } from "@/app/site-chrome";
import Image from "next/image";
import type { Metadata } from "next";
import { business, telHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "Mobil Lastik Servisi Fotoğraf Galerisi",
  description: "Kahraman Oto Lastik'in binek, SUV ve ağır vasıta mobil lastik servisinden gerçek fotoğraflar. İstanbul'da 7/24 yerinde lastik desteği.",
  alternates: { canonical: "/galeri" },
  openGraph: { type: "website", locale: "tr_TR", url: `${business.url}/galeri`, title: "Mobil Lastik Servisi Fotoğrafları | Kahraman Oto Lastik", description: "Binek ve ağır vasıta mobil lastik hizmetlerimizden gerçek fotoğraflar." },
};
const items = [
  { name: "Binek araç lastik değişimi", type: "BİNEK • MOBİL SERVİS", image: "/images/gallery/servis/binek-lastik-degisimi.jpeg", alt: "Mobil servis alanında lastik değişimi yapılan binek otomobil" },
  { name: "İş makinesi lastik desteği", type: "İŞ MAKİNESİ", image: "/images/gallery/servis/is-makinesi-lastik.jpeg", alt: "Şantiyede lastik servisi için bekleyen iş makinesi ve mobil servis aracı" },
  { name: "Ağır vasıta lastik çalışması", type: "AĞIR VASITA", image: "/images/gallery/servis/agir-vasita-lastik-calismasi.jpeg", alt: "Ağır vasıta lastiklerinin sahada mobil servis ile değiştirilmesi" },
  { name: "Yol kenarında lastik servisi", type: "YERİNDE LASTİK DESTEĞİ", image: "/images/gallery/servis/yol-kenari-lastik-servisi.jpeg", alt: "Yol kenarında mobil ekipmanla ağır vasıta lastik hizmeti" },
  { name: "Gece mobil lastik hizmeti", type: "7/24 MOBİL SERVİS", image: "/images/gallery/servis/gece-mobil-lastik-servisi.jpeg", alt: "Gece saatlerinde mobil servis aracının yanında lastik değişimi yapılan otomobil" },
  { name: "Ağır vasıta jant ve lastik servisi", type: "JANT • AĞIR VASITA", image: "/images/gallery/servis/agir-vasita-jant-lastik.jpeg", alt: "Ağır vasıta lastik ve jantları üzerinde servis çalışması" },
  { name: "Gece tır lastik desteği", type: "7/24 AĞIR VASITA", image: "/images/gallery/servis/gece-tir-lastik-destegi.jpeg", alt: "Gece mobil servis ekibinin tırın lastiği üzerinde çalışması" },
];
export default function GalleryPage() {
 return <><SiteHeader/><main className="area-page gallery-page">
   <nav className="breadcrumbs" aria-label="Sayfa yolu"><a href="/">Ana sayfa</a><span>/</span><span>Fotoğraf galerisi</span></nav>
   <section className="area-hero"><div className="eyebrow"><span>MOBİL SERVİS • FOTOĞRAF GALERİSİ</span><i/></div><h1>Sahadan gerçek<br/><em>servis kareleri.</em></h1><p>Binek otomobilden ağır vasıtaya, mobil lastik servis çalışmalarımızdan fotoğraflar. İstanbul'da 7/24 hizmet için konumunuzu paylaşın, uygunluğu birlikte netleştirelim.</p></section>
   <section className="gallery-grid" aria-label="Kahraman Oto Lastik gerçek servis fotoğrafları">{items.map((item, index) => <figure className={`gallery-card ${index === 0 ? "gallery-card-featured" : ""}`} key={item.image}><div className="gallery-art"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 45vw" /></div><figcaption><div><small>{item.type}</small><h2>{item.name}</h2></div><span>{String(index + 1).padStart(2, "0")}</span></figcaption></figure>)}</section>
   <section className="gallery-note"><div><div className="eyebrow"><span>İSTANBUL • 7/24 MOBİL LASTİK</span><i/></div><h2>Yolda kaldıysan<br/><em>hemen ulaş.</em></h2></div><p>Binek, SUV ve ağır vasıta lastik desteği için bulunduğun konumu, araç türünü ve ihtiyacını telefonla veya WhatsApp üzerinden paylaş.</p><a className="button button-dark" href={telHref()}>7/24 ara <span>↗</span></a></section>
 </main><SiteFooter/><MobileActionBar/></>;
}
