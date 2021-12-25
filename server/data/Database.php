<?php
class Database {
    private $host = "localhost";
    private $nome = "movie_sugg";
    private $username = "root";
    private $password = "";
    private $conn;

    public function connessione(){
        $this->conn = null;
        try{
            $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->nome.";charset=utf8", $this->username, $this->password);
            //echo "{ DB works }";
        }catch(PDOException $e){
            echo "{ DB doesn't work } " . $e->getMessage();
        }
        return $this->conn;
    }
}
?>