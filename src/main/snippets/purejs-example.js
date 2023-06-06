/* Pure JS */

const app = document.getElementById('app');
const header = document.createElement('h1');

const headerContent = document.createTextNode(
    'Good day for us. 👏'
);

header.appendChild(headerContent);
app.appendChild(header); 