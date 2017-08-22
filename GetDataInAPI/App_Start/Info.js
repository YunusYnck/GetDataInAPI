$(document).ready(function () {
    $("#Login").click(function () {
        var userName = $("#UserName").val();
        var password = $("#Password").val();
        $.ajax({
            url: "",//IP Adress
            type: "POST",
            crossDomain: true, //CORS 
            data: {

                //Fill the Parameters 
            },
            dataType: "json",
            success: function (result) {
                alert("Connected! ");
                localStorage.setItem('Token', JSON.stringify(result));
            },
            error: function (xhr, status, error) {
                alert(status + " " + error);
            }
        });
    });
    $("#Logout").click(function () {
        if (localStorage.getItem('Token') == null) {
            alert("! ");
            return;
        }
        alert("Success Logout ! ");
        localStorage.removeItem('Token');
    });

    $("#Get").click(function () {
        //GET DATA 
        var token = $.parseJSON(localStorage.getItem('Token'));
        if (token == null) {
            alert("!");
            return;
        }
        var accessToken = token.access_token;
        $.ajax({
            url: "",//IP Adress
            type: "GET",
            crossDomain: true,
            dataType: "json",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                "authorization": "Bearer " + accessToken
            },
            success: function (result) {
                document.write("Success!" + result);
            },
            error: function (xhr, status, error) {
                alert(status + " " + error);
            }
        });
        $.ajax({
            url: "",//IP Adress
            type: "POST",
            crossDomain: true,
            dataType: "json",
            headers:
            {
                "accept": "application/json",
                "content-type": "application/json",
                "authorization": "Bearer " + accessToken
            },
            success: function (result) {
                document.write("<br>" + result + "<br>");
            },
            error: function (xhr, status, error) {
                alert(status + " " + error);
            }
        });

    });
});
