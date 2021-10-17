
const pageView = (page, res, next) => {
    console.log(page.name);
    return res.render(page.name, { ...page.data});
}

export default pageView;