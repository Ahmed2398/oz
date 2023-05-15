$.ajax({
    url: "https://modest-banzai.78-141-219-156.plesk.page/api/get-site-settings",
    type: "POST",
    dataType: "json",
    headers: {
        "Access-Control-Allow-Origin":" *"
    },
    contentType: 'application/json; charset=utf-8',
    data: {
      "server_key": "64eb39980a91059d0292e98cac2f7e1b"
    },

    success: function(response) {
        // code to execute when the request is successful
        console.log(response)
        alert('API called successfully.');
    },
    error: function(xhr, status, error) {
        // code to execute when the request fails
        alert('API called error.');
    }
});
