const form = document.querySelector("#form");

if (!form) {
  console.log("no form found");
} else {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#project").value;
    const button = document.querySelector("#submit span");
    const loader = document.querySelector(".loader");
    const svgArrow = document.querySelector("#submit .mil-arrow");

    if (!name || !email || !message) {
      alert("Please fill the required fields first");
    } else {
      const params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#project").value,
      };

      button.textContent = "Sending";
      svgArrow.style.display = "none";
      loader.style.display = "block";

      const serviceID = "service_tszjc27";
      const templateID = "template_li06rwr";

      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.querySelector("#name").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#project").value = "";
          console.log(res);
          console.log(params);
          button.textContent = "Sent Successfully";
          svgArrow.style.display = "block";
          loader.style.display = "none";
          setTimeout(() => {
            button.textContent = "Send message";
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          button.textContent = "Error: Refresing the page";
          svgArrow.style.display = "block";
          loader.style.display = "none";
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        });
    }
  });
}

// link redirection forcefully
const links = document.querySelectorAll(".redirect-link");
const website = "https://ghulamabbasbaig.com/";
const behance = "portfolio.html";
const instagram = "https://www.instagram.com/ghulamabasbaig/";
const linkedin = "https://www.linkedin.com/in/ghulamabbasbaig/";
const wa = "https://wa.me/+923087072145";
const project1 = "project-details.html";
const project2 = "project-details-1.html";
const project3 = "project-details-2.html";
const project4 = "project-details-3.html";
const project5 = "project-details-4.html";
const project6 = "project-details-5.html";
const upwork = "https://www.upwork.com/freelancers/~0182e41e18adc055cf";
const petFigmaLink =
  "https://www.figma.com/design/llLKzuv4ggbWMNUQ9YgxUr/Luscious-Cosmetics?node-id=91-7551&t=Q6qG4QQGdKZj34Er-1";

links.forEach(function (link) {
  link.addEventListener("click", () => {
    switch (true) {
      case link.classList.contains("behance"):
        window.open(behance, "_self");
        break;
      case link.classList.contains("instagram"):
        window.open(instagram, "_blank");
        break;
      case link.classList.contains("linkedin"):
        window.open(linkedin, "_blank");
        break;
      case link.classList.contains("wa"):
        window.open(wa, "_blank");
        break;
      case link.classList.contains("website"):
        window.location.href = website;
        break;
      case link.classList.contains("project1"):
        window.open(project1, "_self");
        break;
      case link.classList.contains("project2"):
        window.open(project2, "_self");
        break;
      case link.classList.contains("project3"):
        window.open(project3, "_self");
        break;
      case link.classList.contains("project4"):
        window.open(project4, "_self");
        break;
      case link.classList.contains("project5"):
        window.open(project5, "_self");
        break;
      case link.classList.contains("project6"):
        window.open(project6, "_self");
        break;
      case link.classList.contains("upwork"):
        window.open(upwork, "_self");
        break;
      case link.classList.contains("petFigmaLink"):
        window.open(petFigmaLink, "_self");
        console.log("clicked", click, petFigmaLink);
        break;

      default:
        console.log("default state");
    }
  });
});

links.forEach((link) => {
  link.href = "";
});
