const form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#project').value;

    if(!name || !email || !message) {
        alert('Please fill the required fields first');
    }else {
        const params = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#project').value
        }

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
            alert('Your message sent successfully');
        })
        .catch((err) => console.log(err));
    }
})