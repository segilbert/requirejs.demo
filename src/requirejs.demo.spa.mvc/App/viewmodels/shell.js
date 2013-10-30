define(['durandal/system', 'durandal/app', 'plugins/router', 'services/logger'],
    function (system, app, router, logger) {
        var shell = {   
            activate: activate,
            router: router,
            search: search
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }

        function boot() {
            
            router.map([
                { route: '', moduleId: 'viewmodels/home', nav: true },
                { route: 'details', moduleId: 'viewmodels/details', nav: true }
            ]).buildNavigationModel();

            log('Hot Towel SPA Loaded!', null, true);
            
            return router.activate();
        }
        
        function search() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });