
const handle = (err, req, res, next) => {
    console.log(err);
    const status = err.status || 500;
    const message = err.message || 'server error';
    return res.render('not-found', { title: message, status: status });
}

export default handle;