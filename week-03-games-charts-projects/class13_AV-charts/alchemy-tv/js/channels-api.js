
let json = window.localStorage.getItem('channels');

let channels = null;

if(json) {
    channels = JSON.parse(json);
} 
else {
    channels = createChannels();
}

function createChannels() {
    return [{
        name: 'Main Room',
        video: './assets/videos/mainroom.MOV',
        count: 0
    }, {
        name: 'Classroom',
        video: './assets/videos/classroom.MOV',
        count: 0
    }, {
        name: 'Hallway',
        video: './assets/videos/hallway.MOV',
        count: 0
    }];
}

const channelsApi = {
    getAll() {
        return channels;
    },

    save() {
        window.localStorage.setItem('channels', JSON.stringify(channels));
    }
};

export default channelsApi;