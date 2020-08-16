<?php

$consumer_key = 'tMjisTpQEmwLBsWugY0hNl1ZK';
$consumer_secret = 'q2m0RVr2TPmrY2dQvdOppL8uelye9qtvOtKTNByfnoBvgcg4iy';
$access_token = '1294406711361634306-rqQMTa3izu7ALD1R5wyvGIlrxz2QGX';
$access_token_secret = 'JHKmpIj3FXYh2AxTeklAsbmM3FuwG6v7zYbGSUwHRLdG4';

require '../autoload.php';
use Abraham\TwitterOAuth\TwitterOAuth;

$connection = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);
$content = $connection->get("account/verify_credentials");

    
    $name = $_GET["name"];
    $statuses = $connection->get("search/tweets", ["q" => "$name", "count" => 5, "result_type" => "recent", "include_entities" => false]);



echo json_encode($statuses);

?>