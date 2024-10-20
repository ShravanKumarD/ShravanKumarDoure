import React from 'react';
import Header from '../components/Header';

export default function Projects() {
  return (
    <>
      <Header />
      <div className="projects-container">
      <h2>Projects I worked on</h2>
        <p>
          <strong>CreditMitra</strong><br />
          <ul>
            <li>Developed a fully responsive CRM web application using React.js, with a Node.js backend, ensuring seamless functionality across devices.</li>
            <li>Deployed the application on AWS with a custom domain (www.creditmitra.in) and an SSL certificate for secure access.</li>
            <li>Here is the app link: <a href="https://creditmitra.in">creditmitra.in</a></li>
          </ul>
        </p>

        <p><strong>HRMS</strong><br />
        <ul>
          <li>Designed and developed a full-featured HRMS web application using React.js and Node.js, from scratch, to manage employee attendance, pay slips, offer letters, and salary calculations based on attendance.</li>
          <li>Integrated modules for announcements, festivals, holidays, and a dashboard calendar for streamlined employee management.</li>
          <li>Implemented leave management, clock-in/clock-out functionality, and deployed the application on AWS with an SSL certificate, securing the domain hrms.creditmitra.in.</li>
          <li>Implemented PRD for this.</li>
          <li>Here is the app link: <a href="https://hrms.creditmitra.in">hrms.creditmitra.in</a></li>
        </ul>
        </p>
        <p><strong>CRM</strong>  <br />
        <ul>
          <li>Developed a CRM Web Application using React.js and Node.js from scratch to manage leads. Implemented a system for lead assignment by managers and admins to employees.</li>
          <li>Deployed the application on AWS with an SSL certificate and configured with domain crm.creditmitra.in.</li>
          <li>Implemented PRD for CRM.</li>
          <li>Here is the app link: <a href="https://crm.creditmitra.in">crm.creditmitra.in</a></li>
        </ul>
        </p>
        <p><strong>B2B and B2C (Loansride)</strong><br />
        <ul>
          <li>Architected and implemented a robust backend infrastructure from the ground up, utilizing Node.js, to manage and process user loan applications, integrating with multiple third-party APIs to securely send data to banks and NBFCs. Leveraged microservices architecture and RESTful APIs to ensure scalability and optimal performance.</li>
          <li>Collaborated closely with the front-end team to ensure seamless communication between the backend and UI, facilitating real-time data transfers and status updates.</li>
          <li>Designed, developed, and deployed a B2B mobile application with an intuitive UI/UX, integrated with backend APIs, ensuring a smooth and responsive user experience. Employed modern frameworks such as React Native for the front end, and utilized AWS EC2 for hosting the backend services.</li>
          <li>Here is the app link: <a href="https://loansride.com">Loansride</a></li>
        </ul>
        </p>
      </div>
    </>
  );
}
