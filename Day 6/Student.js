const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
	state: String,
	zip: Number,
});


const studentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	grade: String,
	email: {
		type: String,
		validate: {
			validator: function (v) {
				return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
			},
			message: props => `${props.value} is not a valid email address!`,
		},
		required: true,
		lowercase: true,
	},
	batch: {
		type: Number,
		required: true,
		min: 2015,
		max: 2025,
	},
	address: addressSchema,
	createDate: {
		type: Date,
		default: Date.now,
		immutable: true,
	},
	updateDate: {
		type: Date,
		default: Date.now,
	},
	buddy: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'students',
	},

});

studentSchema.methods.getFriendName = function () {
	return this.buddy.name;
};

studentSchema.statics.getStudentHighestGrade = async function () {
	const student = await this.findOne().sort({ grade: 1 });
	return student;
};

studentSchema.pre('save', function (next) {
	this.updateDate = Date.now();
	next();
});

module.exports = mongoose.model('students', studentSchema);