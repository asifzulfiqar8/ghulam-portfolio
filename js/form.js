const form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#project').value;
    const button = document.querySelector('#submit span');
    const loader = document.querySelector('.loader');
    const svgArrow = document.querySelector('#submit .mil-arrow');

    if(!name || !email || !message) {
        alert('Please fill the required fields first');
    }else {
        const params = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#project').value
        }

        button.textContent = 'Sending'; 
        svgArrow.style.display = 'none';
        loader.style.display = 'block'

        const serviceID = "service_tszjc27";
        const templateID = "template_li06rwr";
    
        emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#project').value = '';
            console.log(res);
            console.log(params);
            button.textContent = 'Sent Successfully';
            svgArrow.style.display = 'block';
            loader.style.display = 'none';
            setTimeout(() => {
                button.textContent = 'Send message';
            }, 3000);
        })
        .catch((err) => {
            console.log(err);
            button.textContent = 'Error: Refresing the page';
            svgArrow.style.display = 'block';
            loader.style.display = 'none';
            setTimeout(() => {
                window.location.reload(true);
            }, 2000);
        });
    }
})


// link redirection forcefully
const links = document.querySelectorAll('.redirect-link');
const website = 'https://ghulamabbasbaig.com/'
const behance = 'https://www.behance.net/ghulamabbasbaig/'
const instagram = 'https://www.instagram.com/ghulamabasbaig/'
const linkedin = 'https://www.linkedin.com/in/ghulamabbasbaig/'
const wa = 'https://wa.me/+923087072145'
const project1 = 'https://www.behance.net/gallery/194599449/Pet-Health-Care-Website-Landing-Page-Design'
const project2 = 'https://www.behance.net/gallery/95927701/Luxury-Beach-Resort-Landing-Page-Website-Ui-Ux-Design'
const project3 = 'https://www.behance.net/gallery/124157415/Influencer-Creative-Marketing-Agency-Landing-Page'
const project4 = 'https://www.behance.net/gallery/169585929/Story-Maker-Reels-App-UIUX-Design-Concept'
const project5 = 'https://www.behance.net/gallery/194912767/Grocery-Store-Website-Design-UI-UX-Design'
const project6 = 'https://www.behance.net/gallery/191900593/Fishing-Mobile-App-UI-UX-Case-Study'


links.forEach(function(link) {
    link.addEventListener("click", () => {

        switch(true) {
			
			case link.classList.contains('behance'):
                window.open(behance, '_blank');
                break;
            case link.classList.contains('instagram'):
                window.open(instagram, '_blank');
                break;
            case link.classList.contains('linkedin'):
                window.open(linkedin, '_blank');
                break;
            case link.classList.contains('wa'):
                window.open(wa, '_blank');
                break;     
            case link.classList.contains('website'):
                window.location.href = website;
                break;  
            case link.classList.contains('project1'):
                window.open(project1 , '_blank');
                break;		
            case link.classList.contains('project2'):
                window.open(project2 , '_blank');
                break;	
            case link.classList.contains('project3'):
                window.open(project3 , '_blank');
                break;	
            case link.classList.contains('project4'):
                window.open(project4 , '_blank');
                break;	
            case link.classList.contains('project5'):
                window.open(project5 , '_blank');
                break;	
			case link.classList.contains('project6'):
                window.open(project6 , '_blank');
                break;	
				
								
            default:
                console.log('default state');
        }
    })
});

links.forEach((link) => {
    link.href = '';
})

