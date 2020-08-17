const urlFormat = /^\/.+/;
const xmlStart = `<?xml version="1.0" encoding="UTF-8"?>
<redirects>
  <urls>`;
const redirect = (oldUrl, newUrl) => `
    <url>
      <old>${oldUrl}</old>
      <new>${newUrl}</new>
    </url>`;
const xmlEnd = `
  </urls>
</redirects>`;

export default function arrayToXml(array) {
    let outputString = xmlStart;
    for (const line of array) {
        if (
            line.data.length > 1 &&
            line.data[0].match(urlFormat) &&
            line.data[1].match(urlFormat)
        ) {
            outputString += redirect(line.data[0], line.data[1]);
        } else {
          console.log('Could not process line:')
          console.log(line)
        }
    }
    outputString += xmlEnd;

    return outputString;
}
