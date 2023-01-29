import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoppingApp from "../../Assets/Projects/shoppingApp.png";
import notesApp from "../../Assets/Projects/notesApp.png";
import textEditor from "../../Assets/Projects/textEditor.png";
import ToDo from "../../Assets/Projects/ToDo.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import ems from "../../Assets/Projects/ems.png";
import RPS from "../../Assets/Projects/RPS.png";
import menu from "../../Assets/Projects/menu.png";
import groceryBud from "../../Assets/Projects/groceryBud.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To-Do WebApp"
              description="A to-do list application, which performs operations like add new task, set status and delete. The frontend or client side is developed using React with semantic UI. Backend or Server is created in a statically typed and compiled language Go. Database used is mongoDB."
              ghLink="https://github.com/Akanksha-Verma31/Go-ToDo-App"
              demoLink="https://akanksha-verma31.github.io/Go-ToDo-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groceryBud}
              isBlog={false}
              title="Grocery Bud"
              description="Developed a Shopping/Grocery List web app to store user’s grocery items, daily tasks, logs, to-do, etc with help of JavaScript. Used Javascript’s local storage as database. Currently using Netlify to host."
              ghLink="https://github.com/Akanksha-Verma31/Grocery-Bud"
              demoLink="https://akanksha-verma31.github.io/Grocery-Bud/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesApp}
              isBlog={false}
              title="NotesApp"
              description="A Notes app to store user’s daily tasks, logs, to-do, etc with help of Firebase. Used Firestore as database, lazy-login using google sign-in and traditional login using email and password. Currently using Vercel to host and call the serverless functions."
              ghLink="https://github.com/Akanksha-Verma31/Kanban-notes"
              demoLink="https://kanban-notes-ten.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="Employeee-Management-System"
              description="A simple CRUD application built using the MEAN (MongoDB, Express, Angular, Node.js) stack. Developed a RESTful API that implements the CRUD (Create, Read, Update, Delete) operations for an employee. For datapersistence, used a MongoDB Atlas cluster."
              ghLink="https://github.com/Akanksha-Verma31/Employee-Management-System"
              demoLink="https://ems-akanksha.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textEditor}
              isBlog={false}
              title="Text-Editor"
              description="Personal text-editor or workspace to make notes or any important stuff to remember build with Tkinter module available in Python. Also has features like Open, save as and exit same as in windows Notepad. "
              ghLink="https://github.com/Akanksha-Verma31/GUI-Projects/blob/main/Text%20Editor.py"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingApp}
              isBlog={false}
              title="Shopping List App"
              description="An android application wrote fully in Kotlin that allows to create and manage shopping list. Floating action button which helps in showing the dialog box and also add the functionality in the UI for deleting any
              item from the list, add the number of items increase by one, subtract the number of items decrease by one also. Technologies and libraries used are: Kotlin language, MVVM architecture, Room Persistence, Live Data."
              ghLink="https://github.com/Akanksha-Verma31/Shopping-List-App"
              demoLink="https://github.com/Akanksha-Verma31/Shopping-List-App/raw/master/Shopping-List.apk" //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chat Bot"
              description="Personal Chat Room or Workspace to resolve general queries related to covid build with python using Tkinter module to develop GUI. Have features like we can modify responses as per our requirement and a login page."
              ghLink="https://github.com/Akanksha-Verma31/Chat-Bot-Python-Project"
              // demoLink="https://blogs.akanksha.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RPS}
              isBlog={false}
              title="Rock Paper Scissor"
              description="A simple Rock Paper Scissor game built using Javascript. It chooses computer moves using math.random and then compares with the users input to calculate the final score. UI is kept simple to keep it user-friendly and easy to navigate."
              ghLink="https://github.com/Akanksha-Verma31/Rock-Paper-Scissor"
              demoLink="https://akanksha-verma31.github.io/Rock-Paper-Scissor/RPS.HTML"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="Menu"
              description="Personal Chat Room or Workspace to resolve general queries related to covid build with python using Tkinter module to develop GUI. Have features like we can modify responses as per our requirement and a login page."
              ghLink="https://github.com/Akanksha-Verma31/Menu"
              demoLink="https://menu-js-html-css.netlify.app/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
