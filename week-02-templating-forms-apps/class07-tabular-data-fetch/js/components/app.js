import contactsApi from '../contact-api.js';
import contactsTable from './contacts-table.js';

// let's get the inital data
const contacts = contactsApi.getAll();

contactsTable.init(contacts);