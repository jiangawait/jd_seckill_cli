module.exports = {
    /**
     * 设置cookie
     * @param {string} cookies_str
     * @param {string} domain
     */
    addCookies(cookies_str, domain) {
        let splitCookie = cookies_str.split(";");
        if (splitCookie[splitCookie.length - 1] == " ") {
            splitCookie = splitCookie.slice(0, splitCookie.length - 1);
        }
        const cookies = splitCookie.map((pair) => {
            const name = pair.trim().slice(0, pair.trim().indexOf("="));
            const value = pair.trim().slice(pair.trim().indexOf("=") + 1);
            return { name, value, domain };
        });

        return cookies;
    },
};
