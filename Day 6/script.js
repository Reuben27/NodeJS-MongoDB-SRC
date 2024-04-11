const mongoose = require("mongoose");
const student = require("./Student");

mongoose.connect("mongodb://localhost:27017/SampleDB");

run();

async function run() {
	try {
		// const student1 = await student.create({
		// 	name: "Anant",
		// 	age: 23,
		// 	grade: "A",
		// 	email: "aa@test.org",
		// 	batch: 2019,
		// 	address: {
		// 		street: "169 St",
		// 		city: "New York",
		// 		state: "NY",
		// 		zip: 10001,
		// 	},
		// 	buddy: '6616ae8c9b1f07ef5200924c',
		// });

		// const student1 = await student.findById("6616aec5462adc0d60118879").populate('buddy');
		// student1.buddy = '6616aee69a85cf601d01a7b8'
		
		// await student1.save();
		// console.log("Student saved successfully");
		// console.log(student1.getFriendName());

		const student1 = await student.getStudentHighestGrade();
		console.log(student1);

		// await student.deleteMany({});
	} catch (error) {
		console.error(error);
	}
}
