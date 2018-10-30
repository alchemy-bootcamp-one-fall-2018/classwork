import contactsApi from '../contact-api.js';
import contactsTable from './contacts-table.js';
import contactsFilter from './contacts-filter.js';

// let's get the initial data
const contacts = contactsApi.getAll();

// data down!
contactsTable.init(contacts);

// events up! (via callback)
contactsFilter.init(function(nameFilter, tagsFilter) {
    
    let filtered;

    // do we have a filter?
    if(nameFilter || tagsFilter) {
        // yes!, filter based on first or last name
        nameFilter = nameFilter.toLowerCase();
    
        filtered = contacts.filter(function(contact) {
            const hasName = !nameFilter
                || contact.name.first.toLowerCase().includes(nameFilter) 
                || contact.name.last.toLowerCase().includes(nameFilter);

            const hasTag = !tagsFilter || contact.tags.includes(tagsFilter);

            return hasName && hasTag;
        });
    }
    else {
        //no! use the full list
        filtered = contacts;
    }

    // tell the table to update 
    contactsTable.update(filtered);
});