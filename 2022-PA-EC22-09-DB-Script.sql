create database daugia1;
use daugia1;



CREATE TABLE catergory (
   Id int NOT NULL,
  catergoryname varchar(50) NOT NULL,
  PRIMARY KEY (Id)
) ;
CREATE TABLE product (
  Id int NOT NULL,
  ProductName varchar(50) NOT NULL,
  PriceNow int  NOT NULL,
  PricePay int NOT NULL,
  TimeUp datetime NOT NULL,
  Timeout datetime NOT NULL,
  Status varchar(50) NOT NULL,
  TurnPay int NOT NULL,
  Detail text  NOT NULL,
  id_category int NOT NULL,
  PRIMARY KEY (Id),
  CONSTRAINT fk_product_id_sanpham
  FOREIGN KEY (id_category)
  REFERENCES catergory (Id)
);
CREATE TABLE  images (
  IdProduct int NOT NULL,
  Image1 varchar(50) NOT NULL,
  Image2 varchar(50) NOT NULL,
  Image3 varchar(50) NOT NULL,
  CONSTRAINT FK_img_product
  FOREIGN KEY (IdProduct)
  REFERENCES product (Id)
);
CREATE TABLE users (
  Email varchar(50) NOT NULL,
  PassWord varchar(50) NOT NULL,
  FullName varchar(50)  NOT NULL,
  Numberphone varchar(50)  NOT NULL,
  Address varchar(50)  NOT NULL,
  Sex bit NOT NULL,
  Rating int NOT NULL,
  isAdmin bit NOT NULL,
  PRIMARY KEY (Email)
);
CREATE TABLE  trans (
   Id int NOT NULL,
   IdProduct int NOT NULL,
   Email varchar(50) NOT NULL,
  Address varchar(50) NOT NULL,
   Status varchar(50) NOT NULL,
   Total int NOT NULL,
  Date datetime NOT NULL,
   PRIMARY KEY (Id),
  CONSTRAINT fk_product_id
  FOREIGN KEY (IdProduct)
  REFERENCES product (Id),
  CONSTRAINT fk_user_email
  FOREIGN KEY (Email)
  REFERENCES users (Email)
);





