export default function Footer() {
  return (
    <footer className="site-footer py-5 text-center">
      <div className="footer-logo mb-3">くちさびしい</div>
      <div className="d-flex justify-content-center gap-4 mb-3">
        {['Facebook','Instagram','Twitter','TikTok'].map(s => (
          <a key={s} href="#" className="footer-link" style={{ fontSize: '0.85rem', letterSpacing: 1 }}>{s}</a>
        ))}
      </div>
      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.9 }}>
        Mon – Fri: 11:00am – 10:00pm<br />
        Sat – Sun: 10:00am – 11:00pm
      </p>
      <p style={{ fontSize: '0.75rem', color: '#444', marginTop: 14 }}>
        © 2025 Kuchisabishii · Queens, New York · All rights reserved.
      </p>
    </footer>
  )
}
