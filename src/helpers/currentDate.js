export default function () {
	let date = new Date();
	let minutes = date.getMinutes();
	let hours = date.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes
	}
	return hours +':'+ minutes +' '+ date.getDate() +'.'+ (date.getMonth()+1) +'.'+ date.getFullYear();
}