function romanToInt(s: string): number {
    const values: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total: number = 0;

    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]];

        if (next && current < next) {
            console.log(`Restando ${current} porque ${s[i]} (${current}) < ${s[i+1]} (${next})`);
            total -= current;
        } else {
            console.log(`Sumando ${current}`);
            total += current;
        }

        console.log(`Total acumulado: ${total}`);
        console.log("------------");
    }

    return total;
}


console.log(romanToInt("IX"))