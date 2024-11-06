import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food Ordering App",
      description: "Modern e-commerce app with React and Redux.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/rishmiiee26/Food-Ordering-App",
    },
    {
      title: "Facial Emotion Recognition (FER)",
      description: "Facial Emotion Recognition detects emotions from facial expressions.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/rishmiiee26/Facial-Expression-Recognition",
    },
    {
      title: "Encrypted TCP Chat Application",
      description: "A simple TCP-based chat application in Python.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/rishmiiee26/Chat-Application",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Experienced in building dynamic web applications using React for frontend development, Python for backend logic, and full-stack architectures for end-to-end solutions. Skilled in integrating TCP for real-time communication and leveraging cloud technologies for scalable, efficient systems.
                  </p>
                  <Tab.Container defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      imgUrl={project.imgUrl}
      githubUrl={project.githubUrl}
    />
  ))}
  
};
