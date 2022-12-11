exports.showJobOfferList = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\job_offers\\job-offer-list.ejs', {navLocation: 'job'});
}

exports.showAddJobOfferForm = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\job_offers\\form.ejs', {navLocation: 'job'});
}

exports.showJobOfferDetails = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\account\\job-details.ejs', {navLocation: 'job'});
}