$(document).on("ready", function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();

    let barcode = $("#item-lookup").value;

    $.ajax({
      method: "POST",
      url: "/api/search",
      data: {
        barcode: barcode
      }
    }).then(function(data) {
      let html = `<p>${data.data}</p>`;
      $("#results").append(html);
    });
  });
});
