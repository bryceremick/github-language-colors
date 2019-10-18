var fs = require("fs");
var content = fs.readFileSync(require('path').resolve(__dirname, './colors.json'));
var colors = JSON.parse(content);

exports.findLangColor = function (lang) {
    if (colors.hasOwnProperty(lang)) {
        return colors[lang].color
    }else{
        return "null";
    }
}
