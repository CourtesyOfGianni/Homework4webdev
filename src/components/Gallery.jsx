import { useState, useEffect } from 'react'
import { galleryImages } from '../data'

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const total = galleryImages.length

  const go = (n) => setCurrent((n + total) % total)

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 4500)
    return () => clearInterval(t)
  }, [current])

  return (
    <section id="gallery" className="gallery-section py-5">
      <div className="container">
        <p className="section-label mb-1">A look inside</p>
        <h2 className="section-title mb-4">Our <span>Gallery</span></h2>

        <div className="slider-wrap">
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {galleryImages.map(img => (
              <img key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
          <button className="slide-btn prev" onClick={() => go(current - 1)}>&#8592;</button>
          <button className="slide-btn next" onClick={() => go(current + 1)}>&#8594;</button>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-3">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
