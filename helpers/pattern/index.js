//this file contains all the pattern definitions to be used to validate request strings.

exports.pattern = {
    telephone: /^\d{10}$/,
    username: /^[a-zA-Z\s\d]{5,12}$/,
    password: /^[a-z&A-Z&0-9@-]{8,12}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
}