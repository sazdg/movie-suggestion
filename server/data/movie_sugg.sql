-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 22, 2021 alle 18:43
-- Versione del server: 10.1.38-MariaDB
-- Versione PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie_sugg`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `movie`
--

CREATE TABLE `movie` (
  `title` varchar(50) NOT NULL,
  `year` int(4) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `movie`
--

INSERT INTO `movie` (`title`, `year`, `genre`, `rating`) VALUES
('il padrino', 1072, 'action', 9),
('pulp fiction', 1994, 'action', 8),
('forrest gump', 1994, 'drama', 8),
('matrix', 1999, 'sci-fi', 8),
('la città incantata', 2001, 'adventure', 8),
('parasite', 2019, 'drama', 8),
('alien', 1979, 'sci-fi', 8),
('shining', 1980, 'horror', 8),
('Love actually', 2004, 'romance', 7),
('il padrino', 1072, 'action', 9.1),
('pulp fiction', 1994, 'action', 8.8),
('forrest gump', 1994, 'drama', 8.7),
('matrix', 1999, 'sci-fi', 8.6),
('la città incantata', 2001, 'adventure', 8.5),
('parasite', 2019, 'drama', 8.5),
('alien', 1979, 'sci-fi', 8.4),
('shining', 1980, 'horror', 8.4),
('Love actually', 2004, 'romance', 7);

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `nome` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`nome`, `password`, `email`) VALUES
('amministratore', 'amministratore', ''),
('sara', '12345', 'saradegra@gmail.com');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
