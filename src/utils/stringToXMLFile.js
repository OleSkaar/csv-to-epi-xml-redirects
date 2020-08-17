const stringToXMLFile = (input) => {
    const element = document.createElement('a');
    const file = new Blob([input], {
        type: 'text/xml',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'customRedirects.xml';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
};

export default stringToXMLFile;
