function component() {
    const element = document.createElement('div');

    element.innerHTML = 'hello webapck'

    return element;
}

document.body.appendChild(component());