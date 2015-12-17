<?php

define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_NAME", "songs");

$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);

if ($_SERVER['REQUEST_METHOD'] === 'GET')
{
    $res = $mysqli->query("SELECT id, author, title FROM songs");
    if (!$res)
    {
        http_response_code(500);
        die();
    }
    $output = [];
    while ($row = $res->fetch_assoc())
    {
        array_push($output, $row);
    }
    echo json_encode($output);

} else if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data['delete'] !== true)
    {
        $statement = $mysqli->prepare("INSERT INTO songs(author, title) VALUES (?, ?)");
        $statement->bind_param('ss', $data['author'], $data['title']);
        if (!$statement->execute())
        {
            http_response_code(500);
            die();
        }
        echo $mysqli->insert_id;
    } else
    {
        $statement = $mysqli->prepare("DELETE FROM songs WHERE id = ?");
        $statement->bind_param('d', $data['id']);
        if (!$statement->execute())
        {
            http_response_code(500);
            die();
        }
    }

}