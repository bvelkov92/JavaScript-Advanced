function editElement(element, match, replacer) {
    
    const currentValue = element.textContent;
    const  matcher = new RegExp(match, 'g');
    element.textContent = currentValue.replace(matcher, replacer);
}
