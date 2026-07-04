const projects=[

{

title:"Portfolio Website",

description:"Full Stack Portfolio",

tech:"HTML CSS JavaScript Node Express MongoDB"

},

{

title:"Blogging Application",

description:"Developed a responsive full-stack blogging platform with secure authentication, RESTful APIs, PostgreSQL database integration, and MVC architecture, focusing on scalable and maintainable backend development.",

tech:"Java Spring Boot PostgreSQL"

},

{

title:"Tourism Guide Website",

description:"Designed and developed a modern full-stack website featuring responsive layouts, interactive user interfaces, client-side form validation, and intuitive navigation to improve usability across devices.",

tech:"HTML CSS JavaScript MySQL PHP"

}

];

const container = document.getElementById("projectContainer");

// Load Projects
fetch("https://portfolio-website-yqtg.onrender.com/api/projects")
.then(response => response.json())
.then(projects => {

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <p>${project.technologies.join(", ")}</p>

            <button onclick="window.open('${project.githubLink}', '_blank')">
                GitHub
            </button>

        </div>

        `;

    });

})
.catch(error => console.log(error));

/*projects.forEach(project=>{

container.innerHTML+=`

<div class="project">

<h3>${project.title}</h3>

<p>${project.description}</p>

<p>${project.tech}</p>

<button>GitHub</button>

</div>

`;

});

document

.getElementById("contactForm")

.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully");

});*/

document
.getElementById("contactForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: "Portfolio",

        message: document.getElementById("message").value

    };

    try {

        const response = await fetch("https://portfolio-website-yqtg.onrender.com/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

    } catch (error) {

        console.log(error);

    }

});

