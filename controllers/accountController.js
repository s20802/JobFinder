exports.showAccountList = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\account\\account-list', { navLocation: 'acc' });
}

exports.showAddAccountForm = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\account\\form', { navLocation: 'acc' });
}

exports.showAccountDetails = (req, res, next) => {
    res.render('C:\\Users\\kubak\\tin-projekt-kowalski-s20802\\views\\pages\\account\\account-details', { navLocation: 'acc' });
}