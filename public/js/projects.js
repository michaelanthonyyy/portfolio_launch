$(document).ready(function () {


    $("#launchModalOne").click(function () {

        $(".One").addClass("is-active");

    });

    $("#launchModalTwo").click(function () {

        $(".Two").addClass("is-active");

    });

    $("#launchModalThree").click(function () {

        $(".Three").addClass("is-active");

    });

    $(".delete").click(function () {

        $(".modal").removeClass("is-active");

    });

});