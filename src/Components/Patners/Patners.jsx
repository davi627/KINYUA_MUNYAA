import React from 'react';
import './Patners.css';
import law1 from '../../assets/law1.jpg';
import law2 from '../../assets/law2.jpg';
import law3 from '../../assets/law3.jpg';
import law4 from '../../assets/law4.jpg';

const Patners = () => {
  return (
    <div className="patners">
      <h1>OUR PATNERS & ASSOCIATES</h1>
      <div className="profiles">
        <div className="profile1">
          <img src={law1} alt="Lawyer 1" />
          <h3>KINYUA MUYAA</h3>,<p>Managing Patner</p>
          <p>Email: kinyua.munyaa@gmail.com</p>
          <p>Phone: +254 723 011 234</p>
          <p>
            Kinyua Muyaa is a prominent Kenyan lawyer and the founder of Kinyua,
            Muyaa & Co Advocates, a reputable law firm based in Nairobi. With
            over two decades of experience in the legal field, Mr. Muyaa is
            known for his expertise in corporate law, litigation, and property
            law. His firm provides a wide range of legal services, specializing
            in areas such as commercial transactions, civil litigation, land
            disputes, and legal advisory for both individuals and corporations.
            Kinyua Muyaa is recognized for his commitment to providing timely,
            practical, and results-driven legal solutions. His leadership has
            seen the firm grow into one of the leading legal practices in Kenya,
            serving clients with integrity and a personalized approach to their
            legal needs. The firm is highly regarded for its discretion and
            competence in handling complex legal matters.
          </p>
        </div>
        <div className="profile2">
          <img src={law2} alt="Lawyer 2" />
          <h3>LAWSON JAMES</h3>,<p>Managing Patner</p>
          <p>Email: lawson.james@gmail.com</p>
          <p>Phone: +254 723 011 235</p>
          <p>
            Lawson James is a renowned Kenyan lawyer and the founder of Kinyua,
            Muyaa & Co Advocates, a reputable law firm based in Nairobi. With
            over three decades of experience in the legal field, Mr. James is
            known for his expertise in corporate law, litigation, and property
            law. His firm provides a wide range of legal services, specializing
            in areas such as commercial transactions, civil litigation, land
            disputes, and legal advisory for both individuals and corpor{' '}
          </p>
        </div>
        <div className="profile3">
          <img src={law3} alt="Lawyer 3" />
          <h3>ELVIS CHENKO</h3>,<p>Managing Patner</p>
          <p>Email: elvis.chenko@gmail.com</p>
          <p>Phone: +254 723 011 236</p>
          <p>
            Elvis Chenko is a renowned Kenyan lawyer and the founder of Kinyua,
            Muyaa & Co Advocates, a reputable law firm based in Nairobi. With
            over two decades of experience in the legal field, Mr. Chenko is
            known for his expertise in corporate law, litigation, and property
            law. His firm provides a wide range of legal services, specializing
            in areas such as commercial transactions, civil litigation, land
            disputes, and legal advisory for both individuals{' '}
          </p>
        </div>
        <div className="profile4">
          <img src={law4} alt="Lawyer 4" />
          <h3>ELVIS Mutua</h3>,<p>Managing Patner</p>
          <p>Email: elvis.chenko@gmail.com</p>
          <p>Phone: +254 723 011 236</p>
          <p>
            Elvis Chenko is a renowned Kenyan lawyer and the founder of Kinyua,
            Muyaa & Co Advocates, a reputable law firm based in Nairobi. With
            over two decades of experience in the legal field, Mr. Chenko is
            known for his expertise in corporate law, litigation, and property
            law. His firm provides a wide range of legal services, specializing
            in areas such as commercial transactions, civil litigation, land
            disputes, and legal advisory for both individuals{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patners;
