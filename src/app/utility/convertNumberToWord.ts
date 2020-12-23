export function convertNumberToWord(inputNumber: string) {

    if (parseInt(inputNumber) === 0) {
        return 'Zero';
    }

    const onesUnits: Array<string> = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tensUnits: Array<string> = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const thousandsUnits: Array<string> = ['', 'thousand', 'million'];

    var start: number,
        end: number,
        threeDigitChunks: Array<string>,
        threeDigitChunksLength: number,
        threeDigitIntegerList: Array<number>,
        threeDigitIntegerWords: Array<string>,
        output: string,
        outputCapitalized: string;

    const AND_WORD = 'and';

    inputNumber = inputNumber.toString();

    start = inputNumber.length;
    threeDigitChunks = [];
    while (start > 0) {
        end = start;
        start = Math.max(0, start - 3);
        threeDigitChunks.push(inputNumber.slice(start, end));
    }

    threeDigitIntegerWords = [];

    threeDigitChunksLength = threeDigitChunks.length;

    for (var i = 0; i < threeDigitChunksLength; i++) {

        threeDigitIntegerList = threeDigitChunks[i].split('').reverse().map(parseFloat);

        if (threeDigitIntegerList[1] === 1) {
            threeDigitIntegerList[0] += 10;
        }

        if (thousandsUnits[i]) {
            threeDigitIntegerWords.push(thousandsUnits[i]);
        }

        if (onesUnits[threeDigitIntegerList[0]]) {
            threeDigitIntegerWords.push(onesUnits[threeDigitIntegerList[0]]);
        }

        if (tensUnits[threeDigitIntegerList[1]]) {
            threeDigitIntegerWords.push(tensUnits[threeDigitIntegerList[1]]);
        }

        if (threeDigitIntegerList[0] || threeDigitIntegerList[1]) {

            if (threeDigitIntegerList[2] || (i + 1) < threeDigitChunksLength) {
                threeDigitIntegerWords.push(AND_WORD);
            }
        }

        if (onesUnits[threeDigitIntegerList[2]]) {
            threeDigitIntegerWords.push(onesUnits[threeDigitIntegerList[2]] + ' hundred');
        }

    }

    output = threeDigitIntegerWords.reverse().join(' ');

    outputCapitalized = output[0].toUpperCase() + output.slice(1);

    return outputCapitalized;
}

