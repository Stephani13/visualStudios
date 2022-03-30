// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(function () {
    var colors = ["#3DE056", "#FA9DAD", "#E0AF02", "#075DDE", "#FC7168"]

    setInterval(function () {
        var bgarray = Math.floor(Math.random() * colors.length);
        var selectedcolor = colors[bgarray];
        $("body").css("background", selectedcolor);
    }, 3000);
})