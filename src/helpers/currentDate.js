export default function () {
	let date = new Date();
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes
	}
	return date.getHours() +':'+ minutes +' '+ date.getDate() +'.'+ (date.getMonth()+1) +'.'+ date.getFullYear();
}