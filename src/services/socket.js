import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

function trip(data) {
    socket.emit('trip', data);
}

function userResponse(cb) {
    socket.on('user trip', (availableTrips) => {
        return cb(availableTrips);
    });
}

function joinDriverRoom() {
    socket.emit('join driver');
}

function leaveDriverRoom() {
    socket.emit('leave driver');
}

export {
    socket,
    trip,
    userResponse,
    joinDriverRoom,
    leaveDriverRoom
};