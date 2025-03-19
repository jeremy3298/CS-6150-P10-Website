"use client";

import React from 'react';

export default function Home() {
  const handlePeerEvalClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    alert("Peer Evaluation survey is not yet available. Please check back in 12 hours.");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-lg mb-4">Renewvia Solar Impact: Socio-Economic Insights</h1>
      <p>
        <a className="text-link cursor-pointer" href="#" onClick={handlePeerEvalClick}>
          Peer Evaluation Survey
        </a>
      </p>
      <br />
      <div className="w-full max-w-3xl text-left">
        <p className="text-lg mt-4">Our changes to the Renewvia survey can be contextualized to a few main points:</p>
        <ul className="list-disc ml-6">
          <li>Strengthen the baseline data to better track pre-electrification income, energy, and socio-economic levels. </li>
          <li>Isolate Impact by collecting data from a control group in neighborhoods with a similar demographic. </li>
          <li>Adding new metrics from additional questions related to network connection, gender roles, education, and income in order to align further with Sustainable Development Goals (SDGs) set by the UN.</li>
          <li>Altering existing questions to align with the SDGs and frameworks like the Multidimensional Energy Poverty Index. Furthermore, existing gaps in the survey have been fixed by removing biases in certain questions and altering them to gather more data (asking questions in a scaled or qualitative way rather than a binary way).</li>
          <li>Changing the structure of the survey so it can be given out at certain intervals (6, 9, 12 months post-electrification) to track changes in metrics over time rather than a one-time impact.</li>
          <li>Receive household feedback on mini-grid connection</li>
        </ul>
        <p className="text-lg mt-4">New Quantitative Measures for Socio-Economic Impact</p>
        <ul className="list-disc ml-6">
          <li>Increase in Female Business Ownership</li>
          <li>Growth in Internet-Connected Devices Per Household</li>
          <li>Rise in Digital Banking Adoption</li>
          <li>Increase in Remote Online Workers</li>
          <li>Improvement in Female School Attendance</li>
          <li>Growth in Total Business Ownership</li>
          <li>Shift from Farming/Fishing/Home-Making to Other Occupations</li>
          <li>Reduction in Number of Individuals Without Income</li>
          <li>Change in Monthly Household Utility Costs</li>
          <li>Improvement in Business Productivity</li>
          <li>Increase in Electricity Satisfaction Levels</li>
          <li>Reduction in Population Below the International Poverty Line</li>
        </ul>
        <p className="mt-4">
          These new measurements are calculated from binary variables, linear scales, and other quantitative responses received from newly added questions.
        </p>
        <p className="mt-4">
          View the current metrics here:&nbsp;
          <a
            className="text-link"
            href="https://github.com/Renewvia-Energy/impact-analysis/tree/main/data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Current Metrics
          </a>
        </p>
      </div>
      <br />
      <hr className="w-full border-t border-gray-300 my-6" />
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
    </div>
  );
}
