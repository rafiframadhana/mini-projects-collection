import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import web from "./../assets/icon/internet.png";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import github from "./../assets/icon/github-icon.png";

const StyledProjectCard = styled.div`
  background: var(--project-card-bg);
  padding: 0;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  height: 460px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--project-border-color);

  &:hover {
    transform: translateY(-5px);
  }

  .row {
    display: grid;
    gap: 2rem;
    width: 100%;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .row {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1195px) {
    .row {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;

    .card-image {
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: 12px 12px 0 0;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: inherit;
        display: block;
        transition: opacity 0.3s ease;
      }
    }

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 1rem 1.5rem 0.5rem;
      color: var(--text-primary);
    }

    p {
      font-size: 1rem;
      color: var(--text-secondary);
      margin: 0 1.5rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: var(--project-footer-bg);
      border-top: 1px solid rgba(150, 150, 150, 0.21);
      border-radius: 0 0 12px 12px;

      .tech-stack h5 {
        font-size: 0.9rem;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
        margin-top: 0;
      }

      .tech-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;

        img {
          width: 24px;
          height: 24px;
          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .project-links {
        display: flex;
        gap: 1rem;

        a {
          display: flex;
          align-items: center;

          img {
            width: 35px;
            height: 35px;
            opacity: 0.8;
            transition: opacity 0.2s ease;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  /* === Responsive Adjustments === */

  @media (max-width: 1200px) {
    height: 460px;

    .card-content h4 {
      font-size: 1.1rem;
    }

    .card-content p {
      margin: 10px 1rem;
    }

    .card-footer {
      padding: 0.8rem 1rem;

      .project-links img {
        width: 25px;
        height: 25px;
      }
    }
  }

  @media (max-width: 768px) {

    .card-footer {
      .tech-stack h5 {
        font-size: 0.85rem;
      }

      .tech-icons {
        gap: 0.5rem;
      }

      .project-links img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    .card-content p {
      margin: 10px 0;
    }

    .card-footer {
      padding: 0.8rem;

      .tech-stack h5 {
        font-size: 0.8rem;
      }

      .tech-icons img {
        width: 20px;
        height: 20px;
      }

      .project-links img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

export default function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledProjectCard>
      <div className="card-content">
        <a href={project.link} target="_blank">
          <div className="card-image">
            {!imageLoaded && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
                sx={{
                  bgcolor: "var(--skeleton)",
                  borderRadius: "12px 12px 0 0",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            )}
            <img
              src={project.img}
              alt={project.title}
              loading="lazy"
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="card-footer">
            <div className="tech-stack">
              <h5>Tech Stack:</h5>
              <div className="tech-icons">
                {project.techStack.map((tech, index) => (
                  <Tooltip key={index} title={tech.name} arrow>
                    <img src={tech.icon} alt={tech.name} />
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
              >
                <Tooltip title="View Website" arrow>
                  <img src={web} alt="Website" />
                </Tooltip>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
              >
                <Tooltip title="View Repository" arrow>
                  <img src={github} alt="GitHub" />
                </Tooltip>
              </a>
            </div>
          </div>
        </a>
      </div>
    </StyledProjectCard>
  );
}
