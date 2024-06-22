// Import fs module
import * as fs from 'fs';

function generateBigBangArray(): string[] {
    let result: string[] = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            result.push('BIG BANG'); 
        } else if (i % 3 === 0) {
            result.push('BIG'); 
        } else if (i % 5 === 0) {
            result.push('BANG'); 
        } else {
            result.push(i.toString()); 
        }
    }
    return result;
}

const bigBangArray = generateBigBangArray();

// Convert into Json format
const jsonOutput = JSON.stringify(bigBangArray, null, 2);

// Write the output
fs.writeFile('output.json', jsonOutput, 'utf-8', (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Output has been written to output.json');
    }
});
