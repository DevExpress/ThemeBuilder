module.exports = {
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
            fs: false,
        }
    }
};
