window.addEventListener('load', function(e) {
	console.log('document loaded.');
	init();
});

function init() {
	// console.log("in init()");
	getEvents();
	document.createEventForm.createEvent.addEventListener('click', function(e) {
		e.preventDefault();
		createEvent();
		getEvents();
	});
}

function getEvents() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let events = JSON.parse(xhr.responseText);
					// console.log(events);
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
	let aggregateDiv = document.getElementById('aggregateData');
	let totalEvents = 0;
	let totalCategories = {};
	let countCategories = 0;
	for (let i = 0; i < events.length; i++) {
		// Aggregate data calculation
		totalEvents++;	
		if (!totalCategories[events[i]]) {
			countCategories++;
			totalCategories[events[i].categories] = 1;
		}
		
		// Event data
		let detail = document.createElement('a');
		detail.setAttribute("href", "detail.html?id=" + events[i].id);		
		detail.style.textDecoration = "none";
		let h1 = document.createElement('h1');
		h1.textContent = events[i].title;	
		detail.appendChild(h1);
		dataDiv.appendChild(detail);
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
	
	// Aggregate data display
	let h2 = document.createElement('h2');
	h2.textContent = "There are " + totalEvents + " events across " + countCategories + " categories!";	
	aggregateDiv.appendChild(h2);
}

function createEvent() {
	let form = document.createEventForm;
	let newEvent = {		
	    "title": form.title.value,
	    "description": form.description.value,
	    "coverImage": null,
	    "eventDate": null,
	    "contactEmail": "info@tokenize.com",
	    "eventWebsite": "http://andycarypro.com",
	    "sourceAnnouncement": null,
	    "blockchain": "Ethereum",
	    "marketplace": "OpenSea",
	    "categories": "music",
	    "marketplaceUrl": null,
	    "projectTwitter": null,
	    "projectDiscord": null
	};
	console.log(newEvent); // 
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/events', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status == 201) {
				console.log(xhr.responseText); // 
				let data = JSON.parse(xhr.responseText);
				console.log(data); // 
				displayEvents(data);
			} else {
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let eventObjectJson = JSON.stringify(newEvent);
	xhr.send(eventObjectJson);
	location.href = 'index.html';
}