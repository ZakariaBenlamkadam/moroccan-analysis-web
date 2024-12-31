import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaChartBar, FaChartLine, FaChartPie, FaDatabase, FaEye, FaChevronRight } from 'react-icons/fa';
import './Portfolio.css';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('architecture');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const userStories = [
    {
      role: 'Data Analyst',
      request: 'I want to analyze relationships between authors, keywords, and affiliations from Moroccan research articles.',
      value: 'So that I can uncover trends in Moroccan academic research and identify emerging topics in the field.',
      criteria: 'The relationships between authors, keywords, and affiliations should be visualized in an interactive Power BI dashboard.'
    },
    {
      role: 'Researcher',
      request: 'I want to explore the evolution of research topics by analyzing keywords over time.',
      value: 'So that I can identify research trends and better understand how various academic fields are developing in Morocco.',
      criteria: 'Keyword trends should be represented in a time series chart within the dashboard, allowing filtering by author or affiliation.'
    },
    {
      role: 'Data Engineer',
      request: 'I want to automate the data collection and transformation pipeline from Scopus.',
      value: 'So that we can consistently process up-to-date data and reduce manual intervention in the pipeline.',
      criteria: 'The pipeline should be fully automated, sourcing data from Scopus, transforming it via Azure, and processing it in Databricks.'
    },
    {
      role: 'Business Stakeholder',
      request: 'I want to see clear and actionable insights on the impact of Moroccan research in global scientific discussions.',
      value: 'So that I can make informed decisions on how to support and promote Moroccan research globally.',
      criteria: 'The final dashboard should provide insights into the number of publications, collaborations, and keyword trends in Moroccan research.'
    }
  ];
  
  
  const sections = [
    { id: 'architecture', title: 'Project Architecture', icon: <FaBuilding /> },
    { id: 'overview', title: 'Project Overview', icon: <FaChartLine /> },
    { id: 'requirements', title: 'Business Requirements', icon: <FaDatabase /> },
    { id: 'transformation', title: 'Data Transformation', icon: <FaEye /> },
    { id: 'visualizations', title: 'Visualizations', icon: <FaChartBar /> },
  ];

  const notebookUrl = "https://nbviewer.org/github/ZakariaBenlamkadam/HealthAI-Patents-Insight/raw/main/analysis_1.ipynb";
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Unveiling Moroccan Research: A Seamless Journey from Data to Discovery</h1>
        <div className="header-icons">
          <a href="https://github.com/ZakariaBenlamkadam/HealthAI-Patents-Insight" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub" className="header-icon" />
          </a>
          <a href="https://zakariabenlamkadam.me/" title="Return to Main Page">
            <img src={process.env.PUBLIC_URL + '/home.png'} alt="Home" className="header-icon" />
          </a>
        </div>
      </header>

      <main className="portfolio-main">
        <nav className="portfolio-nav">
          <ul className="portfolio-nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                >
                  {section.icon}
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <motion.section
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.02 }}
          className="portfolio-content"
          onMouseMove={handleMouseMove}
            style={{
              "--x": `${mousePosition.x}px`,
              "--y": `${mousePosition.y}px`,
            }}
        >
          {activeSection === 'architecture' && (
            <div>             
              <img
              className='responsive-iframe'
                alt="Sales Report_Finished"
                src={process.env.PUBLIC_URL + '/Architecture1.png'}
                
              />
            </div>
          )}
          {activeSection === 'overview' && (
            <div>
              <h2>Project Overview</h2>
              <div className="project-description">
                <div className="paragraph">
                  <p>
                    This project focuses on unlocking insights from Moroccan academic publications. By analyzing bibliometric data from Scopus, we aim to uncover key relationships between authors, their affiliations, and the keywords in their research. This powerful analysis highlights emerging trends, collaboration patterns, and the impact of Moroccan research on global scientific discourse.
                  </p>
                </div>
                <div className="paragraph">
                  <p>
                    The system uses a robust data pipeline to collect, transform, and process bibliometric data. Raw data is sourced from Scopus, focusing on Moroccan articles, and is exported in formats like CSV or XML. This data is then transformed using cloud technologies like Azure, followed by advanced processing in Databricks using PySpark. Key relationships between authors, keywords, and affiliations are explored and visualized through complex analytics. The data is stored efficiently in Snowflake, ensuring scalability and ease of access. Finally, Power BI dashboards bring these insights to life, allowing researchers and decision-makers to explore and visualize relationships in an intuitive, actionable format.
                  </p>
                </div>
              </div>

              <div className="overview-steps">
                {['Data Sourcing', 'Data Transformation', 'Relationship Analysis', 'Data Storage', 'Visualization & Insights'].map((step, index) => (
                  <div key={step} className="step-card">
                    <span className="step-index">{index + 1}</span>
                    <span>{step}</span>
                    <FaChevronRight className="icon-chevron" />
                  </div>
                ))}
              </div>
            </div>
          )}

{activeSection === 'requirements' && (
  <div>
    <h2 className="section-heading">Business Requirements & User Stories</h2>
    <div className="table-container">
      <table className="user-stories-table">
        <thead>
          <tr>
            <th>As a (role)</th>
            <th>I want (request / demand)</th>
            <th>So that I (user value)</th>
            <th>Acceptance Criteria</th>
          </tr>
        </thead>
        <tbody>
          {userStories.map((story, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{story.role}</td>
              <td>{story.request}</td>
              <td>{story.value}</td>
              <td>{story.criteria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}


{activeSection === 'transformation' && (
  <div
    className="transformation-section"
    onMouseMove={handleMouseMove}
    style={{
      '--x': `${mousePosition.x}px`,
      '--y': `${mousePosition.y}px`,
    }}
  >
    <div
      className="gradient-overlay"
      style={{
        backgroundImage: `radial-gradient(circle at var(--x) var(--y), rgba(193, 237, 204, 0.3) 0%, rgba(193, 237, 204, 0) 50%)`,
      }}
    />
    
    {/* Section 1 - Data Loading & Schema Definition */}
    <div className="section">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        onClick={() => handleExpand('loading')}
        className="section-title"
      >
        Data Loading & Schema Definition
      </motion.h2>
      {expandedSection === 'loading' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-content"
        >
          <p>
            I loaded data from a CSV file into a Spark DataFrame (df) and explicitly cast columns to specific data types (e.g., String, Integer) to ensure consistency and avoids relying on automatic schema inference. 
          </p>
          <div className="data-preview">
            {/* Display a preview of the data */}
          </div>
        </motion.div>
      )}
    </div>

    {/* Section 2 - Data Cleaning */}
    <div className="section">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        onClick={() => handleExpand('cleaning')}
        className="section-title"
      >
        Data Cleaning and Standardization
      </motion.h2>
      {expandedSection === 'cleaning' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-content"
        >
          <p>Removed non-English characters, standardized CODEN values, normalized all columns, and more.</p>
          <div className="before-after-slider">
            {/* Implement the before and after slider for title cleaning */}
          </div>
        </motion.div>
      )}
    </div>

    {/* Section 4 - Data Loading & Schema Definition */}
    <div className="section">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        onClick={() => handleExpand('duplicate')}
        className="section-title"
      >
        Data Deduplication and Filtering
      </motion.h2>
      {expandedSection === 'duplicate' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-content"
        >
          <p>
          Removed duplicate rows based on the Title column, ensuring only unique articles remain          </p>
          <div className="data-preview">
            {/* Display a preview of the data */}
          </div>
        </motion.div>
      )}
    </div>

    {/* Section 3 - Data Structuring */}
    <div className="section">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        onClick={() => handleExpand('structuring')}
        className="section-title"
      >
        Data Structuring (Arrays & Maps)
      </motion.h2>
      {expandedSection === 'structuring' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-content"
        >
          <p>
            Created arrays for authors, keywords, and affiliations by splitting columns based on delimiters like commas or semicolons.
          </p>
          <div className="data-table">
            {/* Show data before and after structuring */}
          </div>
        </motion.div>
      )}
    </div>

    
    <div className="section">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        onClick={() => handleExpand('renaming')}
        className="section-title"
      >
        Column Renaming & Data Type Conversion
      </motion.h2>
      {expandedSection === 'renaming' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-content"
        >
          <p>
            Renamed columns for clarity (e.g., 'Art. No.' to 'article_number') and converted specific columns like dates to appropriate formats.
          </p>
          <div className="column-preview">
            {/* Visualize column renaming */}
          </div>
        </motion.div>
      )}
    </div>

    {/* Section 5 - Final Data Splitting */}
    <div className="section">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        onClick={() => handleExpand('splitting')}
        className="section-title"
      >
        Data Splitting
      </motion.h2>
      {expandedSection === 'splitting' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-content"
        >
          <p>Splitted data into multiple tables for articles, authors, keywords, and affiliations.</p>
          
          <div className="split-diagram">
          <img
              className='responsive-iframe'
                alt="Sales Report_Finished"
                src={process.env.PUBLIC_URL + '/modeling.jpg'}
                
              />
          </div>
        </motion.div>
      )}
    </div>
  </div>
)}




          {activeSection === 'visualizations' && (
            <div>
              <h2>Visualizations</h2>
              
              <iframe
              className='responsive-iframe1'
      title="Sales Report_Finished"
      src="https://app.powerbi.com/view?r=eyJrIjoiYmU4Y2UyODItMDQzMS00ZGFlLWE4OTMtYTA4M2YzNmFiMmYxIiwidCI6ImMyNzg3OTIyLTExZDktNGNhOC1hYWRmLTVlZjdmZjMxYTEyNyJ9"
      allowFullScreen
    />
            </div>
          )}
        </motion.section>
      </main>
    </div>
  );
}
