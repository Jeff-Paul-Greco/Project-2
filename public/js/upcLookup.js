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
    $("#new-item-desc").html(`${data.data}&nbsp;--------->&nbsp;<button class="btn btn-success" id="new-item">&plus;
    Add Item</button>`);
    $("#results").removeClass("hidden");
  });
});

$("#new-item").on("click", function(event){
  event.preventDefault();
  console.log("new item button clicked.")

  var newItem = $("#new-item-desc").val().trim();


  // popup modal.
  var modalBody = `
  <form role="form" method="POST" action="">
  <input type="hidden" name="_token" value="">
  <div class="form-group">
    <label class="control-label">Item Description</label>
    <div>
      <input type="text" class="form-control input-lg" name="item-description" id="item-description" value="${newItem}">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label">Quantity</label>
    <div>
      <input type="number" class="form-control input-lg" name="quatity" id="quantity" value="1">
    </div>
  </div>
</form>
`
  $(".modal-body").empty(); //  remove any existing content
  $(".modal-body").append(modalBody); // insert html into modal body

  
});


$("#add-item").on("click",function(){

  var payload = {
    username: "jdoe",
    description: $("#item-description").val().trim(),
    qty: $("#quantity").val().trim(),
    barcode: $("#item-search").val().trim()
  }
  console.log(payload);

  $.ajax({
    method: "POST",
    url: "/api/items",
    data: payload
  }).then(function(response){
    if (response.status(200)){
      alert("Item added successfully.");
    } else {
      alert("Item was not added.")
    }
  });
});