// popover funtionality
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});


// insult randomizer function in event listener
document.getElementById("newBtn").addEventListener("click", function insult() {

	// adj1 array
	var adjOne = [{wrd: "Apish", def: "Foolish; resembling an ape"}, {wrd: "Artless", def: "Crude, unskillful"}, {wrd: "Beslubbering", def: "Smear, smeared; slobbering"}, {wrd: "Calumniating", def: "Uttering maliciously false statements"}, {wrd: "Cautelous", def: "Crafty, deceitful"}, {wrd: "Churlish", def: "Rude, vulgar"}, {wrd: "Coldblooded", def: "Emotionless"}, {wrd: "Concupiscible", def: "Desirous, lustful"}, {wrd: "Covetous", def: "Greedy; envious of the posessions of others"}, {wrd: "Crudy", def: "Thick, as in 'curdy'"}, {wrd: "Cuckoldly", def: "Haplessly victimized"}, {wrd: "Deceptious", def: "Deceiving, delusive"}, {wrd: "Degenerate", def: "Lacking morals"}, {wrd: "Facinerious", def: "Extremely wicked and vile"}, {wrd: "Fawning", def: "Giving exaggerated praise to gain favor"}, {wrd: "Finical", def: "Foppish in matters of dress; fussily fastidious"}, {wrd: "Fusty", def: "Moldy, stale"}, {wrd: "Goatish", def: "Lustful"}, {wrd: "Gorbellied", def: "Big bellied, fat paunched"}, {wrd: "Greasy", def: "Oily; insincerely polite"}, {wrd: "Heinous", def: "Outrageously wicked, odious, atrocious"}, {wrd: "Incontinent", def: "Indulging lust without restraint"}, {wrd: "Inexecrable", def: "Unable to be overly execrated or detested"}, {wrd: "Insolent", def: "Rude, disrespectful"}, {wrd: "Lecherous", def: "Excessively sex-driven"}, {wrd: "Lisping", def: "Speaking childishly, or affectedly"}, {wrd: "Loathly", def: "Disgusting, repuslive"}, {wrd: "Lubberly", def: "Awkward, clumsy, loutish"}, {wrd: "Lumpish", def: "Poorly formed; stupid"}, {wrd: "Mammering", def: "Hesitating, stammering"}, {wrd: "Musty", def: "Moldy, stale; to emit a bad smell"}, {wrd: "Naughty", def: "Wicked, worthless; had a stronger meaning in Shakespeare's time"}, {wrd: "Obscene", def: "Repugnant, morally offensive"}, {wrd: "Overgorged", def: "Gluttonously stuffed"}, {wrd: "Panderly", def: "Small; insignificant"}, {wrd: "Pestiferous", def: "Annoying, troublesome; dangerous to society; associated with the 'pest' or 'plague'"}, {wrd: "Plumpy", def: "Fat"}, {wrd: "Puking", def: "Vomiting"}, {wrd: "Rascally", def: "Untrustworthy"}, {wrd: "Reeky", def: "Reeking, Bad-smelling"}, {wrd: "Sanctimonious", def: "Hypocritically self-righteous"}, {wrd: "Sickly", def: "Ill, feeble"}, {wrd: "Slobbery", def: "Wet, slovenly, muddy"}, {wrd: "Sneaping", def: "Biting, nipping"}, {wrd: "Spongy", def: "Soft"}, {wrd: "Stinking", def: "Foul-smelling"}, {wrd: "Superserviceable", def: "Overeager to be of service, officious"}, {wrd: "Thrasonical", def: "Boastful, bragging; named after 'Thraso,' a braggart soldier in an ancient Roman comedy"}, {wrd: "Unhandsome", def: "Ugly"}, {wrd: "Unwiped", def: "Unwashed, unclean"}, {wrd: "Viperous", def: "Venomous, malignant"}, {wrd: "Wanton", def: "Promiscuous, immodest"}, {wrd: "Warped", def: "Twisted, deformed"}, {wrd: "Witless", def: "Without intelligence, stupid"}]

	// adj2 array
	var adjTwo = [{wrd: "bald-pated", def: "Lacking hair on the scalp"}, {wrd: "barren-spirited", def: "Empty, unoriginal"}, {wrd: "beast-eating", def: "Immature, unweaned; 'beast' or 'beest' is the milk a cow produced soon after calving"}, {wrd: "beef-witted", def: "Having the intelligence of a cow"}, {wrd: "boiled-brains", def: "Senseless, hotheaded"}, {wrd: "clay-brained", def: "Stupid"}, {wrd: "dirt-rotten", def: "Filthy, decaying"}, {wrd: "dizzy-eyed", def: "Giddy, staring"}, {wrd: "dull-brained", def: "Dimwitted"}, {wrd: "eye-offending", def: "Difficult or painful to look at"}, {wrd: "fat-kidneyed", def: "Gluttonous"}, {wrd: "flap-eared", def: "Having large ears"}, {wrd: "foul-mouthed", def: "Using vile language"}, {wrd: "half-blooded", def: "Partly of noble and partly of low birth"}, {wrd: "hard-haired", def: "Having thick or wiry hair"}, {wrd: "hell-governed", def: "Under the influence of the devil; mischevious"}, {wrd: "hollow-eyed", def: "Having sunken eyes, like those of a cadaver"}, {wrd: "hook-nosed", def: "Having a nose resembling an eagles beak"}, {wrd: "ill-tempered", def: "Irritable, in a foul mood"}, {wrd: "knotty-pated", def: "Thick-headed"}, {wrd: "leaden-footed", def: "Clumsily moving"}, {wrd: "leptus-leering", def: "Smiling like a toady"}, {wrd: "lily-livered", def: "Easily scared, cowardly"}, {wrd: "logger-headed", def: "Stupidly blockheaded"}, {wrd: "lust-breathed", def: "Inspired by lust"}, {wrd: "motley-minded", def: "Foolish"}, {wrd: "mouse-eaten", def: "Rodent-chewed"}, {wrd: "muddy-mettled", def: "Dull-spirited"}, {wrd: "nook-shotten", def: "Full of nooks and angles; confusing, deceptive"}, {wrd: "one-trunk-inheriting", def: "Poor; having few posessions"}, {wrd: "pale-hearted", def: "Cowardly"}, {wrd: "pigeon-livered", def: "Timid, fearful"}, {wrd: "puke-stocking", def: "High-quality dark-colored leg-wear"}, {wrd: "puppy-headed", def: "Silly, harmless"}, {wrd: "rank scented", def: "Foul-smelling"}, {wrd: "rug-headed", def: "Shaggy-headed"}, {wrd: "rump-fed", def: "With a well-nourished rump"}, {wrd: "self-glorious", def: "Vain"}, {wrd: "senseless-obstinate", def: "Stubborn, unperceptive"}, {wrd: "sheep-biting", def: "Mean, cowardly"}, {wrd: "shrill-tongued", def: "Communicating in harsh tones"}, {wrd: "snail-paced", def: "Slow in speed and in thought"}, {wrd: "sodden-witted", def: "Ponderous in thinking; made stupid by consumption of alcohol"}, {wrd: "stretch-mouthed", def: "Wide-mouthed, foul-mouthed"}, {wrd: "stubborn-hard", def: "Willfully unreasonable"}, {wrd: "swag-bellied", def: "Having a sizable sagging stomach"}, {wrd: "tardy-gaited", def: "Slow of pace"}, {wrd: "thick-eyed", def: "Having heavy eyes; dull-sighted"}, {wrd: "three-suited", def: "Servile; servants were alloted three suits of clothes per year"}, {wrd: "tripe-visaged", def: "With a face like a dish of entrails"}, {wrd: "under-honest", def: "Untrustworthy, dishonest"}, {wrd: "undeducated", def: "Ignorant"}, {wrd: "useless", def: "Without purpose or utility"}, {wrd: "white-livered", def: "Cowardly"}]

	// noun array
	var noun = [{wrd: "abomination", def: "Loathsome thing; cause of disgust"}, {wrd: "arch-villain", def: "Principal foe or enemy"}, {wrd: "baggage", def: "Prostitute; term of contempt for an immoral woman"}, {wrd: "bed-presser", def: "Heavy, lazy person"}, {wrd: "blockhead", def: "One who is slow to understand; thick-skulled"}, {wrd: "braggart", def: "Person who boasts loadly"}, {wrd: "bugbear", def: "Bogey; frightful imaginary object"}, {wrd: "bull's pizzle", def: "Bull's penis"}, {wrd: "codpiece", def: "Pouch worn by men in the front of tight hose or breeches"}, {wrd: "capocchia", def: "Dolt, simpleton; foreskin"}, {wrd: "cornuto", def: "Cuckold---a man whose wife was unfaithful was thought to grow horns; from Latin 'cornu,' horn"}, {wrd: "costermonger", def: "Fruit and vegetable seller; 'costards' are apples"}, {wrd: "cot-quean", def: "Man who busies himself with women's household tasks"}, {wrd: "coxcomb", def: "Foolishly vain or conceited person"}, {wrd: "cozener", def: "Cheater, imposter"}, {wrd: "dissembler", def: "Hypocrite"}, {wrd: "dullard", def: "Boring, idiotic person"}, {wrd: "dunghill", def: "Heap of excrement"}, {wrd: "fashion-monger", def: "One foolishly concerned with fashion"}, {wrd: "fleshmonger", def: "Fornicator"}, {wrd: "foot-licker", def: "Sycophant, flatterer"}, {wrd: "fustilarian", def: "Fat frowsy slut"}, {wrd: "geck", def: "Dupe, fool, object of scorn"}, {wrd: "giglet", def: "Giddy girl; lewd wanton person"}, {wrd: "horn-beast", def: "Lower creature"}, {wrd: "horse-back-breaker", def: "Immensely overweight"}, {wrd: "idiot-worshipper", def: "One with faith in stupidity"}, {wrd: "jack-a-nape", def: "Ape, monkey; conceited person"}, {wrd: "Lewdster", def: "Crude, sexually offensive person"}, {wrd: "malignancy", def: "Cancerous growth, evil influence"}, {wrd: "malmsey-butt", def: "Large cask of malmsey, a strong sweet wine"}, {wrd: "measle", def: "Disease; diseased wretch"}, {wrd: "miscreant", def: "Vile wretch, detestable scoundrel; originally, a misbeliever, heretic, or infidel"}, {wrd: "mushrump", def: "Mushroom"}, {wrd: "ox-head", def: "Idiot; horns were a symbol of cuckholdom"}, {wrd: "parasite", def: "One who takes while giving nothing"}, {wrd: "pig-nut", def: "Earth-nut, an edible tuberous root"}, {wrd: "pin-buttock", def: "Narrow or sharp buttock"}, {wrd: "potato finger", def: "Lecher; sweet potatoes were thought to be aphrodisiacs and, hence, stimulants to lechery"}, {wrd: "princox", def: "Saucy insolent boy"}, {wrd: "purpose-changer", def: "One who breaks faith"}, {wrd: "quatch-buttock", def: "Fat, squat, wide fanny"}, {wrd: "rabbit-sucker", def: "Very young unweaned rabbit"}, {wrd: "rampallian", def: "Ruffian, scoundrel"}, {wrd: "rat-catcher", def: "Person of low employment"}, {wrd: "ratsbane", def: "Rat poison"}, {wrd: "renegatho", def: "Renegade; a deserter of one's religion"}, {wrd: "scum", def: "Layer of filth"}, {wrd: "scut", def: "The short, erect tail of a deer"}, {wrd: "starve-lackey", def: "One who starves his servants"}, {wrd: "stock-fish", def: "Dried codfish"}, {wrd: "ticklebrain", def: "Drunkard; 'ticklebrain' is a type of strong liquor"}, {wrd: "under-skinker", def: "An assistant tapster---one who draws beer for customers"}, {wrd: "villiago", def: "Scoundrel, villain"}]

	var desOne = document.getElementById("adj1")
	var desTwo = document.getElementById("adj2")
	var thing = document.getElementById("noun")

	// placeholders
	var first = Math.floor(Math.random() * adjOne.length)
	var sec = Math.floor(Math.random() * adjTwo.length)
	var third = Math.floor(Math.random() * noun.length)

	// change text in buttons to insults
	desOne.innerHTML = adjOne[first].wrd
	desTwo.innerHTML = adjTwo[sec].wrd
	thing.innerHTML = noun[third].wrd

	// definitions
	desOne.setAttribute("data-content", adjOne[first].def)
	desTwo.setAttribute("data-content", adjTwo[sec].def)
	thing.setAttribute("data-content", noun[third].def)

	// img switch
	var funStuff = ["img/bird.jpg", "img/bunny.jpg", "img/cat.jpg", "img/dog.jpg", "img/mouse.png", "img/panda.png"]
	var flip = Math.floor(Math.random() * funStuff.length)
	var set = funStuff[flip]
	var grab = document.getElementById("myImg")

	grab.setAttribute("src", set)

	// bobble head
	var shake = document.getElementById("newBtn")
	shake.className+= " tada"

	setTimeout(function(){ shake.classList.remove("tada"); }, 1000);
	});




