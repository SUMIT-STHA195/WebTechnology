<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php 
            $title="This is title";//string
            $num=20;//int
            $num1=20.2;//float
            $sumBool=true;//boolean
            echo $sumBool?"Hello World!":$title.$num; //ternary
        ?>
    </title>
    <?php
    include "./session.php"
    ?>
    <?php
        $name="Sudhir";
        $word="Hello World 123 asd";
        $_lang=$_SESSION['language'];
        echo $_lang=="EN"?"English":"nepali";
        echo "The length is: ".strlen($name)."<br/>";
        echo "Total words is: ".str_word_count($word)."<br/>";
        echo "The reverse is: ".strrev($name)."<br/>";
        // if else
        $x=5;
        if($x%2==0){
            echo "x is even"."<br/>";
        }else{
            echo "x is odd"."<br/>";
        }
    ?>
    <?php
    // switch
        function day($choice){
            switch($choice){
                case 1:
                    echo "sunday<br/>";
                    break;
                case 2:
                    echo "monday<br/>";
                    break; 
                case 3:
                    echo "tuesday<br/>";
                    break;
                case 4:
                    echo "wednesday<br/>";
                    break;
                default:
                    echo "invalid number<br/>";
                    break;
            }
        }
        day(2);

        // for loop
        $array=[
            "sumit",
            "diwash",
            "monu",
            "kishor",
            "Sabin"
        ];
        // echo count($array);
        for($x=0;$x<count($array);$x++){
            echo $array[$x]."<br/>";
        }
        session_destroy();
        // while
        $x=0;
        echo "while loop<br/>";
        while($x<count($array)){
            echo $array[$x]."<br/>";
            $x++;
        }
        echo $_SESSION['language'];

    ?>

    <script>
        console.log("<?php echo "Hi"?>")
    </script>
    <style>
        body{
            background:<?php echo "black"?>;
            color:<?php echo "white"?>;
        }
    </style>
</head>
<body>
    <nav><a href="./studentForm.php">student form</a></nav>
    <button style="color:<?php echo "red"; ?>">Click me</button>
</body>
</html>