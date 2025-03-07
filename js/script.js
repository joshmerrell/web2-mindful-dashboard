// website loaded?
console.log("👍 Okay");


// elements
const daysUntilEventElem = document.querySelector(".daysUntilEvent");
const ageOfPersonElem = document.querySelector(".ageOfPerson");
const streakElem = document.querySelector(".streakOfDays");
const gradientTile = document.querySelector(".gradientTile");


// set gradient tile background
gradientTile.style.background = randomLinearGradient();
gradientTile.addEventListener("click", () => {
    gradientTile.style.background = randomLinearGradient();
});


// Days Until graduation
const currentYear = new Date().getFullYear();
const graduation = `${currentYear}-06-14`;
const daysUntilGraduation = getDaysUntilEvent(graduation);
document.querySelector(".daysUntilEvent").textContent = daysUntilGraduation;

// Streak of Days
const streak = getDayStreak(`${currentYear}-01-01`);
streakElem.textContent = streak;

// age of
const birthDate = "1991-09-17";
const ageOfLinuxKernel = calculateAgeOf( birthDate );


const elemAgeOfPerson = document.querySelector('.ageOfPerson');
elemAgeOfPerson.textContent = ageOfLinuxKernel;

// Set to HTML element
elemAgeOfPerson.textContent = ageOfLinuxKernel;
elemAgeOfPerson.setAttribute("datetime", ageOfLinuxKernel );
