fetch("http://worldtimeapi.org/api/ip")
.then(response => {
	return response.json();
})
.then(json => {
	const teste = json.datetime;
	const timezone = json.timezone;
	const timezoneFormat = json.timezone;
	const cidade = timezoneFormat.normalize("NFD").replace(/[^a-zA-Zs]/g, " ").match(/\ \w{3}\ \w{5}/);
	const dayWeek = json.day_of_week;
	const dayYear = json.day_of_year;
	const weekNumber = json.week_number;
	let tempoApi = teste.match((/\d{2}\:\d{2}/));
	let hora = teste.match((/\d{2}\:/));
	let texto = tempoApi[0];
	$('.tempo').text(texto);
	$('.local').text("In " + cidade);
	$('.cidade').text(timezone);
	$('.dayWeek').text(dayWeek);
	$('.dayYear').text(dayYear);
	$('.weekNumber').text(weekNumber);
	if(hora >= '18:'){
		$('.title').text("Good evening, it's currently");
		$('.fundoClock').attr('src', 'milky-way-984050_1280.jpg');
		$('.clockContainerInfos').removeClass('clockContainerInfosDay');
	}else if(hora >= '05:'){
		$('.title').text("Good Morning, it's currently");
		$('.fundoClock').attr('src', 'mount-fuji-2305606_1280.jpg');
		$('.clockContainerInfos').addClass('clockContainerInfosDay');
}})