// seedBookings.ts

// import {  bookings }  from './schema';
// import { db } from "./index";
// import { faker } from "@faker-js/faker";
// import * as dotenv from "dotenv";
// import { Pool } from "pg";





// const seedBookings = async () => {
//   const bookingEntries = [
//     {
//       user_id: 1,
//       user_name: "John Doe",
//       user_email: "john.doe@example.com",
//       user_contact: "1234567890",
//       item_id: 101,
//       item_name: "Conference Room A",
//       item_image: "conference_room_a.jpg",
//       start_at: new Date("2023-04-01"),
//       end_at: new Date("2023-04-013"),
      
//       status: "confirmed",
//     },
//   /*   {
//       user_id: 2,
//       user_name: "Jane Smith",
//       user_email: "jane.smith@example.com",
//       user_contact: "0987654321",
//       item_id: 102,
//       item_name: "Banquet Hall",
//       item_image: "banquet_hall.jpg",
//       date: "2023-04-02",
//       startAt: "18:00",
//       endAt: "21:00",
//       status: "confirmed",
//     },
//     // Add 8 more entries following the same structure
//     {
//       user_id: 3,
//       user_name: "Alice Johnson",
//       user_email: "alice.johnson@example.com",
//       user_contact: "1122334455",
//       item_id: 103,
//       item_name: "Outdoor Venue",
//       item_image: "outdoor_venue.jpg",
//       date: "2023-04-03",
//       startAt: "12:00",
//       endAt: "15:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 4,
//       user_name: "Bob Brown",
//       user_email: "bob.brown@example.com",
//       user_contact: "2233445566",
//       item_id: 104,
//       item_name: "Executive Suite",
//       item_image: "executive_suite.jpg",
//       date: "2023-04-04",
//       startAt: "10:00",
//       endAt: "12:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 5,
//       user_name: "Charlie Davis",
//       user_email: "charlie.davis@example.com",
//       user_contact: "3344556677",
//       item_id: 105,
//       item_name: "Private Dining Room",
//       item_image: "private_dining_room.jpg",
//       date: "2023-04-05",
//       startAt: "19:00",
//       endAt: "22:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 6,
//       user_name: "Diana Evans",
//       user_email: "diana.evans@example.com",
//       user_contact: "4455667788",
//       item_id: 106,
//       item_name: "Rooftop Bar",
//       item_image: "rooftop_bar.jpg",
//       date: "2023-04-06",
//       startAt: "20:00",
//       endAt: "23:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 7,
//       user_name: "Evan Foster",
//       user_email: "evan.foster@example.com",
//       user_contact: "5566778899",
//       item_id: 107,
//       item_name: "Meeting Room B",
//       item_image: "meeting_room_b.jpg",
//       date: "2023-04-07",
//       startAt: "09:00",
//       endAt: "11:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 8,
//       user_name: "Fiona Green",
//       user_email: "fiona.green@example.com",
//       user_contact: "6677889900",
//       item_id: 108,
//       item_name: "Lecture Hall",
//       item_image: "lecture_hall.jpg",
//       date: "2023-04-08",
//       startAt: "14:00",
//       endAt: "16:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 9,
//       user_name: "George Hill",
//       user_email: "george.hill@example.com",
//       user_contact: "7788990011",
//       item_id: 109,
//       item_name: "Art Gallery",
//       item_image: "art_gallery.jpg",
//       date: "2023-04-09",
//       startAt: "15:00",
//       endAt: "18:00",
//       status: "confirmed",
//     },
//     {
//       user_id: 10,
//       user_name: "Hannah Irvine",
//       user_email: "hannah.irvine@example.com",
//       user_contact: "8899001122",
//       item_id: 110,
//       item_name: "Ballroom",
//       item_image: "ballroom.jpg",
//       date: "2023-04-10",
//       startAt: "17:00",
//       endAt: "20:00",
//       status: "confirmed",
//     }, */
//   ];

//   try {
//     for (const booking of bookingEntries) {
//       await db.insert(bookings).values(booking);
//     }
//     console.log('Seed data inserted successfully.');
//   } catch (error) {
//     console.error('Error inserting seed data:', error);
//   }
// };

// seedBookings();

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { bookings } from "./schema";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development" });
 
if (!("POSTGRES_DATABASE" in process.env))
	throw new Error("POSTGRES_DATABASE not found on .env.development");
 
const main = async () => {
	const client = new Pool({
		connectionString: process.env.POSTGRES_URL,
	});
	const db = drizzle(client);
	const data: (typeof bookings.$inferInsert)[] = [];
 
	// for (let i = 0; i < 20; i++) {
		data.push({
            user_id: 1,
            user_name: "John Doe",
            user_email: "john.doe@example.com",
            user_contact: "1234567890",
            item_id: 101,
            item_name: "Conference Room A",
            item_image: "conference_room_a.jpg",
            start_at: new Date("2023-04-01"),
            end_at: new Date("2023-04-013"),
            // 
            status: "confirmed",
          },);
	// }
 
	console.log("Seed start");
	await db.insert(bookings).values(data);
	console.log("Seed done");
};
 
main();