import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

function trip(data) {
    socket.emit('trip', data);
}

function tripCancel(id) {
    socket.emit('cancel trip', id);
}

function getAvailableTrps(cb) {
    socket.emit('request get available trips');
    socket.on('response get available trips', (availableTrips) => {
        return cb(availableTrips);
    });
}

function joinDriverRoom() {
    socket.emit('join driver');
}

function leaveDriverRoom() {
    socket.emit('leave driver');
}

function tripStatus(cb) {
    socket.on('trip status', ({ confirmed }) => {
        return cb(confirmed);
    });
}

function driverConfirm(id) {
    socket.emit('driver confirm trip', { id, driverId: socket.id });
}

function tripDriverStatus(cb) {
    socket.on('driver trip status', ({ confirmedDriver, userId, trip }) => {
        return cb(confirmedDriver, userId, trip);
    });
}

function confirmedTripForUser(cb) {
    socket.on('user driver', ({ confirmedTrip, driverId }) => {
        return cb(confirmedTrip, driverId);
    });
}

function cancelConfirmedTrip(driverId) {
    socket.emit('cancel confirmed trip', { driverId });
}

function finishConfirmedTrip(userId) {
    socket.emit('finish confirmed trip', { userId });
}

export {
    socket,
    trip,
    getAvailableTrps,
    joinDriverRoom,
    leaveDriverRoom,
    tripCancel,
    tripStatus,
    driverConfirm,
    tripDriverStatus,
    confirmedTripForUser,
    cancelConfirmedTrip,
    finishConfirmedTrip
};