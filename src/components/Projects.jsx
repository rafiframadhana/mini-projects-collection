import React from "react";
import { useState, useEffect } from "react";
import { projects } from './../data/projects.js';
import ProjectCard from './ProjectCards.jsx';
import useWindowSize from './../hooks/useWindowSize.jsx';
import Tooltip from "@mui/material/Tooltip";
import './../styles/projects.css';

function Projects() {
  const { width } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(
    getInitialProjectsPerPage(width)
  );

  function getInitialProjectsPerPage(width) {
    if (width > 1249) return 6;
    if (width >= 768 && width <= 1200) return 4;
    return 6;
  }

  useEffect(() => {
    if (width > 1194) {
      setProjectsPerPage(6);
    } else if (width >= 768 && width <= 1022) {
      setProjectsPerPage(4);
    } else {
      setProjectsPerPage(6);
    }
  }, [width]);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [projectsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const getVisiblePageNumbers = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(start + 2, totalPages);

    if (end === totalPages) {
      start = Math.max(1, end - 2);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  return (
    <section id="projects">
      <div className="project-grid" id="projects-container">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {totalPages > 0 && (
        <div className="pagination-container">
          <div className="pagination">
            <Tooltip title="First Page" arrow>
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &laquo;
              </button>
            </Tooltip>

            <Tooltip title="Previous Page" arrow>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &larr;
              </button>
            </Tooltip>

            {getVisiblePageNumbers().map((pageNum) => (
              <Tooltip key={pageNum} title={`Page ${pageNum}`} arrow>
                <button
                  onClick={() => handlePageChange(pageNum)}
                  className={`page-btn ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                >
                  {pageNum}
                </button>{" "}
              </Tooltip>
            ))}

            <Tooltip title="Next Page" arrow>
              {" "}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                &rarr;
              </button>
            </Tooltip>

            <Tooltip title="Last Page" arrow>
              {" "}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                &raquo;
              </button>
            </Tooltip>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
