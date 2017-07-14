/**
 * Create Laravel session middleware for Connect.
 * @param {Laravel} laravel
 * @returns {function}
 */
function session(laravel) {
    return (req, res, next) => {
        const id = laravel.readCookies(req.cookies);

        laravel.fetch(id)
            .then(session => {
                req.session = session;
                next();
            })
            .catch(next);
    };
}

module.exports = session;
