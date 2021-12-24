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
            //echo "db works B) ";
        }catch(PDOException $e){
            echo "db doesn't work " . $e->getMessage();
        }
        return $this->conn;
    }
}
?>