$(document).on("ready", function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();

    let barcode = $("#item-lookup").value;

    $.ajax({
      method: "POST",
      url: "/api/search",
      data: { barcode: barcode }
    }).then(function(data) {
      let html = `
      <div class="form-group">
      <input type="text" id="item-search" class="form-control" aria-describedby="item-search"
        placeholder="Search for items">
    </div>
    <button id="addToInventory" class="btn btn-success float-right">&plus;</button>
  </form>`;
    });
  });
});
