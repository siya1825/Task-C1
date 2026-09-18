import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="work">
            <h2>Here's what I've done so far</h2>
            <h2>My Projects</h2>

            <div className="projects">

                <ProjectCard
                    image="/images/project1.jpeg"
                    alt="Smart Water ATM"
                    title="Smart Water ATM"
                    description="Smart Water ATM is an IoT-based water dispensing system built using Arduino, RFID, an LCD display, an ultrasonic sensor, and a water pump. The system identifies users through RFID and controls water dispensing automatically."
                />

                <ProjectCard
                    image="/images/project2.jpg"
                    alt="Quiz App"
                    title="Quiz App"
                    description="Quiz Website is an interactive web project developed using HTML, CSS, and JavaScript. It allows users to answer multiple-choice questions, navigate between questions, and view their final score."
                />

                <ProjectCard
                    image="/images/project3.jpg"
                    alt="Student Dashboard"
                    title="Student Dashboard"
                    description="Student Dashboard is a web-based project developed using HTML, CSS, and JavaScript. It provides students with a centralized platform to view their profile, attendance, marks, timetable, assignments, and upcoming activities. The project focuses on creating a user-friendly and organized interface for managing academic information."
                />

            </div>
        </section>
    );
}

export default Projects;