interface User {
	birthYear: number;
}

function caculateAgeOfUser(user: User): number {
	return new Date().getFullYear() - 1990; // Assuming the user was born in 1990
}

caculateAgeOfUser({
	birthYear: 1994
});