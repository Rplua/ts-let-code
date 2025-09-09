function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";

    let prefix: string = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // quitar última letra
            if (prefix === "") return "";
        }
    }

    return prefix;
}
