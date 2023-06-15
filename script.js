function letterCombinations(input) {

	let table = {
        '0': "0",
        '1': "1",
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    }; 

    let sol = [];

    function solve(curIndex, calcstr){
        if(curIndex === input.length){
            sol.push(calcstr);
            return;
        }

        let curchar = input[curIndex];
        for(let i = 0; i < table[curchar].length; i++){
            solve(curIndex + 1, calcstr + table[curchar][i]);
        }
    }

    solve(0, "");

    return sol;
}

module.exports = letterCombinations;
