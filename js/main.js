var expansions = [];

function Expansion (name, picture, description, price) {

	this.packname = name;
	this.picture = picture;
	this.description = description;
	this.price = price;

	populateHTML(this);
	pushToArray(expansions, this);

}

function pushToArray(array, item) {

	array.push(item);
}

function populateHTML(object) {

	var myDiv = document.createElement("div");
	var myH2 = document.createElement("h2");
	var myImg = document.createElement("img");
	var myH6 = document.createElement("h6");
	var anotherH4 = document.createElement("h4");
	var myBtn = document.createElement("button");

	myDiv.appendChild(myH2);
	myDiv.appendChild(myImg);
	myDiv.appendChild(myH6);
	myDiv.appendChild(anotherH4);
	myDiv.appendChild(myBtn);

	myDiv.className = "bg-light text-center col-12 mx-auto my-4 p-5"
	myH6.className = "px-lg-5 mx-lg- pb-3"
	anotherH4.className = "m-3"
	myImg.className = "col-lg-7"
	myBtn.className = "btn btn-primary btn-lg"
	document.body.style.backgroundColor = "green"


	myH2.innerText = object.packname;
	myImg.src = object.picture;
	myH6.innerText = "Description: " + object.description;
	anotherH4.innerText = "Price: $" + object.price;
	myBtn.innerText = "Buy Now";
	

	document.getElementsByClassName("row")[0].appendChild(myDiv);

}

new Expansion("The Boomsday Project", "img/boomsday.png", "Can you feel it? That electric tension on the wind, the reek of ozone and Khorium, the distant rumble of explosions; there’s science in the air! Word around the inn is that Dr. Boom has returned to his secret laboratory in the Netherstorm. No one knows exactly what the mad genius will unleash, but a lot of very, VERY strange cards have found their way into decks around here lately: mechanical amalgamations, eerie crystals, revolting, lab-grown monstrosities… the good doctor and his esteemed colleagues are working on something big! Time to venture into the Netherstorm, find the lab, and uncover what these maniacs are up to.", 49.99);
new Expansion("The Witchwood", "img/witchwood.png", "Hush, brave heroes, and take heed; you tread on dangerous ground. See how the light dims all around, and moving shadows creep? The Witchwood calls, but I implore: do not its treasures seek! Stay where it’s safe, pull up a chair, let’s play another round! I see, your minds are quite made up; please hear me importune: Keep your decks close, and your wits sharp…", 49.99);
new Expansion("Kobolds & Catacombs", "img/kobolds.png", "Drawn by tales of untold riches, you have gathered a party of bold adventurers to find fortune in the catacombs. Now, shadows dance as your torches flicker and you descend into the mines. Just then, a gust of wind snuffs out your light. In the sudden dark, you make out a faint glow ahead, coming closer. An all-too familiar cackle echoes through the gloom.", 49.99);
new Expansion("Knights of the Frozen Throne", "img/knights.png", "An icy wind howls outside the inn's walls, but the chill you feel crawling up your spine has little to do with the bitter cold. No deck is safe from the Lich King's evil influence; even the most stalwart champions of the Light have been turned into wicked Death Knights. As the agents of the undead Scourge plague the land, it falls to you to gather your cards, face these vile abominations, and turn their dark powers against them.", 49.99);
new Expansion("Journey to Un'Goro", "img/ungoro.png", "Travel to the forbidding jungles of Un’Goro Crater, where primordial creatures from the dawn of time roam. Here, giant dinosaurs infused with raw magical power mercilessly hunt their prey, prehistoric fauna and flora abound, and unchained elementals run wild with primitive magic. Prepare your decks for the expedition of a lifetime!", 49.99);
new Expansion("Mean Streets of Gadgetzan", "img/gadgetzan.png", "Gadgetzan, the wondrous jewel of Tanaris, reports explosive economic growth and a boom in trade across the board, according to census data released from mayor Noggenfogger’s office. News of the city’s rocket-like ascent comes as no surprise; the recent flux of traders, merchants, businessmen both respectable and otherwise, as well as the daily arrival of more fortune-seekers speaks for itself. Of course, this uptick in activity hasn’t been without its downsides. Many residents complain of increased tension among the movers and shakers of Gadgetzan, which could spill into the streets at any moment… and if it does, you’ll read it here first!", 49.99);
new Expansion("The Grand Tournament", "img/tournament.png", "When the Lich King and his undead Scourge threatened the world, the Argent Crusade called upon Azeroth’s mightiest heroes to prove their mettle in a magnificent tournament. Knights of all races flocked to Northrend, vying for glory in epic battles against fearsome monsters. Though the Lich King’s evil has been vanquished, the Grand Tournament continues… the competitive atmosphere’s just a bit more playful than it used to be.", 49.99);
new Expansion("Goblins vs Gnomes", "img/goblins.png", "Welcome to Goblins vs Gnomes! It’s a Hearthstone expansion, which means you can expect stacks of fresh cards, oodles of unique minions, and countless new ways to play. Use gnomish ingenuity or goblin craftiness to create explosive new strategies, challenge your friends, and defeat your foes.", 49.99);
new Expansion("Whispers of the Old Gods", "img/whispers.png", "For countless millennia, the Old Gods have slept. Now, the time of their awakening draws near; their evil influence has crawled even into the tavern! Can you feel your cards trembling in their decks as the corruption spreads? Some of your old friends have already grown icky masses of tentacles and a downright frightening number of eyeballs!", 49.99);
