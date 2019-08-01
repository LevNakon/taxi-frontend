import openSocket from 'socket.io-client';
// const socket = openSocket(process.env.NODE_ENV !== 'production'? 'http://localhost:8080' : 'https://taxi-like-backend.herokuapp.com');
const socket = openSocket('https://taxi-like-backend.herokuapp.com');

/**
 * Socket event that send trip information data.
 * 
 * @param {Object} data 
 */
function trip(data) {
    socket.emit('trip', data);
}

/**
 * Socket event that send user id to cancel trip.
 * 
 * @param {Number} id 
 */
function tripCancel(id) {
    socket.emit('cancel trip', id);
}

/**
 * Callback for updating state with confirmed trip for user status.
 *
 * @callback getAvailableTrpsCallback
 */

/**
 * Take from socket avialable trips.
 * 
 * @param {getAvailableTrpsCallback} cb
 */
function getAvailableTrps(cb) {
    socket.emit('request get available trips');
    socket.on('response get available trips', (availableTrips) => {
        return cb(availableTrips);
    });
}

/**
 * Socket event that join driver to driver room.
 */
function joinDriverRoom() {
    socket.emit('join driver');
}

/**
 * Socket event that delete driver from driver room.
 */
function leaveDriverRoom() {
    socket.emit('leave driver');
}

/**
 * Change trip status in component state.
 *
 * @callback tripStatusCallback
 */

/**
 * Change trip status in component state.
 * 
 * @param {tripStatusCallback} cb
 */
function tripStatus(cb) {
    socket.on('trip status', ({ confirmed }) => {
        return cb(confirmed);
    });
}

/**
 * Socket event that send driver id to confirm trip.
 * 
 * @param {Number} id 
 */
function driverConfirm(id) {
    socket.emit('driver confirm trip', { id, driverId: socket.id });
}

/**
 * Change trip driver status in component state.
 *
 * @callback tripDriverStatusCallback
 */

/**
 * Change trip driver status in component state.
 * 
 * @param {tripDriverStatusCallback} cb
 */
function tripDriverStatus(cb) {
    socket.on('driver trip status', ({ confirmedDriver, userId, trip }) => {
        return cb(confirmedDriver, userId, trip);
    });
}

/**
 * Change trip status in component state by driver.
 *
 * @callback confirmedTripForUserCallback
 */

/**
 * Change trip status in component state by driver.
 * 
 * @param {confirmedTripForUserCallback} cb
 */
function confirmedTripForUser(cb) {
    socket.on('user driver', ({ confirmedTrip, driverId }) => {
        return cb(confirmedTrip, driverId);
    });
}

/**
 * Socket event that cancel trip after driver confirmation.
 * 
 * @param {Number} driverId 
 */
function cancelConfirmedTrip(driverId) {
    socket.emit('cancel confirmed trip', { driverId });
}

/**
 * Socket event that finish trip.
 * 
 * @param {Number} userId 
 */
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