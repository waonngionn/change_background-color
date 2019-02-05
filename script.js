$(function () {
    console.log("ready");
    $("html").keydown(function (event) {
        var keyCode = event.keyCode;
        console.log(keyCode);

        var changeBackgroundColor = function (color) {
            $("html").css("background-color", color);
            $("body").css("background-color", color);
            $("div").css("background-color", color);
            $("span").css("background-color", color);
            $("td").css("background-color", color);
        };

        switch (keyCode) {
            case 65:
                changeBackgroundColor("#f4d7d7");
                break;
            case 66:
                changeBackgroundColor("#f4ded7");
                break;
            case 67:
                changeBackgroundColor("#f4e6d7");
                break;
            case 68:
                changeBackgroundColor("#f4edd7");
                break;
            case 69:
                changeBackgroundColor("#f4f4d7");
                break;
            case 70:
                changeBackgroundColor("#edf4d7");
                break;
            case 71:
                changeBackgroundColor("#e6f4d7");
                break;
            case 72:
                changeBackgroundColor("#def4d7");
                break;
            case 73:
                changeBackgroundColor("#d7f4d7");
                break;
            case 74:
                changeBackgroundColor("#d5f4e6");
                break;
            case 75:
                changeBackgroundColor("#d7f4ed");
                break;
            case 76:
                changeBackgroundColor("#d7f4f4");
                break;
            case 77:
                changeBackgroundColor("#d7edf4");
                break;
            case 78:
                changeBackgroundColor("#d7e6f4");
                break;
            case 79:
                changeBackgroundColor("#d7f4d7");
                break;
            case 80:
                changeBackgroundColor("#d7def4");
                break;
            case 81:
                changeBackgroundColor("#d7d7f4");
                break;
            case 82:
                changeBackgroundColor("#ded7f4");
                break;
            case 83:
                changeBackgroundColor("#e6d7f4");
                break;
            case 84:
                changeBackgroundColor("#edd7f4");
                break;
            case 85:
                changeBackgroundColor("#f4d7f4");
                break;
            case 86:
                changeBackgroundColor("#f4d7ed");
                break;
            case 87:
                changeBackgroundColor("#f4d7e6");
                break;
            case 88:
                changeBackgroundColor("#f4d7de");
                break;
            case 89:
                changeBackgroundColor("#f4d7d7");
                break;
        }
    })
});