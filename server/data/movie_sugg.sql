-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 25, 2021 alle 13:05
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
-- Struttura della tabella `movies`
--

CREATE TABLE `movies` (
  `title` varchar(50) NOT NULL,
  `year` int(50) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `mood` varchar(50) NOT NULL,
  `rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `movies`
--

INSERT INTO `movies` (`title`, `year`, `genre`, `mood`, `rating`) VALUES
('Forrest gump', 1994, 'Drama', 'Intense', 8),
('Il padrino', 1972, 'Action', 'ThrillingThrilling', 9),
('In the mood for love', 2000, 'Romance', 'Romantic', 7.5),
('La città incantata', 2001, 'Adventure', 'Touching', 8),
('Matrix', 1999, 'Sci-Fi', 'Thought-provoking', 8),
('Parasite', 2019, 'drama', 'Intense', 8),
('Phantom thread', 2018, 'Romance', 'Romantic', 7.5),
('Pulp fiction', 1994, 'Action', 'Funny', 8.5),
('Shining', 1980, 'horror', 'Intense', 8);

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
('babbonatale', 'babbo@natale.com', '25dic'),
('sara', 'sara', 'saradegra@gmail.com');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `movies`
--
ALTER TABLE `movies`
  ADD UNIQUE KEY `title` (`title`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
