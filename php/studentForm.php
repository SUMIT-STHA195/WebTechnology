<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="./formHandler.php">
        <input placeholder="Enter first name" name="fName" type="text">
        <input placeholder="Enter last name" name="lName" type="text">
        <input placeholder="Enter roll no." name="roll" type="number">
        <!-- <input placeholder="Enter first name" name="fName" type="text"> -->
        <input placeholder="Age" name="age" type="text">
        <button type="submit">Submit</button>

    </form>
    <fieldset>
        <legend>Get method</legend>
        <form method="GET" action="./formHandler.php">
         <input type="number" name="id" placeholder="Enter the id"> 
         <button type="submit">Submit</button>  
         </form>
        </fieldset>
</body>
</html>