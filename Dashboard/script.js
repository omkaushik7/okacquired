// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// -----------------

$(document).ready(function () {
  var next = 0;
  $("#add-more").click(function (e) {
    e.preventDefault();
    var addto = "#field" + next;
    var addRemove = "#field" + (next);
    next = next + 1;
    var newIn = ' <div id="field' + next + '" name="field' + next + '"><form class="row g-3 needs-validation" novalidate><div class="col-md-6"><div class=""><label for="validationCustom01" class="form-label">Name of Director</label><input type="text" class="form-control" placeholder="Enter director full name" id="validationCustom01" value="" required><div class="invalid-feedback"> Enter Company name</div></div><div class=""><label for="validationCustom02" class="form-label">Email address</label><input type="email" class="form-control" placeholder="Enter director email address" id="validationCustom02" value="" required><div class="invalid-feedback"> Enter a valid DOB</div></div><div class=""><label for="validationCustom02" class="form-label">Director PAN Card</label><input type="file" multiple class="form-control" placeholder="Enter director email address" id="validationCustom02" value="" required><div class="invalid-feedback"></div> </div></div>    <div class="col-md-6"> <div class=""><label for="validationCustom02" class="form-label">Director Phone number</label><input type="tel" class="form-control" placeholder="Enter director phone number" id="validationCustom02" value="" required><div class="invalid-feedback"></div></div><div class=""><label for="validationCustom02" class="form-label">Director Aadhaar Details</label><input type="file" multiple class="form-control" placeholder="Enter director email address" id="validationCustom02" value="" required><div class="invalid-feedback"></div></div></div></form>';
    var newInput = $(newIn);
    var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
    var removeButton = $(removeBtn);
    $(addto).after(newInput);
    $(addRemove).after(removeButton);
    $("#field" + next).attr('data-source', $(addto).attr('data-source'));
    $("#count").val(next);

    $('.remove-me').click(function (e) {
      e.preventDefault();
      var fieldNum = this.id.charAt(this.id.length - 1);
      var fieldID = "#field" + fieldNum;
      $(this).remove();
      $(fieldID).remove();
    });
  });

});


// ----------------------------







