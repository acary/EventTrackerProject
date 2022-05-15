window.addEventListener('load', function(e) {
	console.log('document loaded.');
	init();
});

function init() {
	console.log("in init()");
	getEvents();
}

function getEvents() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let events = JSON.parse(xhr.responseText);
					console.log(events);
					displayEvents(events);
				}
				else {
					console.log('Events not found.');
					let eventDiv = document.getElementById('eventData');
					let h1 = document.createElement('h1');
					h1.textContent = "Events not found";
					eventDiv.appendChild(h1);
				}
			}
		}
	};
	xhr.send();
}

function displayEvents(events) {
	let dataDiv = document.getElementById('eventData');
	dataDiv.textContent = '';
	
	for (let i = 0; i < events.length; i++) {
		let h1 = document.createElement('h1');
		h1.textContent = events[i].title;
		dataDiv.appendChild(h1);
	
		let blockquote = document.createElement('blockquote');
		blockquote.textContent = events[i].description;
		dataDiv.appendChild(blockquote);
	
		let ul = document.createElement('ul');
		let data = [];
		data.push(events[i].categories);
		data.push(events[i].blockchain);
		data.push(events[i].eventWebsite);
		for (let i = 0; i < data.length; i++) {
			let li = document.createElement('li');
			li.textContent = data[i];
			ul.appendChild(li);
		}
		dataDiv.appendChild(ul);
	}
	
}