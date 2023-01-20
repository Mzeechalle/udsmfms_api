var reg = /[a-z]/ig;

exports.validate = (value, regex) => {
    return regex.test(value);
}