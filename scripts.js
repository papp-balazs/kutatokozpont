/*
 * Na, ha már ennyire "mélyen" kutakodsz megkérlek arra, hogy ha bármi hibát
 * észreveszel az oldalon, vagy csak szimplán lenne hozzá egy reális ötleted,
 * akkor nyugodtan járulj hozzá az oldal fejlesztéséhez az alábbi Git repon:
 *
 * https://github.com/papp-balazs/kutatokozpont
 */
(async () => {
	const textDecoder = new TextDecoder('iso-8859-2');

	const nationalities = ['Kuvaiti', 'Katari', 'Iraki', 'Iráni', 'Izraeli', 'Jordán', 'Palesztin', 'Szír', 'Arab', 'Ománi', 'Török', 'Jemen', 'Ukrán', 'Üzbég', 'Orosz', 'Kínai'];
	
	const nounsResponse = await fetch('fonevek_vegleges.txt');
	const nounsResponseBuffer = await nounsResponse.arrayBuffer();
	const fetchedNouns = await textDecoder.decode(nounsResponseBuffer);
	const nouns = fetchedNouns.split('\r\n');

	const generatedResearchCenterElement = document.getElementById('generated-research-center');
	const generateButton = document.getElementById('generate-button');

	const generateResearchCenter = () => {
		const nationality = nationalities[Math.floor(Math.random() * nationalities.length)];
		const noun = nouns[Math.floor(Math.random() * nouns.length)];
		const lastWordVowelCount = noun.split(/[ -]/).pop().replace(/[^űáéúőóüöíeuioa]/gi, "").length
		const hyphenOrNot = lastWordVowelCount > 4 ? "-" : ""

		generatedResearchCenterElement.innerHTML = `${nationality}-Magyar ${noun}${hyphenOrNot}kutató Központ`;
	}

	const setViewportHeight = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};

	generateButton.addEventListener('click', generateResearchCenter);
	window.addEventListener('resize', setViewportHeight);

	generateResearchCenter();
	setViewportHeight();
})();
