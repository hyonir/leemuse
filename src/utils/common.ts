export const LocStore = (key: string, value: string) => {
    if (value) {
        value = (typeof value === 'object') ? JSON.stringify(value) : value;
        localStorage.setItem(key, value)
        return true;
    } else {
        const _val = localStorage.getItem(key);
        try {
            return (_val !== null) ? JSON.parse(_val) : null;
        } catch (e) {
            if (_val) {
                if (_val.indexOf('object Object') > -1) {
                    localStorage.removeItem(key);
                    return null;
                }
                return _val;
            }
        }
    }
}