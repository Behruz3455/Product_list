//bot token
let telegram_bot_id = "6084042694:AAHBwmkds5IWXdbpoSXDq8E5CLbGUh2WfUM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1862692289; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let u_name, email, message;
let ready = function() {
    u_name = document.getElementById("Name").value;
    email = document.getElementById("Email").value;
    message = document.getElementById("Message").value;
    message = "Ismi: " + u_Name + "\nEmail: " + Email + "\nIzoh: " + Message ;
};
function sendtelegram() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        window.location.href = 'ok.html'
    });
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
    return false;
};