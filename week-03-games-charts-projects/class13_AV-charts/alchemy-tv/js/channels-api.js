
let json = window.localStorage.getItem('channels');

let channels = null;

if(json) {
    channels = JSON.parse(json);
} {
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

export default {
    getAll: function() {
        return channels;
    }
};