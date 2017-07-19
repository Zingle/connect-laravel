/**
 * Create Laravel session middleware for Connect.
 * @param {Laravel} laravel
 * @returns {function}
 */
function session(laravel) {
    return (req, res, next) => {
        const id = laravel.readCookies(req.cookies);

        socket.request.sessionId = id;

        socket.request.refreshSession = function() {
            return laravel
                .fetch(this.sessionId)
                .then(session => socket.request.session = session);
        };

        socket.request.refreshSession()
            .then(() => next())
            .catch(next);
    };
}

module.exports = session;
