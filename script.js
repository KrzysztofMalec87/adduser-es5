(function () {
  var file = "file.json";
  var form = document.querySelector("[data-table-form]");

  // load table from json file and init script
  $.ajax({
    dataType: "json",
    url: file,
    success: function (data) {
      buildTable(data);
      removeTableRow();
    },
  });


  function buildTable(jsonData) {
    var usersTable = jsonData.users;
    var tableHeader = jsonData.table;
    var tableContainer = document.querySelector("[data-table-container]");
    var htmlTableConstructor = "";

    htmlTableConstructor += "<table class='table table-striped table-bordered'>";
    htmlTableConstructor += "<thead class='table-dark'><tr>";

    for (let j = 0; j < tableHeader.length; j++) {
      htmlTableConstructor += "<td>" + tableHeader[j] + "</td>";
    }

    htmlTableConstructor += "<td style='width:30px;'><span class='btn btn-secondary btn-sm'>X</span></td>";
    htmlTableConstructor += "</tr></thead>";
    htmlTableConstructor += "<tbody data-table-body>";

    for (var j = 0; j < usersTable.length; j++) {
      htmlTableConstructor += "<tr>";

      for (var i = 0; i < usersTable[j].length; i++) {
        htmlTableConstructor += "<td> " + usersTable[j][i] + "</td>";
      }

      htmlTableConstructor += "<td><button class='btn btn-danger btn-sm' data-table-remove='" + j + "'>X</button></td>";
      htmlTableConstructor += "</tr>";
    }

    htmlTableConstructor += "</tbody>";
    htmlTableConstructor += "</table>";

    tableContainer.innerHTML = htmlTableConstructor;

  }


  function removeTableRowAction() {
    var confirmDelete = confirm("Are you sure you want to delete this record?");
    var getIndex = this.getAttribute('data-table-remove');

    removeRowFromJson(getIndex);

    if (confirmDelete) {
      this.closest("tr").remove();
    }
  }


  function removeTableRow() {
    var rewRemoveBtn = document.querySelectorAll("[data-table-remove]");

    for (var i = 0; i < rewRemoveBtn.length; i++) {
      rewRemoveBtn[i].setAttribute('data-table-remove', i);
      rewRemoveBtn[i].addEventListener('click', removeTableRowAction, false);
    }

  }


  function clearForm() {
    var inputs = form.querySelectorAll("input:not([type='submit'])");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }


  function addRowToJson(arr) {
    $.ajax({
      method: "POST",
      url: "?json=add",
      data: {
        file: file,
        data: arr
      }
    });
  }


  function removeRowFromJson(index) {
    $.ajax({
      method: "POST",
      url: "?json=remove",
      data: {
        file: file,
        index: index
      },
    });
  }


  function addTableRow(e) {
    e.preventDefault();
    var formBody = document.querySelector("[data-table-body]");
    var createTr = document.createElement("tr");
    var tdRow = "";
    var arr = [];

    if (this.formName.value != "" && this.formSurname.value != "" && this.formLocation.value != "" && this.formAge.value != "" && parseInt(this.formAge.value) > 0) {
      tdRow += "<td>" + this.formName.value + "</td>";
      tdRow += "<td>" + this.formSurname.value + "</td>";
      tdRow += "<td>" + this.formLocation.value + "</td>";
      tdRow += "<td>" + this.formAge.value + "</td>";
      tdRow += "<td><button class='btn btn-danger btn-sm' data-table-remove>X</button></td>";

      arr.push(this.formName.value);
      arr.push(this.formSurname.value);
      arr.push(this.formLocation.value);
      arr.push(this.formAge.value);

      createTr.innerHTML = tdRow;

      formBody.appendChild(createTr);

      clearForm();

      removeTableRow();

      addRowToJson(arr);

    } else {
      alert("All fields of the form must be filled out");
    }
  }

  form.addEventListener('submit', addTableRow, false);
})();