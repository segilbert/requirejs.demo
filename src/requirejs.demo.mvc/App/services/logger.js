define(['jquery', 'toastr'],
    function ($, toastr) {
        var logger = {
            log: log,
            logError: logError
        };

        return logger;
        
        function log(message, source) {
            logIt(message, null, source, true, 'info');
        }
        
        function logInfo(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'info');
        }

        function logError(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'error');
        }

        function logIt(message, data, source, showToast, toastType) {
            source = source ? '[' + source + '] ' : '';
            if (data) {
                console.log(source, message, data);
            } else {
                console.log(source, message);
            }
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else {
                    toastr.info(message);
                }

            }

        }
    });