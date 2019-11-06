$(".delete").on("click", function (id) {
  id = $(this).attr("data-id")
  $.ajax({
    url: "api/items/" + id,
    type: "DELETE"
  });
  reload();
});

$(".update").on("click", function (id) {
  id = $(this).attr("data-id")
  $.ajax({
    url: "api/items/" + id,
    type: "PUT"
  });
  reload();
});

$("#inventory").on("click",function(event){
  event.preventDefault();
  reload();
})

function reload() {
  var userId = window.localStorage.getItem("userId");
  if (userId) {
    $.ajax({
      url: "api/items",
      type: "POST",
      data: {
        userId: userId
      }
    });
    location.reload();

  } else {
    // do nothing for now
  }
}
