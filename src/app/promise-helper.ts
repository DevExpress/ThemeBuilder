export const mutePromise = (promise: Promise<unknown>): void => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if(promise && promise.catch) {
        promise.catch(null);
    }
};
