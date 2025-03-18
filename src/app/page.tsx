"use client";

import React from 'react';

export default function Home() {
  const handlePeerEvalClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    alert("Peer Evaluation survey is not yet available. Please check back in 12 hours.");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Renewvia Solar Impact: Socio-Economic Insights</h1>
      <p>
        <a className="text-link cursor-pointer" href="#" onClick={handlePeerEvalClick}>
          Peer Evaluation Survey
        </a>
      </p>
      <p>
        This is the site for the P10 Renewvia Analysis Team! Take a look at the previous team's work&nbsp;
        <a
          className="text-link"
          href="https://github.com/Renewvia-Energy/impact-analysis/tree/achemso-letter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impact Analysis Letter
        </a>
        &nbsp;to get started.<br />
        Here is where our work will be when it is done!&nbsp;
        <a
          className="text-link"
          href="https://github.com/Renewvia-Energy/Renewvia-REC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Renewvia REC
        </a>
        .<br />
        You can also watch our mini-presentation to get a brief overview of the project&nbsp;
        <a
          className="text-link"
          href="https://gtvault.sharepoint.com/:v:/s/2025-p10/EbyWNCUpijpFqdgwGD-I1kIBpzNE1YS4_jGZ8anXkUj9CQ?e=rCCSCN"
          target="_blank"
          rel="noopener noreferrer"
        >
          (mini-presentation)
        </a>
        .<br />
        Here is a literature survey we wrote. We went over surveys done in similar industries to our partner organization
        and analyzed them in an effort to make sure the survey we create for Renewvia is as good as possible&nbsp;
        <a
          className="text-link"
          href="https://gtvault.sharepoint.com/:w:/s/2025-p10/Eehs_QsnFpBJv1TMXQcYGh0BSLkdpoOaQGQ21-2TuWISsg?e=F4m6Ix"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Literature Survey)
        </a>
        .
      </p>

      <div className="mt-4 text-left">
        <h2 className="text-xl font-bold">Project Description</h2>
        <p>
          Our project aims to build off of a previous analysis that looked at the socio-economic impact of solar mini-grids installed by Renewvia in Africa. We will also continue building this website to present insights on educational outcomes, household stability, and gender disparities.
        </p>

        <h2 className="text-xl font-bold mt-4">Project Goal</h2>
        <p>
          To develop a website that showcases the impact of solar mini-grids, support research and make alterations with a published paper (includes a literature review and review of the existing draft), and improve the survey process for better data collection.
        </p>

        <h2 className="text-xl font-bold mt-4">Team Members & Roles</h2>
        <ul className="list-disc ml-6">
          <li><strong>Jeremy Glassman</strong> - Team Lead, Literature Survey, Web Development, Survey Analysis</li>
          <li><strong>Roshen Jegajeevan</strong> - Web Development, Literature Survey, Survey Analysis</li>
          <li><strong>Harish Murali</strong> - Research Paper, Literature Survey, Survey Analysis</li>
          <li><strong>Max Matkovski</strong> - Research Paper, Literature Survey, Survey Analysis</li>
          <li><strong>Prasanta Biswas</strong> - Research Paper, Literature Survey, Survey Analysis</li>
        </ul>

        <h2 className="text-xl font-bold mt-4">Lighthouse Scores</h2>
        <ul className="list-disc ml-6">
          <li>Desktop: Performance 100 | Accessibility 100 | Best Practices 100 | SEO 100</li>
          <li>Mobile: Performance 97 | Accessibility 100 | Best Practices 100 | SEO 100</li>
        </ul>

        <h2 className="text-xl font-bold mt-4">Updated Renewvia Survey</h2>
        <p>
          This is the current updated Renewvia Survey. You can access it here:&nbsp;
          <a
            className="text-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-jcLO2TX3HPgicfchgYSUvAcr0wvpqqdvbFGud-nAXls_qA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            Renewvia Survey
          </a>
          .
        </p>
      </div>
    </div>
  );
}
