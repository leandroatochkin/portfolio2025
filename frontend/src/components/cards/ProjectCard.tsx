import React, { useState } from "react";

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
      style={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        border: "1px solid #e5e5e5",
        maxWidth: "28rem",
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
                  }}
                  aria-label="Previous image"
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
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
                  }}
                  aria-label="Next image"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "10%",
                      border: "none",
                      cursor: "pointer",
                      background: index === currentImageIndex ? "#007bff" : "rgba(0,0,0,0.3)",
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
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#333" }}>
          {title}
        </h3>

        <p style={{ fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "1rem", color: "#555" }}>
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
                color: "#333",
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
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
