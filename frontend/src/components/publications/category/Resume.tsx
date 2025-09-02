import { jobs } from "../../../data/jobs"
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useNavigate } from "react-router-dom";


export const Resume = () => {

const navigate = useNavigate()


const theme = useSelector((state: RootState) => state.theme);

  const timelineStyles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    header: {
      textAlign: "center" as const,
      marginBottom: "40px",
    },
    title: {
      fontSize: theme.fontSizes.large,
      fontWeight: "bold",
      color: theme.colors.text,
      marginBottom: "10px",
    },
    subtitle: {
      color: theme.colors.text,
      marginBottom: "30px",
    },
    timeline: {
      position: "relative" as const,
      paddingLeft: "40px",
    },
    timelineLine: {
      position: "absolute" as const,
      left: "20px",
      top: "0",
      bottom: "0",
      width: "3px",
      background: "linear-gradient(to bottom, #e0e0e0 0%, #e0e0e0 0%, #007bff 30%, #007bff 100%)",
    },
    jobItem: {
      position: "relative" as const,
      marginBottom: "40px",
      paddingLeft: "40px",
    },
    checkpoint: {
      position: "absolute" as const,
      left: "-28px", // Move checkpoint closer to center of timeline
      top: "8px",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      border: "3px solid #007bff",
      zIndex: 2,
      backgroundColor: "white", // Default to empty
    },
    checkpointFilled: {
      backgroundColor: "#007bff",
    },
    checkpointEmpty: {
      backgroundColor: "white",
    },
    jobCard: {
      backgroundColor: theme.colors.surface,
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "24px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    jobHeader: {
      marginBottom: "12px",
    },
    jobTitle: {
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
      color: theme.colors.text,
      margin: "0 0 4px 0",
    },
    company: {
      fontSize: "1.1rem",
      color: "#007bff",
      fontWeight: "600",
    },
    dates: {
      fontSize: "0.9rem",
      color: theme.colors.text,
      marginBottom: "12px",
    },
    description: {
      color: theme.colors.text,
      lineHeight: "1.6",
      whiteSpace: 'pre-line'
    },
    currentBadge: {
      display: "inline-block",
      backgroundColor: "#28a745",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      marginLeft: "8px",
    },
    lookingBadge: {
      textAlign: "center" as const,
      padding: "20px",
      backgroundColor: "#f8f9fa",
      border: "2px dashed #007bff",
      borderRadius: "8px",
      color: "#007bff",
      fontSize: "1.1rem",
      fontWeight: "600",
            cursor: 'pointer'
    },
    form: {
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "24px",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      marginBottom: "4px",
      fontWeight: "600",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      minHeight: "80px",
      resize: "vertical" as const,
    },
    checkbox: {
      marginRight: "8px",
    },
    formButtons: {
      display: "flex",
      gap: "12px",
    },
    saveButton: {
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    cancelButton: {
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
    },
  }

  return (
    <div style={timelineStyles.container}>
      <div style={timelineStyles.header}>
        <h1 style={timelineStyles.title}>My Career Journey</h1>
        <p style={timelineStyles.subtitle}>Professional Experience Timeline</p>
      </div>

      <div style={timelineStyles.timeline}>
        <div style={timelineStyles.timelineLine}></div>

        <div style={timelineStyles.jobItem}>
          <div style={{ ...timelineStyles.checkpoint, ...timelineStyles.checkpointEmpty }}></div>
          <div 
          style={timelineStyles.lookingBadge}
          onClick={()=>navigate('/contact',{viewTransition: true})}
          >🔍 Open to New Opportunities</div>
        </div>

        {jobs.map((job, index) => (
          <div key={index} style={timelineStyles.jobItem}>
            <div
              style={{
                ...timelineStyles.checkpoint,
                ...timelineStyles.checkpointFilled,
              }}
            ></div>

            <div style={timelineStyles.jobCard}>
              <div style={timelineStyles.jobHeader}>
                <h3 style={timelineStyles.jobTitle}>
                  {job.title}
                  {job.current && <span style={timelineStyles.currentBadge}>Current</span>}
                </h3>
                <div style={timelineStyles.company}>{job.company}</div>
              </div>

              <div style={timelineStyles.dates}>
                {new Date(job.startDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })} -{" "}
                {job.endDate
                  ? new Date(job.endDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })
                  : "Present"}
              </div>

              <p style={timelineStyles.description}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resume