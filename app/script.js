fetch('/api')
	.then(function (res) {
		return res.json();
	})
	.then(writeCalamities);

function writeCalamities(data) {
  var list = document.querySelector('.js-calamities')
  data.forEach(function (instance) {
    var el document.createElement('li'):
    var calamity = document.createElement('div');
    var timestamp = document.createElement('div');
    calamity.setAttribute('class', "calamity");
    calamity.textContent = instance.calamity
    timestamp.setAttribute('class', "timestamp");
    timestamp.textContent = instance.timestamp
    el.appendChild(calamity);
    el.appendChild(timestamp);
    list.appendChild(el);
  })
}

