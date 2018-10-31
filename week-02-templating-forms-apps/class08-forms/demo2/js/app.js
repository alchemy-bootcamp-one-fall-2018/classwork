import itemsApi from './items-api.js';
import itemForm from './item-form.js';

itemForm.init(function(item) {
    itemsApi.add(item);
});

