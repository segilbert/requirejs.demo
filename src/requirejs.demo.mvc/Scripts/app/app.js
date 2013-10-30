//Global module that is always executed
define(["jquery", "app/services/logger"], function ($, logger) {
    return {
        init: function () {
            $(function () {
                logger.log("Leverage RequireJS in ASP.NET MVC", "app.init");
            });
        }
    };
});