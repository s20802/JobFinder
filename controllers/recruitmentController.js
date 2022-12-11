exports.showRecruitmentList = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\recruitment\\recruitment-list.ejs', {navLocation: 'rec'});
}

exports.showAddRecruitmentForm = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\recruitment\\form.ejs', {navLocation: 'rec'});
}

exports.showRecruitmentDetails = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\recruitment\\recruitment-details.ejs', {navLocation: 'rec'});
}