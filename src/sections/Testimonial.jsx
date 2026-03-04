const testimonials = [
  {
    name: "Ahamed Gazzaly.",
    role: "Home Owner",
    text: "Excellent quality and design, just what i needed!",
    img: "/review1.PNG",
    bg: "bg-one",
  },
  {
    name: "Umar Convict.",
    role: "Customer",
    text: "Solid stuff!  Worth the price! Delivery was on time!",
    img: "/review2.PNG",
    bg: "bg-two",
  },
  {
    name: "Jude nalinda.",
    role: "Office Client",
    text: "Highly recommend them! Great designs and service.",
    img: "/review3.JPG",
    bg: "bg-three",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonial-section container py-5">
      <h2 className="testimonial-title text-center mb-5">What Our Clients Say</h2>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2700"  
      >
        <div className="carousel-inner">
          {testimonials.map((t, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className={`testimonial-card ${t.bg} d-flex align-items-center mx-auto`}>
                <img src={t.img} className="testimonial-img" alt={t.name} />
                <div>
                  <p className="testimonial-text">{t.text}</p>
                  <h6 className="mb-0">{t.name}</h6>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
