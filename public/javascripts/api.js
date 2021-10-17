

const loader = document.querySelector('.loader');

async function postApi(path,data) {
    // set display none
    loader.style.display = 'block';
    // console.log(apiConstants.url);
    await fetch(`http://localhost:3000${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        return successHandler(res);
    })
    .catch(err => {
        
        return errorHandler(err);
    });
}


const successHandler = (res) => {
    loader.style.display = 'none';
    console.log(res);
    const link = `${window.location.protocol}://${window.location.hostname}:${window.location.port}`;
    console.log(link);
    window.location.href = '/';
    return res;
}

const errorHandler = (err) => {
    loader.style.display = 'none';
    console.log(err);
    return err;

}
// async function postApi(path,data) {
//     await fetch(`http://localhost:3000${path}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(res => {
//         console.log(JSON.parse(res));
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

export {
    postApi,
};