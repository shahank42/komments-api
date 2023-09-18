CREATE TABLE `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text NOT NULL,
	`content` text NOT NULL,
	`time` text DEFAULT CURRENT_TIME,
	`date` text DEFAULT CURRENT_DATE,
	`upvotes` integer DEFAULT 0
);
