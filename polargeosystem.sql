-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2015-12-14 07:59:20
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `polargeosystem`
--

-- --------------------------------------------------------

--
-- 表的结构 `imagesDataSet`
--

CREATE TABLE `imagesDataSet` (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `imageName` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `resultsData` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `site` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `batch` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `menuitems`
--

CREATE TABLE `menuitems` (
  `id` varchar(100) NOT NULL,
  `name` varchar(45) NOT NULL,
  `parent` varchar(100) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `submenu` varchar(255) DEFAULT NULL,
  `data` text,
  `itemtype` varchar(20) DEFAULT NULL,
  `datasetId` varchar(30) DEFAULT NULL,
  `dataSetType` varchar(50) CHARACTER SET utf32 COLLATE utf32_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `menuitems`
--

INSERT INTO `menuitems` (`id`, `name`, `parent`, `icon`, `submenu`, `data`, `itemtype`, `datasetId`, `dataSetType`) VALUES
('1', 'root menu', NULL, '/icon_root.png', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('2', 'polar menu2', '1', '/img/002.png', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('3', 'sub menu 3', '4', 'menu4.jpg', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('4', 'polar menu', NULL, '/img/001.png', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('5', 'sub menu 5', '2', 'test.jpg', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('7', 'sub menu 6', '5', 'menuItem6.jpg', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('9', 'sub menu 9', '4', 'menu9.jpg', NULL, '{"description":"desc test","createtime":"2015-10-11","datatype":"position-property"}', NULL, NULL, NULL),
('ce711080-a0b1-11e5-a343-79ed39c3f027', 'qweee', '9', '', NULL, '{"description":"test for uuid","createtime":"2015-12-11T16:00:00.000Z"}', 'qweee', '345', NULL),
('42b17600-a0d6-11e5-9fe3-6bb302fa7510', 'test new 1', '9', '', NULL, '{"description":"this is just for testing","createtime":"2015-12-11T16:00:00.000Z"}', NULL, '34', NULL),
('75e42680-a0d6-11e5-9fe3-6bb302fa7510', 'test new 2', '42b17600-a0d6-11e5-9fe3-6bb302fa7510', '', NULL, '{"description":"adfasdfsdf","createtime":"2015-12-11T16:00:00.000Z"}', NULL, '12', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `spaceServicesDataSet`
--

CREATE TABLE `spaceServicesDataSet` (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
