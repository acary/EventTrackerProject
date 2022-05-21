window.addEventListener('load', function(e) {
	// console.log('document loaded.');
	init();
});

function init() {
	console.log("in init()");
	showDetails()
	document.editEventForm.updateEvent.addEventListener('click', function(e) {
		e.preventDefault();
		editEvent();
	});
}

function showDetails() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('id')) {
		const id = urlParams.get('id');
		getEvent(id);
	}
}

function getEvent(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/events/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var event = JSON.parse(xhr.responseText);
					console.log(event);
					displayEvent(event);
					// console.log(event)
				}
				else {
					console.log('Event not found.');
					let eventDiv = document.getElementById('detailData');
					let h1 = document.createElement('h1');
					h1.textContent = "Event not found";
					eventDiv.appendChild(h1);
				}
			}
		}
	};
	xhr.send();
}

function displayEvent(event) {
	let dataDiv = document.getElementById('detailData');
	dataDiv.textContent = '';	
	let h1 = document.createElement('h1');
	h1.setAttribute("class", "display-3");
	h1.textContent = event.title;	
	dataDiv.appendChild(h1);
	let blockquote = document.createElement('blockquote');
	blockquote.textContent = event.description;
	dataDiv.appendChild(blockquote);
	let ul = document.createElement('ul');
	let data = [];
	data.push(event.contactEmail);
	data.push(event.categories);
	data.push(event.blockchain);
	data.push(event.eventWebsite);
	for (let i = 0; i < data.length; i++) {
		let li = document.createElement('li');
		li.textContent = data[i];
		ul.appendChild(li);
	}
	dataDiv.appendChild(ul);
}

function editEvent() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get('id');
	let form = document.editEventForm;
	let event = {
		'title': form.title.value,
		'contactEmail': form.contactEmail.value,
		'description': form.description.value,
		'categories': form.categories.value,
		'blockchain': form.blockchain.value,
		'eventWebsite': form.eventWebsite.value,
	};
	// console.log(event);	
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/events/' + id, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status == 201) {
				// console.log(xhr.responseText);
				let data = JSON.parse(xhr.responseText);
				// console.log(data);
				displayEvent(data);
			} else {
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let eventObjectJson = JSON.stringify(event);
	xhr.send(eventObjectJson);
	window.scrollTo(0, 0);
}

function deleteEvent() {
	let choice = confirm("Are you sure?");
	if (choice) {
		console.log("Deleting event");
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id = urlParams.get('id');
		
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/events/' + id), true;
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					// console.log(xhr.responseText);
					let data = JSON.parse(xhr.responseText);
					// console.log(data);
					displayEvent(data);
				} else {
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		};
		xhr.send(null);
		location.href = 'index.html';
	}
	else {
		console.log("Canceled deletion");
	}
}

function goBack() {
	location.href = 'index.html';
}