import React from 'react';
import cm from './../assets/logos/cm.png';
import rts from './../assets/logos/rts.jpg';
import lr from './../assets/logos/Loansride.png';
import Header from '../components/Header';

export default function Experience() {
  return (
    <>      <Header/>
    <div className="exp-container">

      <div className="row">
        <h2>My Experience</h2>
        <table className="experience-table">
          <tbody>
            <tr>
              <th><img src={cm} className="logo" alt="CreditMitra logo" /></th>
              <td>
            <p>   <strong>CreditMitra (Samcint Solutions)</strong><br />
                CreditMitra is powered by Samcint Solutions. It is an NBFC, and I worked here as a Full Stack Developer.<br />
                As a MERN Stack Developer, I have extensive experience in website and mobile application development. I worked as a backend developer with Node.js and integrated various services, specializing in AWS deployment. My expertise includes React.js, React Native, and AWS services such as S3, CloudFront, Route 53, and EC2 (using Nginx).
                 I excel in designing and implementing scalable web applications, ensuring high performance and managing cloud infrastructure to meet project needs.<br/>
                 <a href='https://creditmitra.in/'>www.creditmitra.in</a>
                 </p> 
              </td>
            </tr>
            <tr>
              <th><img src={rts} className="logo" alt="Raice Tech Soft logo" /></th>
              <td>  <p> 
                <strong>Raice Tech Soft Pvt. Ltd.</strong><br />
                Experienced in website development and mobile application development, specializing in backend integration and AWS deployment. Proficient in React.js, React Native, and Node.js, with expertise in AWS services such as S3, CloudFront, Route 53, and EC2 (using Nginx). Committed to delivering high-quality, scalable applications that provide excellent user experiences.<br/>
                
                <a href='http://www.raicetechsoft.com/'>www.raicetechsoft.com</a>
                </p>  </td>
            </tr>
            <tr>
              <th><img src={lr} className="logo" alt="Loansride logo" /></th>
              <td>  <p> 
                <strong>Loansride Multi-channel Pvt. Ltd.</strong><br />
                Loansride is a fintech company. I worked here as a Full Stack Developer.<br />
                I have experience developing B2B and B2C mobile applications that act as intermediaries between banks, NBFCs, and loan applicants. In my role, I implemented backend solutions from scratch, ensuring seamless integration and functionality to meet business requirements.
                <br/>
                <a href='www.loansride.com'>www.loansride.com</a>
                </p>   </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
