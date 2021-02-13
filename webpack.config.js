const path = require('path');

module.exports = {
    entry: './components/index.js',
    output: {
        filename: 'sway-components.js',
        path: path.resolve(__dirname, '.'),
    },
};