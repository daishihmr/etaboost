var app;
window.onload = function() {
    app = new Application();

    var scene = app.currentScene;

    new Rect(200, 50, 50)
        .setPosition(160, 160)
        .addChildTo(scene)
        .glow();

    new Rect(200, 40, 40)
        .setPosition(160, 260)
        .addChildTo(scene)
        .glow();

    new Fighter(200, 40, 40)
        .setRotation(Math.PI * 0.5)
        .setPosition(160, 60)
        .addChildTo(scene)
        .glow(undefined, 1.5)
        .on("enterframe", function(e) {
            var kb = e.params.app.keyboard;
            var vector = kb.vector();
            this.x += vector.x * 2;
            this.y += vector.y * 2;
        });

    var map = new Map([
        [  1,  0,  -1,  0 ]
    ]).addChildTo(scene);
};
