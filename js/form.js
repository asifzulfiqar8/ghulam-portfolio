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
        .catch((err) => console.log(err));
    }
})