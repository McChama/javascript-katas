function count(string) {
    let letterCount = {};
    [...string].forEach(letter => {
        if (!(letter in letterCount))
            letterCount[letter] = 0;
        letterCount[letter]++;
    });
    return letterCount;
}