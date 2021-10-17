const create = (req, res, next) => {
    console.log('create');
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
}

export default create;