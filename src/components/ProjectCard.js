import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} screenshot`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-2">
            <Button 
              variant="primary" 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}
