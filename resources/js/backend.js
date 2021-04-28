module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        __(key, replace) {
            let translation, translationNotFound = true

            try {
                translation = key.split('.').reduce((t, i) => t[i] || null, window._translations[window._locale].php)

                if (translation) {
                    translationNotFound = false
                }
            } catch (e) {
                translation = key
            }

            if (translationNotFound) {
                translation = window._translations[window._locale]['json'][key]
                    ? window._translations[window._locale]['json'][key]
                    : key
            }

            if (replace && replace.length >0) {
                var length = replace.length;
                for ( i = 0; i < length; i++ ) {
                    translation = translation.replace(':key', replace[i]);
                }
            }

            return translation
        },

        /**
         * Check Rights
         */
        haveRight(right) {
            if (window._user_data.role == 'Super Admin') {
                return true;
            }
            var rights_arr = right.split('.');
            var arr_len = rights_arr.length;
            if (arr_len > 0) {
                switch (arr_len) {
                    case 1:
                        if (window._rights[rights_arr[0]]) {
                            return window._rights[rights_arr[0]];
                        } else {
                            return;
                        }
                        break;

                    case 2:
                        if (window._rights[rights_arr[0]]) {
                            if (window._rights[rights_arr[0]][rights_arr[1]]) {
                                return window._rights[rights_arr[0]][rights_arr[1]];
                            } else {
                                return;
                            }
                        } else {
                            return;
                        }
                        break;

                    default:
                        return;
                }
            } else {
                return;
            }
        }
    },
}
