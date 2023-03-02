
async function getData() {
    const response = await fetch('file.json');
    const data = await response.json();
    return data.courses;
}


function createElement(data, parent){
   data.forEach(element => {
    const listItem = document.createElement('li');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    title.textContent = element.title;
    description.textContent = element.description;

    listItem.appendChild(title);
    listItem.appendChild(description);
    parent.appendChild(listItem);

    if(Array.isArray(element.children) && element.children.length > 0){
        const ul = document.createElement('ul');
        listItem.appendChild(ul);
        createElement(element.children, ul);
    }

   });
}

async function init(){
    const coursesData = await getData();
    const DomEl = document.getElementById('courses');
    createElement(coursesData, DomEl);
}
init()

