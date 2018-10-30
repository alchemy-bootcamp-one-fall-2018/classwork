import html from '../html.js';

const tableBody = document.getElementById('contacts-body');

function makeRow(contact) {
    return html`<tr>
        <td>${contact.name.first}</td>
        <td>${contact.name.last}</td>
        <td>${contact.isActive}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td>${contact.tags.join(', ')}</td>
    </tr>`;
}

const contactsTable = {
    init(contacts) {
        // array method???
        for(let i = 0; i < contacts.length; i++) {
            const tr = makeRow(contacts[i]);
            tableBody.appendChild(tr);
        }
    }
};

export default contactsTable;