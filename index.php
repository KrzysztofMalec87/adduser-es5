<?php include('edit.php');?>
<!DOCTYPE html>
<meta charset="UTF-8">
<title>TABLE</title>
<link href="http://www.krzysztofmalec.com/wp-content/themes/bluestudio_v2/dist/assets/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  <div class="container mb-3 table-container" data-table-container></div>
  <form action="" method="POST" class="container" data-table-form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" name="formName">
      </div>
      <div class="col">
        <input type="text" class="form-control" name="formSurname">
      </div>
      <div class="col">
        <input type="text" class="form-control" name="formLocation">
      </div>
      <div class="col">
        <input type="number" class="form-control" name="formAge">
      </div>
      <div class="col">
        <input type="submit" class="btn btn-info w-100" name="formSubmit" value="Add">
      </div>
    </div>
  </form>
  <script src='http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js?ver=2.0.0'></script>
  <script src='script.js'></script>
</body>
</html>