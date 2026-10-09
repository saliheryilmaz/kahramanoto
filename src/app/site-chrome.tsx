import { displayPhone, telHref, whatsappHref } from "@/lib/business";
function Mark() { return <img src="/brand/kahraman-oto-lastik-logo.png" alt="Kahraman Oto Lastik" className="brand-logo" width="240" height="56" />; }
export function SiteHeader() {
  return <>
    <div className="announcement"><span className="pulse"/><span>İSTANBUL'DA 7/24 MOBİL LASTİK DESTEĞİ</span></div>
    <header className="site-header">
      <a href="/" className="brand" aria-label="Ana sayfa"><Mark/></a>
      <nav className="desktop-nav" aria-label="Ana menü"><a href="/hizmetler">Hizmetler</a><a href="/hizmet-bolgeleri">Hizmet bölgeleri</a><a href="/galeri">Galeri</a><a href="/iletisim">İletişim</a></nav>
      <details className="menu-details">
        <summary className="menu-trigger" aria-label="Menüyü aç veya kapat"><span/><span className="sr-only">Menü</span></summary>
        <nav className="menu-panel" aria-label="Site menüsü">
          <a href="/hizmetler">Hizmetler <span>↗</span></a><a href="/hizmet-bolgeleri">İstanbul hizmet bölgeleri <span>↗</span></a><a href="/galeri">Fotoğraf galerisi <span>↗</span></a><a href="/iletisim">İletişim <span>↗</span></a>
          <div className="menu-actions"><a className="menu-call" href={telHref()}><PhoneIcon/> Hemen ara</a><a className="menu-whatsapp" href={whatsappHref("Merhaba, mobil lastik hizmeti için destek istiyorum.")}><WhatsAppIcon/> WhatsApp</a></div>
        </nav>
      </details>
    </header>
  </>;
}
export function SiteFooter() { return <footer className="site-footer"><div className="footer-main"><a href="/" className="brand footer-brand"><Mark/></a><div className="footer-about"><span>İstanbul'un 39 ilçesinde 7/24 mobil lastik desteği.</span><a className="footer-phone" href={telHref()}><small>7/24 HEMEN ARA</small><b>{displayPhone}</b><span aria-hidden="true">↗</span></a></div><nav className="footer-links" aria-label="Alt menü"><a href="/hizmetler">Hizmetler</a><a href="/hizmet-bolgeleri">39 ilçe</a><a href="/galeri">Galeri</a><a href="/iletisim">İletişim</a></nav></div><div className="footer-bottom"><span className="copyright">© {new Date().getFullYear()} KAHRAMAN OTO LASTİK</span><a className="web-credit" href="https://www.instagram.com/meswebb/?hl=tr" target="_blank" rel="noopener noreferrer">Web tasarım: <b>MESWEB</b></a></div></footer>; }

function PhoneIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3.5 4.8 4.6c-1.1.6-.9 2.6-.2 4.3 2 4.8 5.7 8.5 10.5 10.5 1.7.7 3.7.9 4.3-.2l1.1-2.2-4.2-2.6-1.8 1.8c-2.8-1.2-4.9-3.3-6.1-6.1l1.8-1.8L7 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>; }
function WhatsAppIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 8.4c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.3-.1.5.4.8 1 1.4 1.8 1.8.2.1.3.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.5.5-1.2.6-1.9.4-1.1-.3-2.4-.9-3.7-2.2-1.1-1.1-1.8-2.4-2-3.4-.2-.6 0-1.1.3-1.4.3-.3.6-.5.9-.5Z" fill="currentColor"/></svg>; }
function LocationIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m21 3-7.2 18-3.7-7.1L3 10.2 21 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m10.1 13.9 4.6-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>; }
export function MobileActionBar() { return <nav className="mobile-action-bar" aria-label="Hızlı iletişim"><a className="mobile-action-call" href={telHref()} aria-label="Hemen ara"><PhoneIcon/><span>Ara</span></a><a className="mobile-action-whatsapp" href={whatsappHref("Merhaba, mobil lastik hizmeti için destek istiyorum.")} aria-label="WhatsApp ile yaz"><WhatsAppIcon/><span>WhatsApp</span></a><a className="mobile-action-location" href={whatsappHref("Merhaba, mobil lastik hizmeti için konumumu WhatsApp üzerinden paylaşmak istiyorum.")} aria-label="WhatsApp üzerinden konum gönder"><LocationIcon/><span>Konum</span></a></nav>; }
