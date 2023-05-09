CREATE TABLE Customers
(
    Id SERIAL PRIMARY KEY,
    Age INTEGER, 
    name VARCHAR(30) NOT NULL,
	email VARCHAR(30),
	Date_birthday timestamp
);
  
CREATE TABLE Orders
(
    Id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
    CustomerId INTEGER,
    Quantity INTEGER,
	FOREIGN KEY (CustomerId) REFERENCES Customers (Id)
);


