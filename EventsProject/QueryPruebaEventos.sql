create database EVENTS_STORE_DB

USE EVENTS_STORE_DB

create table eventos(
idEvento int primary key identity(1,1),
fecha date,
lugar varchar(40),
descripcion varchar(100),
precio decimal(6,2),
estado varchar(10) default 'activo'
)

USE [EVENTS_STORE_DB]
GO

INSERT INTO [dbo].[eventos]
           ([fecha]
           ,[lugar]
           ,[descripcion]
           ,[precio]
           ,[estado])
     VALUES
           ('2024-06-10',
           'Estadio Olimpico Atahualpa',
           'Partido de fútbol: Ecuador vs Argentina',
           12.00,
		   default)
GO

USE [EVENTS_STORE_DB]
GO

UPDATE [dbo].[eventos]
SET estado = 'activo'
WHERE idEvento = 10
GO





create table users(
id_user int primary key identity(1,1),
username varchar(20),
name_user varchar(20),
lastname_user varchar(20),
email_user varchar(50),
password_user varchar (50)
)

insert into users
(username,name_user,lastname_user,email_user,password_user)values
('cmclavijo94','Carlos','Clavijo','cmclavijo@gmail.com','7b2649259b35c6ddd3cade4a59247aa0')



------
create table tickets(
idTickets int primary key identity(1,1),
dateTicket date,
placeTicket varchar(40),
descriptionTicket varchar(100),
)

create table user_role(
idUserRole int primary key identity(1,1),
nameUserRole varchar (20),
stateUserRole int
)

