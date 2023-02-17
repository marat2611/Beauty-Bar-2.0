<?php

/* https://api.telegram.org/bot6167218516:AAFVgqmonzyVxQnqwQwKJUt5pmPv6RBiUzI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "6167218516:AAFVgqmonzyVxQnqwQwKJUt5pmPv6RBiUzI";
$chat_id = "-861120026";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

$txt = "";
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>