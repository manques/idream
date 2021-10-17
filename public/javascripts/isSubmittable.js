const isSubmittable = (validate, button) => {
    if(!validate) {
        button.setAttribute('disabled', 'disabled');
        button.style.backgroundColor = 'lightgray';
    }else {
        button.removeAttribute('disabled');
        button.style.backgroundColor = '#18a0fb';
    }
}

export {
    isSubmittable
};