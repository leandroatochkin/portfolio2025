import React, { useState } from "react";
import { StepBack, StepForward, Github } from "lucide-react";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { handleMouseEnter, handleMouseLeave } from "../utils";

export interface Project {
  title: string;
  pictures: string[];
  description: string;
  demo?: string;
  repo?: string;
  stack?: string[];
}



const ProjectCard: React.FC<Project> = ({
  title,
  pictures,
  description,
  demo,
  repo,
  stack,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useSelector((state: RootState) => state.theme);

  const nextImage = () => {
    setCurrentImageIndex((prev: number) => (prev + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev: number) => (prev - 1 + pictures.length) % pictures.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };



  return (
    <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      style={{
        background: theme.colors.surface,
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        border: `1px solid ${theme.colors.surface}`,
        maxWidth: "28rem",
        minHeight: 'fit-content',
        maxHeight: '32rem',
        margin: "0 auto",
      }}
    >
      {/* Image Carousel */}
      <div style={{ position: "relative", height: "12rem", background: "#f5f5f5" }}>
        {pictures.length > 0 ? (
          <>
            <img
              src={pictures[currentImageIndex] || "/placeholder.svg"}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            {/* Navigation Arrows */}
            {pictures.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  style={{
                    position: "absolute",
                    left: "0.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    cursor: "pointer",
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center'
                  }}
                  aria-label="Previous image"
                >
                    <StepBack color='#333' />
                </button>
                <button
                  onClick={nextImage}
                  style={{
                    position: "absolute",
                    right: "0.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    cursor: "pointer",
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center'
                  }}
                  aria-label="Next image"
                >
                  <StepForward color='#333' />
                </button>
              </>
            )}

            {/* Dot Indicators */}
            {pictures.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "0.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "0.25rem",
                }}
              >
                {pictures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    style={{
                      width: "30px",
                      height: "20px",
                      borderRadius: "10%",
                      border: "none",
                      cursor: "pointer",
                      background: index === currentImageIndex ? "#007bff" : "rgba(0,0,0,0.3)",
                      fontSize: '0.5rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center'
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    {index + 1}
                </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
            }}
          >
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div style={{ padding: "0.5rem" }}>
        <h3 style={{ 
            fontSize: theme.fontSizes.medium, 
            fontWeight: "bold", 
            marginBottom: "0.5rem", 
            color: theme.colors.text }}>
          {title}
        </h3>

        <p style={{ fontSize: theme.fontSizes.small, lineHeight: 1.5, marginBottom: "1rem", color: theme.colors.text }}>
          {description}
        </p>

        {/* Technologies */}
        {Array.isArray(stack) && stack.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
            {stack.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "0.25rem 0.5rem",
                  background: "rgba(0,123,255,0.1)",
                  color: "#007bff",
                  fontSize: "0.75rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(0,123,255,0.2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                textAlign: "center",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              View Live
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                textAlign: "center",
                background: "transparent",
                color: theme.colors.text,
                border: "1px solid #ccc",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
              }}
            >
             <Github />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
