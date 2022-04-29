

--
-- Dumping data for table `complains`
--

INSERT INTO `complains` (`id`, `tracking_id`, `postal_code`, `address`, `email`, `phone`, `remarks`, `status`, `created_at`, `updated_at`) VALUES
(2, 'RW005', 'AB1', 'Aberdeen AB10, UK', 'pratheeplove1@gmail.com', '56656', NULL, 'completed', '2021-05-15 23:10:38', '2021-05-15 23:12:02'),
(3, 'RW006', 'BA20', 'Somerset, UK', 'sarujan95@gmail.com', '342567890', 'hi', 'pending', '2021-05-15 23:14:24', '2021-05-15 23:14:24'),
(4, 'RW007', 'B1', 'Baskerville House, Cambridge St, Birmingham B1 2ND, UK', 'gayathri@adage.lk', '86979854756', NULL, 'completed', '2021-05-16 16:53:36', '2021-05-19 12:51:05'),
(5, 'RW008', 'B29', 'Birmingham B29, UK', 'admin@safeenviro.co.uk', '7588615537', 'Demo', 'completed', '2021-05-16 22:49:21', '2021-05-19 12:51:48'),
(6, 'RW009', 'AB1', '2 Morningside Pl, Aberdeen AB10 7NG, UK', 'gayathri@adage.lk', '86799-78786', 'sudgfhpihdf', 'completed', '2021-05-20 09:25:48', '2021-05-20 09:26:51'),
(7, 'RW010', 'AB1', 'Scotland, UK', 'sarujan95@gmail.com', '234567980-', 'hi', 'completed', '2021-06-02 23:24:24', '2021-06-02 23:27:21'),
(8, 'RW011', 'AB15', 'Scotland, UK', 'SARUJAN12@GMAIL.COM', 'F134567890', 'TESTING', 'completed', '2021-06-25 09:41:53', '2021-06-25 09:45:56'),
(9, 'RW012', 'B1', '2 Centenary Square, Birmingham B1 2ND, UK', 'gayathri@adage.lk', '787979898', NULL, 'pending', '2021-06-25 10:23:04', '2021-06-25 10:23:04'),
(10, 'RW013', 'AB1', '2 Morningside Pl, Aberdeen AB10 7NG, UK', 'sarujan95@gmail.com', '324567890', 'test', 'pending', '2021-06-25 13:01:59', '2021-06-25 13:01:59'),
(11, 'RW014', 'AB11', '29 S Esplanade W, Aberdeen AB11 9AA, UK', 'sarujan95@gmail.com', '345678', 'aaaa', 'pending', '2021-06-25 13:08:55', '2021-06-25 13:08:55'),
(12, 'RW015', 'AB12', 'Aberdeen AB12, UK', 'sarujan95@gmail.com', '2354678', 'sdafs', 'pending', '2021-06-25 13:10:31', '2021-06-25 13:10:31'),
(13, 'RW016', 'AB5', 'Huntly, UK', 'sarujan95@gmail.com', '234567890', 'test', 'pending', '2021-06-25 13:30:33', '2021-06-25 13:30:33'),
(14, 'RW017', 'AB2', 'Clifton Rd, Aberdeen AB24 4EN, UK', 'sarujan95@gmail.com', '12345678', 'www', 'pending', '2021-06-25 13:36:34', '2021-06-25 13:36:34'),
(15, 'RW018', 'AB24', '87 Bedford Rd, Aberdeen AB24 3LN, UK', 'sarujan95@gmail.com', '34567980-', 'aaaaa', 'pending', '2021-06-25 13:43:12', '2021-06-25 13:43:12'),
(16, 'RW019', 'AB1', '1 Morningside Pl, Aberdeen AB10 7NG, UK', 'TEST@GMAIL.COM', '0212221212', 'TEST', 'pending', '2021-06-28 13:21:04', '2021-06-28 13:21:04'),
(17, 'RW020', 'BR1', 'Greater London, UK', 'abc@email.com', '9876543211', 'test', 'pending', '2021-09-23 20:39:13', '2021-09-23 20:39:13'),
(18, 'RW021', 'AB1', 'Aberdeen City, UK', 'arshedahmed98@gmail.com', '0773595377', 'Hey', 'completed', '2021-10-08 06:18:20', '2021-10-08 06:18:20'),
(19, 'RW022', 'AB1', '2 Morningside Pl, Aberdeen AB10 7NG, UK', 'arshed.ahmed@co.uk', '0773595377', 'Hoore', 'completed', '2021-10-12 06:21:05', '2021-10-12 06:21:05'),
(20, 'RW023', 'AB1', 'Aberdeen AB10, UK', 'arshedahmed98@gmail.com', '5345356356', 'hey', 'completed', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(21, 'RW025', '71500', '4d, mosque road, Kiringadeniya', 'arshedahmed98@gmail.com', '777380795', 'Hi', 'completed', '2022-02-21 10:05:49', '2022-02-21 10:05:49'),
(22, 'RW026', '71500', '4d, mosque road, Kiringadeniya', 'arshedahmed98@gmail.com', '777380795', 'Hi', 'completed', '2022-02-21 10:08:08', '2022-02-21 10:08:08');

--
-- Triggers `complains`
--
DELIMITER $$
CREATE TRIGGER `complain_id_prefix` BEFORE INSERT ON `complains` FOR EACH ROW BEGIN
  INSERT INTO traking_seq VALUES (NULL);
  SET NEW.tracking_id = CONCAT('RW', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------



--
-- Dumping data for table `complain_images`
--

INSERT INTO `complain_images` (`id`, `complain_id`, `image`, `created_at`, `updated_at`) VALUES
(29, 20, '../src/uploads/1645437171674-photo_2022-01-14 17.07.10.jpeg', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(30, 20, '../src/uploads/1645437279658-pexels-dave-colman-7930056.jpg', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(31, 20, '../src/uploads/1645437279690-photo_2022-01-14 17.07.10.jpeg', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(32, 22, '1645438088473-pexels-anna-shvets-5027791.jpg', '2022-02-21 10:08:08', '2022-02-21 10:08:08');

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`id`, `type`, `email`, `created_at`, `updated_at`) VALUES
(1, 'council', 'gayathri@adage.lk', '2021-06-03 10:19:04', '2021-06-03 10:19:04'),
(2, 'company', 'te@gmail.com', '2021-06-03 10:19:04', '2021-06-03 10:19:04');

-- --------------------------------------------------------



--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_04_16_075124_create_admin_table', 1),
(5, '2021_04_27_162317_create_complain_table', 1),
(6, '2021_04_27_162943_create_complain_image_table', 1),
(7, '2021_05_01_054155_add_email_and_remarks_column_to_complain_table', 1),
(8, '2021_05_03_114723_add_address_field_for_complain_table', 1),
(9, '2021_05_07_034627_add_phone_number_to_complain_table', 1);

-- --------------------------------------------------------

--
-- Dumping data for table `token_redeemed`
--

INSERT INTO `token_redeemed` (`email`, `redeemed_tokens`, `last_redeemed_date`) VALUES
('ard@ard.com', 0.1, '2022-02-23 21:43:02.754'),
('arshedahmed98@gmail.com', 0.15, '2022-03-02 16:03:52.995');

-- --------------------------------------------------------

--
-- Table structure for table `traking_seq`
--


--
-- Dumping data for table `traking_seq`
--

INSERT INTO `traking_seq` (`id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(25),
(26);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--


--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `TxHash`, `Amount`, `Status`) VALUES
(1, '0xf02b4c5e5b2542001cd6325c7ccb092952f493cd461b497c93ee152012351f0d', '100', 'Success'),
(2, '0x529fa8b315a4873374d42f82147e4b39ad7593b8f4aaefa41f6c03b9b06d5183', '200', 'Failed');

-- --------------------------------------------------------


--
-- AUTO_INCREMENT for table `admins`
--
