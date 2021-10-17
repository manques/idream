const parentMenus = document.querySelectorAll('.parentMenus');
const subMenus = document.querySelectorAll('.subMenus');
console.log(parentMenus);

parentMenus.forEach(element => {
    element.addEventListener('click', (event) => handler(event, element));
});
let isOpen = false;
const handler = (event, element) => {
    isOpen = !isOpen;
    console.log(event);
    console.log(element);
    console.log(element.parentNode);
    console.log(element.parentNode.childNodes);
    const subMenusNode = subMenus[0];
    console.log(subMenusNode);
    if(isOpen){
        element.childNodes[1].className = 'fa fa-caret-up';
        subMenusNode.style.display = 'block';
    } else {
        element.childNodes[1].className = 'fa fa-caret-down';
        subMenusNode.style.display = 'none';
    }
}