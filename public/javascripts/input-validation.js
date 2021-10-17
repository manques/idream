const inputValidation = (event, input) => {
    const { id, value, type, validationMessage, validity } = event.target;
    return true;
}

export {
    inputValidation
};