var url = require('./url.js');
console.log("app.js -- запущен");
console.log("Создан 3_commit");
console.error("Error");
var phraze = {	Hello: "Привет", world: "мир"};

function PhrazeName(name)
{
	return phraze[name];
}
console.log("%s , %s!", PhrazeName("Hello"), PhrazeName("world"));
