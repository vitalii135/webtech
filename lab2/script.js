(function () {
    const names = ["John", "Paul", "George", "Ringo", "Jake", "Alice", "Bob", "Jane", "Emily", "Michael"];

    console.log("=== Початковий функціонал: Вивід Hello або Goodbye залежно від першої літери імені ===");
    for (const name of names) {
        const firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            goodbyeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }

    console.log("\n=== Додатковий функціонал: Селекція імен за сумою ASCII-кодів ===");

    const threshold = 500; // Поріг суми ASCII-кодів
    const highAsciiNames = [];
    const lowAsciiNames = [];

    for (const name of names) {
        const asciiSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);

        if (asciiSum > threshold) {
            highAsciiNames.push(name);
        } else {
            lowAsciiNames.push(name);
        }

        console.log(`Ім'я: ${name}, Сума ASCII-кодів: ${asciiSum}`);
    }

    console.log("\nІмена з високою сумою ASCII-кодів (більше 500):", highAsciiNames);
    console.log("Імена з низькою сумою ASCII-кодів (500 або менше):", lowAsciiNames);
})();
