CREATE DATABASE real_estate;
USE real_estate;

CREATE TABLE Buyer (
   buyer_id VARCHAR(8),
   name VARCHAR(30),
   phone NUMERIC(10,0),
   email VARCHAR(25),
   PRIMARY KEY (buyer_id)   
);

CREATE TABLE Seller (
   seller_id VARCHAR(8),
   name VARCHAR(30),
   phone NUMERIC(10,0),
   email VARCHAR(25),
   PRIMARY KEY (seller_id)   
);

CREATE TABLE Agent (
   agent_id VARCHAR(8),
   name VARCHAR(30),
   phone NUMERIC(10,0),
   email VARCHAR(25),
   PRIMARY KEY (agent_id)   
);

CREATE TABLE Property (
   property_id VARCHAR(8),
   seller_id VARCHAR(8),
   sell_price NUMERIC(7,0),
   upload_date Date,
   status varchar (20) check (status in ('Sold', 'On_Sale')),
   PRIMARY KEY (property_id),
   FOREIGN KEY (seller_id) REFERENCES Seller(seller_id)
);

CREATE TABLE Property_Details (
   property_id VARCHAR(8),
   area VARCHAR(10),
   bedrooms NUMERIC(3),
   swimming_pool NUMERIC(3),
   city VARCHAR(20),
   district VARCHAR(20),
   house_no NUMERIC(4,0),
   imge_link varchar(100),
   PRIMARY KEY (property_id),
   FOREIGN KEY (property_id) REFERENCES Property(property_id) ON DELETE CASCADE
);

CREATE TABLE Transaction (
   transaction_id VARCHAR(8),
   Date date,
   Final_Price numeric(10,2),
   buyer_id VARCHAR(8),
   seller_id VARCHAR(8),
   agent_id VARCHAR(8),
   property_id VARCHAR(8),
   PRIMARY KEY (transaction_id),
   FOREIGN KEY (property_id) REFERENCES Property(property_id),
   FOREIGN KEY (buyer_id) REFERENCES Buyer(buyer_id),
   FOREIGN KEY (seller_id) REFERENCES Seller(seller_id),
   FOREIGN KEY (Agent_id) REFERENCES Agent(agent_id)
);







-- Insert data into Buyer table
INSERT INTO Buyer (buyer_id, name, phone, email)
VALUES 
    ('B0001', 'Amit kuma', 1234567890, 'amitkumar@gmail.com'),
    ('B0002', 'Akanksha', 6397630983, 'akanksha@gmail.com'),
    ('B0003', 'Sumit kumar', 7078897760, 'alice.johnson@gmail.com'),
    ('B0004', 'Sunil kumar', 7779876543, 'sunil@gmail.com'),
    ('B0005', 'Manoj kumar', 8882345678, 'manoj@gmail.com'),
    ('B0006', 'Aanchal', 9993456789, 'aanchal@gmail.com'),
    ('B0007', 'Prince', 7338765432, 'prince@gmail.com');

-- Insert data into Seller table
INSERT INTO Seller (seller_id, name, phone, email)
VALUES 
    ('S0001', 'Kaamni', 9567890123, 'kaamni@gmail.com'),
    ('S0002', 'Bittu', 7890123456, 'bittu@gmail.com'),
    ('S0003', 'Nittu', 8229876543, 'nittu@gmail.com'),
    ('S0004', 'Aman', 9448765432, 'aman@gmail.com'),
    ('S0005', 'Chaman', 9556543210, 'chaman@gmail.com'),
    ('S0006', 'Himanshu', 6665432109, 'himanshu@gmail.com'),
    ('S0007', 'Lavis', 7774321098, 'lavis@gmail.com');

-- Insert data into Agent table
INSERT INTO Agent (agent_id, name, phone, email)
VALUES 
    ('A0001', 'Ajay', 7890123456, 'ajay@gmail.com'),
    ('A0002', 'Vijay', 7456789012, 'vijay@gmail.com'),
    ('A0003', 'Bholu', 9876543210, 'bholu@gmail.com'),
    ('A0004', 'Jyoti', 9560090123, 'jyoti@gmail.com'),
    ('A0005', 'Manpreet', 6543210987, 'manpreet@gmail.com'),
    ('A0006', 'Vaishnavi', 8345678901, 'vaishnavi@gmail.com'),
    ('A0007', 'Jassi', 8765432109, 'jassi@gmail.com');

-- Insert data into Property table
INSERT INTO Property VALUES ('P0001', 'S0001', 510000, '2023-08-05', 'On_Sale');
INSERT INTO Property VALUES ('P0002', 'S0002', 610000, '2023-09-05', 'On_Sale');

INSERT INTO Property 
VALUES 
('P0003', 'S0003', 210000, '2023-07-05', 'On_Sale'),
('P0004', 'S0004', 260000, '2023-08-10', 'On_Sale'),
('P0005', 'S0005', 190000, '2023-09-15', 'On_Sale'),
('P0006', 'S0006', 280000, '2023-10-20', 'On_Sale'),
('P0007', 'S0007', 230000, '2023-11-25', 'On_Sale');



-- Insert data into Property_Details table
INSERT INTO Property_Details (property_id, area, bedrooms, swimming_pool, city, district, house_no, imge_link)
VALUES 
	
	('P0003', '1800 sq ft', 3, 1, 'Chicago', 'Parkland', 9876, 'http://example.com/image3.jpg'),
    ('P0004', '2200 sq ft', 5, 1, 'Houston', 'Midtown', 5432, 'http://example.com/image4.jpg'),
    ('P0005', '1600 sq ft', 4, 0, 'San Francisco', 'Downtown', 6543, 'http://example.com/image5.jpg'),
    ('P0006', '1900 sq ft', 3, 1, 'Miami', 'Beachside', 8765, 'http://example.com/image6.jpg'),
    ('P0007', '2100 sq ft', 4, 1, 'Seattle', 'Suburb', 2345, 'http://example.com/image7.jpg');

insert into Property_Details
values
('P0001', '1900 sq ft', 3, 1, 'Bethlehem', 'Parkland', 9876, 'http://example.com/image3.jpg'),
    ('P0002', '1600 sq ft', 3, 1, 'Chicago', 'Downtown', 9876, 'http://example.com/image3.jpg');
-- Insert data into Transaction table
INSERT INTO Transaction (transaction_id, Date, Final_Price, buyer_id, seller_id, agent_id, property_id)
VALUES 
    ('T0001', '2024-04-19', 240000, 'B0001', 'S0001', 'A0001', 'P0001'),
    ('T0002', '2024-04-20', 290000, 'B0002', 'S0002', 'A0002', 'P0002'),
    ('T0003', '2024-04-21', 270000, 'B0003', 'S0003', 'A0003', 'P0003'),
    ('T0004', '2024-04-22', 310000, 'B0004', 'S0004', 'A0004', 'P0004'),
    ('T0005', '2024-04-23', 250000, 'B0005', 'S0005', 'A0005', 'P0005'),
    ('T0006', '2024-04-24', 330000, 'B0006', 'S0006', 'A0006', 'P0006'),
    ('T0007', '2024-04-25', 290000, 'B0007', 'S0007', 'A0007', 'P0007');



SELECT PD.house_no, PD.city,sell_price
FROM Property P
JOIN Property_Details PD ON P.property_id = PD.property_id
WHERE PD.city = 'Chicago'
AND P.sell_price <=550000 AND P.sell_price>= 100000
AND P.status = 'On_Sale';

SELECT PD.house_no, PD.city
FROM Property P
JOIN Property_Details PD ON P.property_id = PD.property_id
WHERE PD.district = 'Parkland'
AND PD.bedrooms >= 4
AND PD.swimming_pool = 0
AND P.status = 'On_Sale';

SELECT A.name
FROM Agent A
JOIN Transaction T ON A.agent_id = T.agent_id;

-- Average selling price of properties sold in 2004 for each agent
SELECT A.name, AVG(T.final_price) AS avg_selling_price
FROM Agent A
JOIN Transaction T ON A.agent_id = T.agent_id
WHERE YEAR(T.Date) = 2004
GROUP BY A.name;

-- Average time the property was on the market for each agent
SELECT A.name, AVG(DATEDIFF(T.Date, P.upload_date)) AS avg_time_on_market
FROM Agent A
JOIN Transaction T ON A.agent_id = T.agent_id
JOIN Property P ON T.property_id = P.property_id
WHERE YEAR(T.Date) = 2004
GROUP BY A.name;

SELECT PD.imge_link
FROM Property P
JOIN Property_Details PD ON P.property_id = PD.property_id
WHERE P.sell_price = (SELECT MAX(sell_price) FROM Property);

 -- f) Record the sale of a property that had been listed as being available. This entails storing the sales price, the buyer, the selling agent, the buyer’s agent (if any), and the date.
INSERT INTO Transaction (transaction_id, Date, Final_Price, buyer_id, seller_id, agent_id, property_id)
VALUES ('T0004', '2004-04-19', 2200000, 'B0000004', 'S0000004', 'A0000003', 'P0000004');

UPDATE Property
SET status = 'Sold'
where property_id='P0004';

-- g) Add a new agent to the database.
INSERT INTO Agent (agent_id, name, phone, email)
VALUES ('A0009', 'Amit kumar', 9000121232, 'amit@gmail.com');


