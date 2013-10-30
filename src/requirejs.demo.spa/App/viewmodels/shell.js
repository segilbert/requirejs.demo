define(['durandal/system', 'plugins/router', 'services/logger'],
    function (system, router, logger) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }

        function boot() {
            router.mapNav('viewmodels/home');
            router.mapNav('viewmodels/details');
            log('Hot Towel SPA Loaded!', null, true);
            return router.activate('viewmodels/home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });