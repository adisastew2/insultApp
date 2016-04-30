// popover funtionality
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

// adj1 array
var adjOne = [{wrd: "apish", def: "foolish; resembling an ape"}, {wrd: "artless", def: "crude, unskillful"}, {wrd: "beslubbering", def: "smear, smeared; slobbering"}, {wrd: "calumniating", def: "uttering maliciously false statements"}, {wrd: "cautelous", def: "crafty, deceitful"}, {wrd: "churlish", def: "rude, vulgar"}, {wrd: "coldblooded", def: "emotionless"}, {wrd: "concupiscible", def: "desirous, lustful"}, {wrd: "covetous", def: "greedy; envious of the posessions of others"}, {wrd: "crudy", def: "thick, as in 'curdy'"}, {wrd: "cuckoldly", def: "haplessly victimized"}, {wrd: "deceptious", def: "deceiving, delusive"}, {wrd: "degenerate", def: "lacking morals"}, {wrd: "facinerious", def: "extremely wicked and vile"}, {wrd: "fawning", def: "giving exaggerated praise to gain favor"}, {wrd: "finical", def: "foppish in matters of dress; fussily fastidious"}, {wrd: "fusty", def: "moldy, stale"}, {wrd: "goatish", def: "lustful"}, {wrd: "gorbellied", def: "big bellied, fat paunched"}, {wrd: "greasy", def: "oily; insincerely polite"}, {wrd: "heinous", def: "outrageously wicked, odious, atrocious"}, {wrd: "incontinent", def: "indulging lust without restraint"}, {wrd: "inexecrable", def: "unable to be overly execrated or detested"}, {wrd: "insolent", def: "rude, disrespectful"}, {wrd: "lecherous", def: "excessively sex-driven"}, {wrd: "lisping", def: "speaking childishly, or affectedly"}, {wrd: "loathly", def: "disgusting, repuslive"}, {wrd: "lubberly", def: "awkward, clumsy, loutish"}, {wrd: "lumpish", def: "poorly formed; stupid"}, {wrd: "mammering", def: "hesitating, stammering"}, {wrd: "musty", def: "moldy, stale; to emit a bad smell"}, {wrd: "naughty", def: "wicked, worthless; had a stronger meaning in Shakespeare's time"}, {wrd: "obscene", def: "repugnant, morally offensive"}, {wrd: "overgorged", def: "gluttonously stuffed"}, {wrd: "panderly", def: "small; insignificant"}, {wrd: "pestiferous", def: "annoying, troublesome; dangerous to society; associated with the 'pest' or 'plague'"}, {wrd: "plumpy", def: "fat"}, {wrd: "puking", def: "vomiting"}, {wrd: "rascally", def: "untrustworthy"}, {wrd: "reeky", def: "reeking, bad-smelling"}, {wrd: "sanctimonious", def: "hypocritically self-righteous"}, {wrd: "sickly", def: "ill, feeble"}, {wrd: "slobbery", def: "wet, slovenly, muddy"}, {wrd: "sneaping", def: "biting, nipping"}, {wrd: "spongy", def: "soft"}, {wrd: "stinking", def: "foul-smelling"}, {wrd: "superserviceable", def: "overeager to be of service, officious"}, {wrd: "thrasonical", def: "boastful, bragging; named after 'Thraso,' a braggart soldier in an ancient Roman comedy"}, {wrd: "unhandsome", def: "ugly"}, {wrd: "unwiped", def: "unwashed, unclean"}, {wrd: "viperous", def: "venomous, malignant"}, {wrd: "wanton", def: "promiscuous, immodest"}, {wrd: "warped", def: "twisted, deformed"}, {wrd: "witless", def: "without intelligence, stupid"}]

// adj2 array
var adjTwo = [{wrd: "bald-pated", def: "lacking hair on the scalp"}, {wrd: "barren-spirited", def: "empty, unoriginal"}, {wrd: "beast-eating", def: "immature, unweaned; 'beast' or 'beest' is the milk a cow produced soon after calving"}, {wrd: "beef-witted", def: "having the intelligence of a cow"}, {wrd: "boiled-brains", def: "senseless, hotheaded"}, {wrd: "clay-brained", def: "stupid"}, {wrd: "dirt-rotten", def: "filthy, decaying"}, {wrd: "dizzy-eyed", def: "giddy, staring"}, {wrd: "dull-brained", def: "dimwitted"}, {wrd: "eye-offending", def: "difficult or painful to look at"}, {wrd: "fat-kidneyed", def: "gluttonous"}, {wrd: "flap-eared", def: "having large ears"}, {wrd: "foul-mouthed", def: "using vile language"}, {wrd: "half-blooded", def: "partly of noble and partly of low birth"}, {wrd: "hard-haired", def: "having thick or wiry hair"}, {wrd: "hell-governed", def: "under the influence of the devil; mischevious"}, {wrd: "hollow-eyed", def: "having sunken eyes, like those of a cadaver"}, {wrd: "hook-nosed", def: "having a nose resembling an eagles beak"}, {wrd: "ill-tempered", def: "irritable, in a foul mood"}, {wrd: "knotty-pated", def: "thick-headed"}, {wrd: "leaden-footed", def: "clumsily moving"}, {wrd: "leptus-leering", def: "smiling like a toady"}, {wrd: "lily-livered", def: "easily scared, cowardly"}, {wrd: "logger-headed", def: "stupidly blockheaded"}, {wrd: "lust-breathed", def: "inspired by lust"}, {wrd: "motley-minded", def: "foolish"}, {wrd: "mouse-eaten", def: "rodent-chewed"}, {wrd: "muddy-mettled", def: "dull-spirited"}, {wrd: "nook-shotten", def: "full of nooks and angles; confusing, deceptive"}, {wrd: "one-trunk-inheriting", def: "poor; having few posessions"}, {wrd: "pale-hearted", def: "cowardly"}, {wrd: "pigeon-livered", def: "timid, fearful"}, {wrd: "puke-stocking", def: "high-quality dark-colored leg-wear"}, {wrd: "puppy-headed", def: "silly, harmless"}, {wrd: "rank scented", def: "foul-smelling"}, {wrd: "rug-headed", def: "shaggy-headed"}, {wrd: "rump-fed", def: "with a well-nourished rump"}, {wrd: "self-glorious", def: "vain"}, {wrd: "senseless-obstinate", def: "stubborn, unperceptive"}, {wrd: "sheep-biting", def: "mean, cowardly"}, {wrd: "shrill-tongued", def: "communicating in harsh tones"}, {wrd: "snail-paced", def: "slow in speed and in thought"}, {wrd: "sodden-witted", def: "ponderous in thinking; made stupid by consumption of alcohol"}, {wrd: "stretch-mouthed", def: "wide-mouthed, foul-mouthed"}, {wrd: "stubborn-hard", def: "willfully unreasonable"}, {wrd: "swag-bellied", def: "having a sizable sagging stomach"}, {wrd: "tardy-gaited", def: "slow of pace"}, {wrd: "thick-eyed", def: "having heavy eyes; dull-sighted"}, {wrd: "three-suited", def: "servile; servants were alloted three suits of clothes per year"}, {wrd: "tripe-visaged", def: "with a face like a dish of entrails"}, {wrd: "under-honest", def: "untrustworthy, dishonest"}, {wrd: "undeducated", def: "ignorant"}, {wrd: "useless", def: "without purpose or utility"}, {wrd: "white-livered", def: "cowardly"}]

// noun array
var noun = [{wrd: "abomination", def: "loathsome thing; cause of disgust"}, {wrd: "arch-villain", def: "principal foe or enemy"}, {wrd: "baggage", def: "prostitute; term of contempt for an immoral woman"}, {wrd: "bed-presser", def: "heavy, lazy person"}, {wrd: "blockhead", def: "one who is slow to understand; thick-skulled"}, {wrd: "braggart", def: "person who boasts loadly"}, {wrd: "bugbear", def: "bogey; frightful imaginary object"}, {wrd: "bull's pizzle", def: "bull's penis"}, {wrd: "codpiece", def: "pouch worn by men in the front of tight hose or breeches"}, {wrd: "capocchia", def: "dolt, simpleton; foreskin"}, {wrd: "cornuto", def: "cuckold---a man whose wife was unfaithful was thought to grow horns; from Latin 'cornu,' horn"}, {wrd: "costermonger", def: "fruit and vegetable seller; 'costards' are apples"}, {wrd: "cot-quean", def: "man who busies himself with women's household tasks"}, {wrd: "coxcomb", def: "foolishly vain or conceited person"}, {wrd: "cozener", def: "cheater, imposter"}, {wrd: "dissembler", def: "hypocrite"}, {wrd: "dullard", def: "boring, idiotic person"}, {wrd: "dunghill", def: "heap of excrement"}, {wrd: "fashion-monger", def: "one foolishly concerned with fashion"}, {wrd: "fleshmonger", def: "fornicator"}, {wrd: "foot-licker", def: "sycophant, flatterer"}, {wrd: "fustilarian", def: "fat frowsy slut"}, {wrd: "geck", def: "dupe, fool, object of scorn"}, {wrd: "giglet", def: "giddy girl; lewd wanton person"}, {wrd: "horn-beast", def: "lower creature"}, {wrd: "horse-back-breaker", def: "immensely overweight"}, {wrd: "idiot-worshipper", def: "one with faith in stupidity"}, {wrd: "jack-a-nape", def: "ape, monkey; conceited person"}, {wrd: "lewdster", def: "crude, sexually offensive person"}, {wrd: "malignancy", def: "cancerous growth, evil influence"}, {wrd: "malmsey-butt", def: "large cask of malmsey, a strong sweet wine"}, {wrd: "measle", def: "disease; diseased wretch"}, {wrd: "miscreant", def: "vile wretch, detestable scoundrel; originally, a misbeliever, heretic, or infidel"}, {wrd: "mushrump", def: "mushroom"}, {wrd: "ox-head", def: "idiot; horns were a symbol of cuckholdom"}, {wrd: "parasite", def: "one who takes while giving nothing"}, {wrd: "pig-nut", def: "earth-nut, an edible tuberous root"}, {wrd: "pin-buttock", def: "narrow or sharp buttock"}, {wrd: "potato finger", def: "lecher; sweet potatoes were thought to be aphrodisiacs and, hence, stimulants to lechery"}, {wrd: "princox", def: "saucy insolent boy"}, {wrd: "purpose-changer", def: "one who breaks faith"}, {wrd: "quatch-buttock", def: "fat, squat, wide fanny"}, {wrd: "rabbit-sucker", def: "very young unweaned rabbit"}, {wrd: "rampallian", def: "ruffian, scoundrel"}, {wrd: "rat-catcher", def: "person of low employment"}, {wrd: "ratsbane", def: "rat poison"}, {wrd: "renegatho", def: "renegade; a deserter of one's religion"}, {wrd: "scum", def: "layer of filth"}, {wrd: "scut", def: "the short, erect tail of a deer"}, {wrd: "starve-lackey", def: "one who starves his servants"}, {wrd: "stock-fish", def: "dried codfish"}, {wrd: "ticklebrain", def: "drunkard; 'ticklebrain' is a type of strong liquor"}, {wrd: "under-skinker", def: "an assistant tapster---one who draws beer for customers"}, {wrd: "villiago", def: "scoundrel, villain"}]

// insult randomizer function
function insult() {
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
}