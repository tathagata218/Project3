--TABLES 
--

create database stock_trading;

use database stock_trading;

create table users(
uid int primary key auto_increment,
first_name varchar(30) not null,
last_name varchar(30),
password varchar(30) not null,
money int default 100000, 
email varchar(100) not null unique
);

create table company(
cid int primary key auto_increment,
name varchar(30) not null,
no_shares int not null
);
-- time is in HH:MM:SS format


create table stock_transaction(
transaction_time timestamp,
total_price int,
no_of_shares int,
transaction_type varchar(1),
uid int references users(uid)
);

--transaction type 'B' for buy and 'S' for sell

create table stock_record(
time time not null,
price_per_share int not null,
cid int references company(cid)
);

create table owns_shares_of(
uid int references users(uid),
cid int references company(cid),
no_of_shares int not null
);

