var app;
window.onload = function() {
    app = new Application();

    new Rect(200, 100, 100)
        .setPosition(160, 160)
        .addChildTo(app.currentScene)
        .on("enterframe", function() {
        });
};
