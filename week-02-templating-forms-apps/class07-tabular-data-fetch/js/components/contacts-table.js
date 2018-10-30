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
        // contacts.forEach(function(contact) {
        //     const tr = makeRow(contact);
        //     tableBody.appendChild(tr);
        // });

        for(let i = 0; i < contacts.length; i++) {
            const tr = makeRow(contacts[i]);
            tableBody.appendChild(tr);
        }
    },
    update(contacts) {
        // remove all existing rows
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }

        // add new rows
        contactsTable.init(contacts);
    }
};

export default contactsTable;