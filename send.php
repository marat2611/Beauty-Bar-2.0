<?php
    $userName = $_POST['userName'];
    $tel = $_POST['tel'];
    $userName = htmlspecialchars($userName);
    $tel = htmlspecialchars($tel);
    $userName = urldecode($userName);
    $tel = urldecode($tel);
    $userName = trim($userName);
    $tel = trim($tel);
    //echo $userName;
    //echo "<br>";
    //echo $tel;
    if (mail("admin@beautyandschool.ru", "Заявка с сайта", "Имя:".$userName., "Тел:".$tel., "From: admin@beautyandschool.ru, \r\n")) {     
        echo "Сообщение успешно отправлено";
        } else {
            echo "При отправке сообщения возникли ошибки";
    }
?>