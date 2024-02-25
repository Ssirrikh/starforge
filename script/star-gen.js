
//// REFERENCES ////

/*

Robin Ciardullo: Astro 534 - Stellar Structure and Evolution
(mass/radius/luminosity charts in lec18 "Chars of Main Seq Stars")
https://sites.google.com/psu.edu/robin-ciardullo/teaching/astro-534

Astro 100 - Star Classification
(avg lifespans by class)
https://people.highline.edu/iglozman/classes/astronotes/hr_diagram.htm

Wikipedia: Stellar Classification
(freq/color/radius/luminosity by class, Harvard Class (OBAFGKM), Yerkes Class (Ia,I,II,etc), peculiarity class (e,p,etc))
https://en.wikipedia.org/wiki/Stellar_classification

ATNF (Australia): Main Seq Stars
(lifespan by class, lower/upper bound on mass)
https://www.atnf.csiro.au/outreach/education/senior/astrophysics/stellarevolution_mainsequence.html

Wikipedia: Protoplanetary Disk
(proto disk structure)
https://en.wikipedia.org/wiki/Protoplanetary_disk

*/

/////////////////////////

const randI = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randF = (min,max) => Math.random() * (max - min) + min;

// https://www.atnf.csiro.au/outreach/education/senior/astrophysics/stellarevolution_mainsequence.html
const STAR_MASS_MIN = 0.08;
const STAR_MASS_MAX = 150.0;
const STAR_AGE_PROTO = 0.1;

// mass: linear from min to max, in solar masses
// age: linear from 0 to 1, in percent of total lifespan
	// 10 mil years @ 150 M -> 100 bil years @ 0.08 M
	// may model with `y = 1/(8x)` for very rough approx

function BuildStar () {
	const mass = randF(STAR_MASS_MIN, STAR_MASS_MAX);
	const age = randF(0,1);
}