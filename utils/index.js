
const paragraphGenerator = () => {
    let paragraphs = '';
    const paragraphLimit = 50;

    for (let i = 1; i <= paragraphLimit; i++) {
        paragraphs += '<p>'+i+' Soy ';
        if (i % 2 === 0) paragraphs += 'Par!</p>';
        else paragraphs += 'Impar!</p>';
    }

    return paragraphs;

}


const htmlGenerator = () => {
    const paragraphs = paragraphGenerator();
    const index = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pares e Impares</title>
        </head>
        <body>
            ${paragraphs}
        </body>
        </html>
    `;

    return index;

};

module.exports = {
    htmlGenerator,
}