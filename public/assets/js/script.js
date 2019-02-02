$(document).ready(function(){

  $("#addContact").on("submit", function(event){
    event.preventDefault();

    $.post("/api/contacts", {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      contactType: $("#contactType").val(),
      phoneNumber: $("#phoneNumber").val().trim(),
      emailAddress: $("#emailAddress").val().trim()
    })
      .then(function(contact) {
        window.location.replace("/");
      });
  });

  $("#filterContacts").on("change",function(){
    var type = $(this).val().toLowerCase();
    window.location.replace(`/${type}`);
  }
  );

  $(".delete").on("click", function(){
    var id = $(this).parents("tr").data("id");
    $.ajax({
      method: "DELETE",
      url: `/api/contacts/${id}`
    }).then(function(contact) {
      window.location.replace("/");
    });
  });

});
