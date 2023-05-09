INSERT INTO customers VALUES(1, 40,'Иванов И.И', 'ivanov@gmail.com', '20.02.1983');

INSERT INTO customers (age, name, email, date_birthday)
VALUES
(28, 'Васильев А.К.', 'sdfsd@ya.ru', '11.08.1989'),
(43, 'Романов З.А.', 'vsdfsdf@rambler.ru', '05.04.1980'),
(37, 'Камышова Т.Г.', 'rfvs@gmail.ru', '20.11.1985'),
(40, 'Никонова Ю.С.', 'qweasd@mail.ru', '17.06.1982'),
(33, 'Петров В.П.', 'petro@mail.ru', '01.03.1990'),
(56, 'Цветков А.Н.', 'asdsca@mail.ru', '23.09.1966');


INSERT INTO orders VALUES(1, 'наушники', 3, 1);

INSERT INTO orders  (name, customerid, quantity)
VALUES
('средство по уходу за кожей', 4, 3),
('телефон', 1, 1),
('часы', 6, 1),
('чашка', 2, 2),
('полотенце', 5, 3),
('ботинки', 7, 1);