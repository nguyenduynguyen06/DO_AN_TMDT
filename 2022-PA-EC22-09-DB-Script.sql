create database daugia1;
use daugia1;



CREATE TABLE catergory (
   Id int NOT NULL,
  catergoryname varchar(50) NOT NULL,
  PRIMARY KEY (Id)
) ;
insert into catergory (Id,catergoryname)
values 
(1,'Omega'),(2,'Rolex'),(3,'Tissot'),(4,'Fossil'),(5,'Seiko'),(6,'TAG Heuer'),(7,'Citizen');
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
insert into users(Email,PassWord,FullName,Numberphone,Address,Sex,Rating,isAdmin)
values 
('admin@admin.com','123456','Admin','1234567','Thu Duc',1,100,1),
('duynguyen@gmail.com','123','nguyenduynguyen','12345678','Thu Duc',1,100,0);
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





