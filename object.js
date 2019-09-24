var person = {
	first_name : "John",
	last_name : "Doe",
	getFullName: function() {
		return this.first_name + this.last_name;
	}
};

console.log(person.getFullName());

for(let key in person){
	console.log(person[key]);
}
