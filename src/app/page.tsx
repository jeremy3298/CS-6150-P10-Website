export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p>
        This is the site for the P10 Renewvia Analysis Team! Take a look at the previous team's work&nbsp;
        <a
          className="text-link"
          href="https://github.com/Renewvia-Energy/impact-analysis/tree/achemso-letter"
          target="_blank"
        >
          Impact Analysis Letter
        </a>
        &nbsp;to get started.<br />Here is where our work will be when it is done!&nbsp;
        <a
          className="text-link"
          href="https://github.com/Renewvia-Energy/Renewvia-REC"
          target="_blank"
        >
          Renewvia REC
        </a>
      </p>

      <div className="mt-4 text-left">
        <h2 className="text-xl font-bold">Project Description</h2>
        <p>
          Our project aims to analyze the socio-economic impact of solar mini-grids installed by Renewvia in Africa. We will build a dashboard or website to present insights on educational outcomes, household stability, and gender disparities.
        </p>

        <h2 className="text-xl font-bold mt-4">Project Goal</h2>
        <p>
          To develop a website that showcases the impact of solar mini-grids, support research with a published paper, and improve the survey process for better data collection.
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
      </div>
    </div>
  );
}
