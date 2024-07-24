<?php
    
    function validate($val){
        $validateVal=handleTrim($val);
        $validateVal=sanitizer($validateVal);
        $validateVal=handleSlashes($validateVal);
        return $validateVal;
    }
    function handleSlashes($val){
        $sanitizedVal=stripcslashes($val);
        return $sanitizedVal;
    }
    function sanitizer($val){
        $sanitizedVal=htmlspecialchars($val);
        $sanitizedVal=trim($sanitizedVal);
        return $sanitizedVal;
    }
    function handleTrim($val){
        $sanitizedVal=trim($val);
        return $sanitizedVal;
    }
    // PHP mysql connection
    if($_REQUEST==$_POST){
    $first_name=$_POST['fName'];
    //  $first_name=validate($_POST['fName']);
    $last_name=validate($_POST['lName']);
    $age=validate($_POST['age']);
    $roll=validate($_POST['roll']);
    $connection=new mysqli("172.17.0.3","root","root");
    if($connection->connect_error){
        die('connection failed!!!');
    }
    else{
       echo 'connection successful';
    }
    $sql = 'CREATE DATABASE IF NOT EXISTS student_detail';
    //actual connection starts here
    if($connection->query($sql) == true){
        echo "DATABASE CREATED SUCCESSFULLY!!";
    }
    else{
        echo "FAILED TO CREATE DATABASE!!";
    }
      //mysql config to create table
      $connection1 = new mysqli('172.17.0.3', 'root', 'root',"student_detail" );//test is db 
      //creating new table inside a db
      $table_sql = "CREATE TABLE IF NOT EXISTS students (
          id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          fName VARCHAR(30) NOT NULL,
          lName VARCHAR(30) NOT NULL,
          roll VARCHAR(10),
          age INT(10)
          )";
     if($connection1->query($table_sql) == true){
             $addition_sql=" INSERT INTO students (fName,lName,roll,age) VALUES ('$first_name','$last_name','$roll','$age')";
             if($connection1->query($addition_sql) == true){
                 echo "VALUES ADDED TO TABLE students";
             }
     }
     else{
             echo "FAILED TO CREATE TABLE!!";
     }
    }
    else if($_REQUEST==$_GET){
        // connection with sql
        $_id=$_GET['id'];
        $connection1=new mysqli("172.17.0.3","root","root","student_detail");
    if($connection1->connect_error){
        die('connection failed!!!');
    }
    else{
        echo 'connection successful';
        $sql="SELECT * FROM students WHERE id=$_id";
        // echo $sql;
        $result=$connection1->query($sql);
        $parsed_result=$result->fetch_assoc();
        // echo $sql;
        print_r($parsed_result);
    }  
    
  }
    // echo $first_name;
    // echo $last_name;
    // echo $age;
    // echo $roll;
?>