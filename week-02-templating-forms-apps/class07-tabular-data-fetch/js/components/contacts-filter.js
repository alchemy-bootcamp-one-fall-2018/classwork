
// What static DOM does this component need to know about?
const nameInput = document.getElementById('filter-name');
const tagsInput = document.getElementById('filter-tags');

const contactsFilter = {
    // what does this component need from parent?
    init(onFilter) {

        
        // on keypress event, call the onFilter 
        // callback with current value of the input
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, tagsInput.value);
        });
        
        tagsInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, tagsInput.value);
        });

        // same as above, but with single listening function:

        // function handleFilter() {
        //     onFilter(nameInput.value, tagsInput.value);
        // }
        // nameInput.addEventListener('keyup', handleFilter);
        // tagsInput.addEventListener('keyup', handleFilter);
    }
};

export default contactsFilter;