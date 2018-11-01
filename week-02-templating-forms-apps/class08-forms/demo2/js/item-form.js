
const form = document.getElementById('mafia-application');
const spaghettiRange = document.getElementById('spaghetti');
const spaghettiDisplay = document.getElementById('spaghetti-display');
const yesKilled = document.getElementById('yes');
const noKilled = document.getElementById('no');
const howMany = document.getElementById('how-many');
const message = document.getElementById('message');

const itemForm = {
    init(onAdd) {
        
        function setSpaghettiDisplay() {
            spaghettiDisplay.textContent = spaghettiRange.value;
        }
        setSpaghettiDisplay();
        spaghettiRange.addEventListener('change', setSpaghettiDisplay);

        yesKilled.addEventListener('change', function() {
            howMany.required = true;
        });

        noKilled.addEventListener('change', function() {
            howMany.required = false;
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // form elements collection
            const elements = form.elements;

            // data object
            const mafiosx = {};
            
            // gather data, ie:
            mafiosx.name = elements.name.value;

            mafiosx.murder = elements.murder.value === 'yes';
            if(mafiosx.murder) {
                const count = parseInt(elements.kills.value);
                if(!isNaN(count)) {
                    mafiosx.kills = count;
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

            if(mafiosx.awesome < 9) {
                message.textContent = 'Whattayou? Some kinda phoney?';
                // by returning, we avoid calling "onAdd" data save below;
                return;
            }
            else {
                message.textContent = '';
            }

            // call the callback with new item
            onAdd(mafiosx);

            // use an onscreen message
            message.textContent = 'Thanks for your interest! We look forward to killing with you!';
            
            form.reset();

        });

    }
};

export default itemForm;