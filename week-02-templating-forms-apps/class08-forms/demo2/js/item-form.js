
const form = document.getElementById('mafia-application');
const spaghettiRange = document.getElementById('spaghetti');
const spaghettiDisplay = document.getElementById('spaghetti-display');
const howMany = document.getElementById('how-many');

const itemForm = {
    init(onAdd) {
        
        function setSpaghettiDisplay() {
            spaghettiDisplay.textContent = spaghettiRange.value;
        }
        setSpaghettiDisplay();
        spaghettiRange.addEventListener('change', setSpaghettiDisplay);

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // form elements collection
            const elements = form.elements;

            // data object
            const mafiosx = {};
            
            // gather data, ie:
            mafiosx.name = elements.name.value;

            howMany.style.background = '';
            mafiosx.murder = elements.murder.value === 'yes';
            if(mafiosx.murder) {
                const count = parseInt(elements.kills.value);
                if(!isNaN(count)) {
                    mafiosx.kills = count;
                }
                else {
                    // set an error message
                    howMany.style.background = 'red';
                    return;
                }
            }

            mafiosx.weapons = [];

            for(let i = 0; i < elements.weapons.length; i++) {
                const weapon = elements.weapons[i];
                if(weapon.checked) {
                    mafiosx.weapons.push(weapon.value);
                }
            }

            mafiosx.role = elements.role.value;

            mafiosx.awesome = parseInt(elements.spaghetti.value);

            // call the callback with new item
            onAdd(mafiosx);

            // use an onscreen message
            alert('thanks for your interest');
            form.reset();

        });

    }
};

export default itemForm;