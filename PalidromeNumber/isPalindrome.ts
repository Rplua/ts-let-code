function isPalindrome(x: number): boolean {
    let str: string = x.toString();
    return str === str.split("").reverse().join("");

};