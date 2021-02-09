try {
    // window.Popper = require('popper.js').default;
    // window.$ = window.jQuery = require('jquery');
    //
    // require('bootstrap');

} catch (e) {}
// require('admin-lte');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
