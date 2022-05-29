const moment = require('moment');

const currentDate = new Date();
const formatDate = moment(currentDate).format('MMMM Do YYYY, h:mm:ss a');

console.log(formatDate);