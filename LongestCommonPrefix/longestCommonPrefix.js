"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestCommonPrefix(strs) {
    if (!strs.length)
        return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // quitar última letra
            if (prefix === "")
                return "";
        }
    }
    return prefix;
}
//# sourceMappingURL=longestCommonPrefix.js.map