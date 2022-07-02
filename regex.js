const dateHeaderRegex = /\n{2,3}  \w*, \d{2}\/\d{2}\/\d{4}\n  =+\n{2}/gm;
const justDateRegex = /\d{2}\/\d{2}\/\d{4}/;

module.exports = { dateHeaderRegex, justDateRegex };
