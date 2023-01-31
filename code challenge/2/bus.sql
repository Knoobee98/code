USE jcwd2302_bus_api;

SELECT b.id, b.bus, s.bookfrom, s.bookto, t.schedule_date, s.class, s.price, s.total_seats, IFNULL(SUM(t.total_seat), 0) as total_seat_booked,
s.total_seats - IFNULL(SUM(t.total_seat), 0) as total_seat_available FROM transactions t
RIGHT JOIN seats s ON (s.id = t.seats_id AND (t.schedule_date = '2022-12-12'))
JOIN buses b ON b.id = s.bus_id
WHERE s.bookfrom = 'Jakarta' AND s.bookto = 'Bandung'
GROUP BY b.id;