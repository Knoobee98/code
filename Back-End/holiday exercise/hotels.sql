USE jcwd2302_travelbookingapp;

-- GET TOTAL ROOMS EACH HOTEL
SELECT h.id, h.name, SUM(total_rooms) as total_rooms FROM hotels h
JOIN hotels_rooms hr ON h.id = hr.hotels_id
GROUP BY hr.id;

-- GET TOTAL ROOMS BOOKED
SELECT h.name, t.checkIn, t.checkOut FROM transactions t
RIGHT JOIN hotels_rooms hr ON (hr.id = t.hotels_rooms_id AND t.checkIn >= '2022-11-20' AND t.checkOut <= '2022-11-22');


-- CREATE VARIABLE FOR TESTING
SET @searchIn = '2022-12-10', @searchOut = '2022-12-20';

SELECT a.hotels_id, a.hotel_name, b.total_rooms_each_hotels, a.total_room_booked, b.total_rooms_each_hotels - a.total_room_booked as total_room_available
FROM
(
SELECT h.id as hotels_id, h.name as hotel_name, IFNULL(SUM(get_total_room_booked_by_date_range(@searchIn, @searchOut, t.check_in, t.check_out, t.hotels_rooms_id, t.total_room)), 0) as total_room_booked
FROM transactions t
RIGHT JOIN hotels_rooms hr ON hr.id = hr.hotels_id
JOIN hotels h ON h.id = hr.hotels_id
GROUP BY h.id
) as a
CROSS JOIN
(
SELECT h.id as hotels_id, h.name, SUM(total_room) as total_rooms_each_hotels FROM hotels h
JOIN hotels_rooms hr ON h.id = hr.hotels_id
GROUP BY h.id
) as b
ON a.hotels_id = b.hotels_id
GROUP BY a.hotels_id;


-- HOTEL DETAIL
USE jcwd2302_travelbookingapp;

SELECT h.id, h.name, h.location, GROUP_CONCAT(hi.url, '') as images FROM hotels h
JOIN hotels_images hi ON h.id = hi.hotels_id
WHERE h.id = 3;

SELECT hr.id, hr.name, hr.price, GROUP_CONCAT(ri.url, '') FROM hotels_rooms hr
JOIN rooms_images ri ON hr.id = ri.hotelsrooms_id
WHERE hr.hotels_id = 1
GROUP BY hr.id;
