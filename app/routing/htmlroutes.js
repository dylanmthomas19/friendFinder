// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// Routes
// =============================================================

module.exports = app => {

    // Home page route
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

};