console.log("loaded upcLookup.js");
$("#submit").on("click", function(event) {
  event.preventDefault();

  let barcode = $("#item-search").val().trim();
  $.ajax({
    method: "POST",
    url: "/api/search",
    data: {
      barcode: barcode
    }
  }).then(function(data) {
    console.log(data);
    let html = `<p>${data.data}</p>`;
    $("#results").empty();
    $("#results").append(html);
  });
});
