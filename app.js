

function openAbout() {
    document.getElementById("aboutModal").style.display = "flex";
}

function closeAbout() {
    document.getElementById("aboutModal").style.display = "none";
}

function openService(service) {

    const modal = document.getElementById("serviceModal");

    const title = document.getElementById("serviceTitle");

    const text = document.getElementById("serviceText");


    if (service === "python") {

        title.innerHTML = "🐍 Python Development";

        text.innerHTML = `
            <p>
                I enjoy using Python to develop practical applications
                and solve real-world problems.
            </p>

            <h3>What I Work With</h3>

            <ul>
                <li>Python Programming</li>
                <li>Object-Oriented Programming</li>
                <li>File Handling</li>
                <li>GUI Development</li>
                <li>Application Development</li>
            </ul>

            <h3>Projects</h3>

            <p>
                I have worked on Python-based projects such as an
                Expense Tracker using Tkinter.
            </p>
        `;
    }


    else if (service === "web") {

        title.innerHTML = "🌐 Web Development";

        text.innerHTML = `
            <p>
                I enjoy creating responsive and user-friendly websites
                using modern web technologies.
            </p>

            <h3>Technologies</h3>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Responsive Web Design</li>
            </ul>

            <h3>What I Focus On</h3>

            <p>
                I focus on clean layouts, attractive designs,
                smooth interactions, and a good user experience.
            </p>
        `;
    }


    else if (service === "data") {

        title.innerHTML = "📊 Data Analysis";

        text.innerHTML = `
            <p>
                I am interested in using data to discover useful
                information and meaningful patterns.
            </p>

            <h3>Skills</h3>

            <ul>
                <li>Data Cleaning</li>
                <li>Data Analysis</li>
                <li>Data Visualization</li>
                <li>Python for Data Analysis</li>
            </ul>

            <h3>My Approach</h3>

            <p>
                I enjoy working with data, understanding patterns,
                and presenting information in a clear and meaningful way.
            </p>
        `;
    }


    else if (service === "ai") {

        title.innerHTML = "🤖 AI & Prompt Engineering";

        text.innerHTML = `
            <p>
                I am exploring Artificial Intelligence and learning
                how AI tools can be combined with programming to
                create practical solutions.
            </p>

            <h3>Areas of Interest</h3>

            <ul>
                <li>Artificial Intelligence</li>
                <li>Prompt Engineering</li>
                <li>AI Tools</li>
                <li>Generative AI</li>
                <li>AI-based Applications</li>
            </ul>

            <h3>My Goal</h3>

            <p>
                I want to understand how AI can be used effectively
                and responsibly to build useful applications.
            </p>
        `;
    }


    else if (service === "database") {

        title.innerHTML = "🗄️ Database Management";

        text.innerHTML = `
            <p>
                I am interested in managing and working with structured
                data using database technologies.
            </p>

            <h3>Skills</h3>

            <ul>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Database Design</li>
                <li>Queries</li>
                <li>Data Management</li>
            </ul>

            <h3>What I Learn</h3>

            <p>
                I enjoy understanding how databases store, organize,
                retrieve, and manage information efficiently.
            </p>
        `;
    }


    modal.style.display = "flex";
}


function closeService() {

    document.getElementById("serviceModal").style.display = "none";

}


function openProject(project) {

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectTitle");
    const details = document.getElementById("projectDetails");


    // EXPENSE TRACKER
    if (project === "expense") {

        title.innerHTML = "Expense Tracker";

        details.innerHTML = `
            <h3>Description</h3>
            <p>
                A Python-based application designed to record and
                manage daily expenses in a simple and organized way.
            </p>

            <h3>Technologies Used</h3>
            <p>Python, Tkinter</p>

            <h3>Features</h3>
            <p>
                Expense recording, simple graphical interface,
                and easy expense management.
            </p>

            <h3>What I Learned</h3>
            <p>
                I improved my Python programming, GUI development,
                and problem-solving skills.
            </p>
        `;
    }


    // PERSONAL AI TOOL
    else if (project === "ai") {

        title.innerHTML = "Personal AI Tool";

        details.innerHTML = `
            <h3>Description</h3>
            <p>
                A personal AI-based tool developed during my
                Infosys Springboard AI Empow(h)er Internship.
            </p>

            <h3>Technologies Used</h3>
            <p>
                Python, Streamlit, Artificial Intelligence,
                Prompt Engineering
            </p>

            <h3>Features</h3>
            <p>
                Interactive AI functionality and a
                user-friendly Streamlit interface.
            </p>

            <h3>What I Learned</h3>
            <p>
                I learned how to build AI-based applications,
                use Streamlit, and integrate AI with Python.
            </p>
        `;
    }


    // PORTFOLIO
    else if (project === "portfolio") {

        title.innerHTML = "Personal Portfolio Website";

        details.innerHTML = `
            <h3>Description</h3>
            <p>
                This personal portfolio website is my web development
                project, created to showcase my skills, projects,
                certifications, achievements, and creative interests.
            </p>

            <h3>Technologies Used</h3>
            <p>
                HTML, CSS, JavaScript
            </p>

            <h3>Features</h3>
            <p>
                Responsive design, interactive sections,
                project showcase, certifications, achievements,
                social media links, and resume download.
            </p>

            <h3>What I Learned</h3>
            <p>
                I strengthened my frontend development skills and
                learned how HTML, CSS, and JavaScript work together
                to create an interactive website.
            </p>
        `;
    }


    modal.style.display = "flex";
}


function closeProject() {

    document.getElementById("projectModal").style.display = "none";

}




window.addEventListener("click", function(event) {

    const modal = document.getElementById("projectModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

});




function openCertificate(certificate) {

    const modal =
        document.getElementById("certificateModal");

    const title =
        document.getElementById("certificateTitle");

    const images =
        document.getElementById("certificateImages");


    /* Clear previous certificate */

    images.innerHTML = "";


      

    if (certificate === "python") {

        title.innerHTML =
            "Python Certification";

        

    images.innerHTML = `
        <iframe
            src="Python_Certificate.pdf"
            width="100%"
            height="600px">
        </iframe>
    `;
}
    




    else if (certificate === "ai") {

        title.innerHTML =
            "AI Primer Certification";

       images.innerHTML = `
        <iframe
            src="AI_Primer_Certification.pdf"
            width="100%"
            height="600px">
        </iframe>
        `;
    }


  

    else if (certificate === "prompt") {

        title.innerHTML =
            "Prompt Engineering Certification";

        images.innerHTML = `
        <iframe
            src="Prompt_Engineering-CERTIFICATE.pdf"
            width="100%"
            height="600px">
        </iframe>
            
        `;
    }


  

    else if (certificate === "eda") {

        title.innerHTML =
            "Exploratory Data Analysis";

        images.innerHTML = `

           <h3>Course Completion Certificate</h3>

            <iframe
                src="EDA_Course_759857.pdf"
                class="certificate-pdf"
                width="100%"
                height="600px">

            </iframe>


            <h3> Assessment – Gold Achievement</h3>

            <iframe
                src="EDA_Assesment_163155364.pdf"
                class="certificate-pdf"
                width="100%"
                height="600px">
            </iframe>

        `;
    }
        
    


   

    else if (certificate === "thinkathon") {

        title.innerHTML =
            "Thinkathon 2026 Winner";

        images.innerHTML = `
           <iframe
                src="Thinkathon-2026 Winner.pdf"
                class="certificate-pdf"
                width="100%"
                height="600px">
            </iframe>
        `;
    }


   

    else if (certificate === "genai") {

        title.innerHTML =
            "Generative AI Webinar";

        images.innerHTML = `
            <iframe
                src="Generative_spark.pdf"
                class="certificate-pdf"
                width="100%"
                height="600px">
            </iframe>
        `;
    }



    modal.style.display = "flex";
}





function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    modal.style.display = "none";
}




window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("certificateModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

});


function openInternship() {

    document.getElementById("internshipCertificate").innerHTML = `
        <iframe
            src="AI_EMPOW(H)ER.pdf"
            class="certificate-pdf"
            width="100%"
            height="600px">
        </iframe>
    `;

    document.getElementById("internshipModal").style.display = "flex";
}


function closeInternship() {

    document.getElementById("internshipModal").style.display = "none";

}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbz2OnVLArTvBUy1wtVJqmC18bot78yUYaPxyUpzizQJ7-D9wg_KMjTG_62OZeTu-o09/exec", {

        method: "POST",

        body: JSON.stringify(data)

    })
    .then(response => response.json())

    .then(result => {

        document.getElementById("formStatus").innerText =
            "Message sent successfully! ✓";

        contactForm.reset();

    })

    .catch(error => {

        document.getElementById("formStatus").innerText =
            "Something went wrong. Please try again.";

        console.error(error);

    });

});