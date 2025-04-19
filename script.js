// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 250 video lessons


const races = document.querySelector(".projects-inner-cont");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".projects-cont",
	start:"top 10%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:'.container',
	animation:tween,
	scrub:true,
	invalidateOnRefresh:true,

})