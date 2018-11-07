// This is where it all goes :)



//= require helper/mavia_files_v.1.1/html/js/jquery-2.2.4.min.js
//= require helper/mavia_files_v.1.1/html/js/common_scripts_min.js
//= require helper/mavia_files_v.1.1/html/js/mwa_qna_wizard_func.js
//= require helper/mavia_files_v.1.1/html/js/velocity.min.js
//= require helper/mavia_files_v.1.1/html/js/main.js
//= require helper/mavia_files_v.1.1/html/js/functions.js


(function ($) {
    "use strict";
 
    ///////////////////////////////////////////////////// Your
    // var venueAddress = "Grand Place, 1000, Brussels"; // Venue

    // var pageName = "home";
    // var pubnub;
    
    /////////////////////////////////////////////////// Adress
 
    var fn = {
 
        // Launch Functions
        Launch: function () {
            // fn.GritterShowResultInfo("ทดสอบ", "ข้อความแสดง");
            // fn.PubNub();
            // fn.Offline_func();
            // fn.CheckPermissions();
            // fn.Apps();

            // flatpickr('#flatpickr-tryme');

        },
        

    };
 
    $(document).ready(function () {
        fn.Launch();
    });
 
})(jQuery);
