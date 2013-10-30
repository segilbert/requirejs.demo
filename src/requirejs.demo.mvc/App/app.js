//Global module that is always executed
define(["jquery", "services/logger"], function ($, logger) {
    return {
        init: function () {
            $(function () {
                logger.log("Leverage RequireJS in ASP.NET MVC", "app.init");
            });
        }
    };
});