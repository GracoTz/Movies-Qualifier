const verify = (req, res, next) => {
    const { name, rating } = req.body;
    if (name == '' || rating == '') res.redirect('/');
    else next();
}

module.exports = {verify};