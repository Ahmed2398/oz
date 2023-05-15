// $.ajax({
//     url: "https://modest-banzai.78-141-219-156.plesk.page/api/get-site-settings",
//     type: "POST",
//     dataType: "json",
//     headers: {
//         "Access-Control-Allow-Origin": "*",
// },
//     contentType: 'application/json',
//     data: {
//       "server_key": "64eb39980a91059d0292e98cac2f7e1b"
//     },
//
//     success: function(response) {
//         // code to execute when the request is successful
//         console.log(response)
//         alert('API called successfully.');
//     },
//     error: function(xhr, status, error) {
//         // code to execute when the request fails
//         alert('API called error.');
//     }
// });
//

// WARNING: For POST requests, body is set to null by browsers.
var data = new FormData();
data.append("server_key", "c04919f13f43b612fff3b76c5d08b2d6");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;


xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://modest-banzai.78-141-219-156.plesk.page/api/get-site-settings");

xhr.send(data);
