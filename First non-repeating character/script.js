'use strict'

function first_non_repeating_letter(string) {
    const str = string.toLowerCase().split('');
    let res = [];
    str.map((item, index) => {
        let test = new Array(...str);
        test.splice(index, 1);

        if (test.indexOf(item) < 0) {
            res.push(string[index]);
        }
    })

    return res[0] || "";
}
console.log(first_non_repeating_letter(''));