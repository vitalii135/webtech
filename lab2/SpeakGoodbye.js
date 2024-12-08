(function (window) {
    const goodbyeSpeaker = {};
    const speakWord = "Goodbye";

    goodbyeSpeaker.speak = function (name) {
        console.log(`${speakWord} ${name}`);
    };

    window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
