export function WaitError() {
    if (!(this instanceof WaitError)) {
        return new WaitError();
    }
}
WaitError.prototype = {
    __proto__: Error.prototype,
    constructor: WaitError
};
