(async () => {
	const textDecoder = new TextDecoder('iso-8859-2');

	const nationalities = ['Kuvait', 'Katar', 'Irak', 'Irán', 'Izrael', 'Jordán', 'Palesztin', 'Szír', 'Arab', 'Omán', 'Török', 'Jemen', 'Ukrán', 'Üzbég', 'Orosz', 'Kínai'];
	
	const nounsResponse = await fetch('fonevek_vegleges.txt');
	const nounsResponseBuffer = await nounsResponse.arrayBuffer();
	const fetchedNouns = await textDecoder.decode(nounsResponseBuffer);
	const nouns = fetchedNouns.split('\n');

	const generatedResearchCenterElement = document.getElementById('generated-research-center');
	const generateButton = document.getElementById('generate-button');

	const generateResearchCenter = () => {
		const nationality = nationalities[Math.floor(Math.random() * nationalities.length)];
		const noun = nouns[Math.floor(Math.random() * nouns.length)].slice(0, -1);

		generatedResearchCenterElement.innerHTML = `Magyar-${nationality} ${noun}kutató Központ`;
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
