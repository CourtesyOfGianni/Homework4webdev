import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-5" style={{ background: 'var(--light)' }}>
      <div className="container">
        <p className="section-label mb-1">Find us</p>
        <h2 className="section-title mb-4">Get in <span>Touch</span></h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="map-wrap mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1610000000000"
                width="100%" height="280" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy" title="Map"
              />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 2 }}>
              📍 123 Fusion Street, Queens, NY 11101<br />
              📞 (718) 555-0192<br />
              ✉️ hello@kuchisabishii.com
            </p>
          </div>

          <div className="col-md-6">
            <form className="contact-form d-flex flex-column gap-3" onSubmit={handleSubmit}>
              <input type="text"  placeholder="Your Name"    required />
              <input type="email" placeholder="Your Email"   required />
              <textarea rows={6}  placeholder="Your Message" required />
              <button type="submit" className="submit-btn">Send Message</button>
              {sent && <p style={{ color: 'var(--teal)', fontSize: '0.9rem' }}>✓ Message sent — ありがとう！</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
