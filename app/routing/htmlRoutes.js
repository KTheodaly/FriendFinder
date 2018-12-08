htmlRoutes = function () {

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


    // app.get("*", function (req, res) {
    //   res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

    ///to get to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};

module.exports = htmlRoutes