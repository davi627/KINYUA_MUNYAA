import React, { useState } from 'react';
import './Testimonial.css';
import law from '../../assets/law.jpg';
import law1 from '../../assets/law1.jpg';
import law2 from '../../assets/law2.jpg';
import law3 from '../../assets/law3.jpg';

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      image: law,
      name: 'John Kinyua',
      title: 'Managing Partner',
      testimony:
        "With over 15 years of experience in corporate law, our firm has successfully handled complex cases that have shaped the legal landscape in East Africa. We believe in providing practical solutions to our clients' legal challenges.",
      specialization: 'Corporate Law & Commercial Litigation',
      fullBlog: `As the Managing Partner at Kinyua Muyaa Advocates & Company, I've witnessed firsthand the evolution of corporate law in East Africa. Our commitment to excellence has enabled us to handle groundbreaking cases that have set precedents in the region.

      Key Achievements:
      • Successfully represented major corporations in complex merger negotiations
      • Pioneered innovative legal strategies in commercial litigation
      • Developed comprehensive corporate governance frameworks
      
      Our approach combines deep legal expertise with practical business acumen. We understand that each client's situation is unique and requires tailored solutions. Through our years of practice, we've developed strong relationships with regulatory bodies and industry leaders, allowing us to provide comprehensive legal services that address both immediate concerns and long-term strategic objectives.

      Recent Developments:
      We've recently expanded our corporate law practice to include specialized services in emerging technologies and startup law, recognizing the growing importance of these sectors in East Africa's economy.`,
    },
    {
      image: law1,
      name: 'Sarah Muyaa',
      title: 'Senior Partner',
      testimony:
        "Our commitment to excellence and dedication to our clients' success has been the cornerstone of our practice. We focus on delivering results while maintaining the highest ethical standards.",
      specialization: 'Real Estate & Property Law',
      fullBlog: `Real estate law in Kenya is undergoing significant transformation, and our firm stands at the forefront of these changes. As Senior Partner specializing in Real Estate & Property Law, I've guided countless clients through complex property transactions and disputes.

      Current Focus Areas:
      • Land registration and title verification
      • Commercial property development
      • Real estate investment structures
      • Property dispute resolution

      Recent landmark cases have demonstrated the importance of thorough due diligence in property transactions. Our team has developed robust protocols for property verification that have become industry standards.

      Looking ahead, we're investing in digital solutions for property documentation and verification, making the process more efficient and secure for our clients.`,
    },
    {
      image: law2,
      name: 'David Kamau',
      title: 'Partner',
      testimony:
        'Innovation in legal practice is essential. We combine traditional legal expertise with modern approaches to provide comprehensive solutions for our clients in the digital age.',
      specialization: 'Intellectual Property & Technology Law',
      fullBlog: `The digital transformation of Africa's economy presents both opportunities and challenges in intellectual property law. Our technology law practice has been instrumental in protecting innovations while fostering growth in the tech sector.

      Recent Projects:
      • Patent protection for innovative fintech solutions
      • Trademark enforcement in digital markets
      • Technology transfer agreements
      • Data protection compliance frameworks

      We've successfully helped startups protect their intellectual property while navigating the complex regulatory environment. Our approach emphasizes practical solutions that protect innovation while enabling business growth.

      Current Initiatives:
      We're developing specialized legal frameworks for blockchain applications and artificial intelligence, anticipating the next wave of technological innovation in Africa.`,
    },
    {
      image: law3,
      name: 'Grace Njeri',
      title: 'Associate Partner',
      testimony:
        "Our diverse team brings together various legal expertise to offer holistic solutions. We pride ourselves in understanding each client's unique needs and delivering personalized service.",
      specialization: 'Family Law & Dispute Resolution',
      fullBlog: `Family law requires a delicate balance of legal expertise and emotional intelligence. Our practice has evolved to meet the changing needs of modern families while respecting traditional values.

      Areas of Focus:
      • Alternative dispute resolution in family matters
      • Child custody and welfare
      • Matrimonial property disputes
      • Succession planning

      We've pioneered mediation-first approaches that help families resolve disputes amicably, saving both emotional and financial costs. Our success rate in mediation stands at 85%, significantly higher than the industry average.

      Recent Developments:
      We're introducing family law clinics to provide accessible legal advice to underserved communities, reflecting our commitment to social responsibility.`,
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-heading">Opinions and Blogs</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="image-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="circular-image"
              />
            </div>
            <div className="testimonial-content">
              <h3 className="partner-name">{testimonial.name}</h3>
              <h4 className="partner-title">{testimonial.title}</h4>
              <p className="specialization">{testimonial.specialization}</p>
              <p className="testimony">{testimonial.testimony}</p>
              <button
                className="read-more-btn"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedTestimonial(null)}
            >
              ×
            </button>
            <div className="modal-header">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="modal-image"
              />
              <div>
                <h2>{selectedTestimonial.name}</h2>
                <h3>{selectedTestimonial.title}</h3>
                <p className="modal-specialization">
                  {selectedTestimonial.specialization}
                </p>
              </div>
            </div>
            <div className="modal-body">
              {selectedTestimonial.fullBlog
                .split('\n')
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
