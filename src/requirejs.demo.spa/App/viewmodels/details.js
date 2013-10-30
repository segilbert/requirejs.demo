define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Details View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Details View Activated', null, 'viewmodels/details', true);
        return true;
    }
    //#endregion
});