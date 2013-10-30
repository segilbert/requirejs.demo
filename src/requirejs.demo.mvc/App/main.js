require.config({
    //baseUrl: "/Scripts/",
    paths: {
        "jquery": "/Scripts/jquery-1.8.2",
        "toastr": "/Scripts/toastr"
        }
});

require(["app", 'toastr', "services/logger"], function (app, toastr, logger) {

    $(document).ready(function () {
       
        // http://codeseven.github.io/toastr/
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        logger.log("RequireJS Demo","main");

        //Initialize app
        app.init();
    });

});