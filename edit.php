<?php
$json = isset( $_GET['json'] ) ? $_GET['json'] : false;
  
if( $json === "add" ){
  $file = isset( $_POST['file'] ) ? $_POST['file'] : "";
  $data = isset( $_POST['data'] ) ? $_POST['data'] : "";

  $fileContent = json_decode( file_get_contents( $file ), true );

  $fileContent['users'][] = $data;

  file_put_contents( $file, json_encode( $fileContent ) );
  die();
}


if( $json === "remove" ){
  $file = isset( $_POST['file'] ) ? $_POST['file'] : "";
  $index = isset( $_POST['index'] ) ? $_POST['index'] : "";

  $fileContent = json_decode( file_get_contents( $file ), true );

  unset( $fileContent['users'][(int)$index] );

  $fileContent['users'] = array_values($fileContent['users'] );
  
  file_put_contents( $file, json_encode( $fileContent ) );
  die();
}