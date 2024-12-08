(function () {
    const names = ["John", "Paul", "George", "Ringo", "Jake", "Alice", "Bob", "Jane", "Emily", "Michael"];

    for (const name of names) {
        const firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            goodbyeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})();
