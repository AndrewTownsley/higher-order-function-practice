
// Higher-Order-Functions

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
// }

// .forEach()
// companies.forEach((company) => console.log(company.category))

// .filter()
// companies.filter(company => console.log(company.start > 1995))
// companies.filter(company => console.log(company.category == "Retail"))

// function canDrink() {
//   ages.filter(age => age >= 21);
// }
// const canDrink = ages.filter(age => age >= 21)

// Filter the retail companies
const filterRetail = companies.filter(company => company.category === "Retail" );

// const retailFilter = companies.filter(function(company) {
//   if(company.category === "Retail") {
//     return true;
//   }
// });


// Filter out companies that started in the 1980s

const filterEighties = companies.filter(company => company.start > 1979 && company.start < 1990);

// Get all the companies that lasted at least 10 years
const tenYears = companies.filter(company => company.end - company.start > 9);

// MAP// MAP // MAP // MAP //

// Create array of company names.

// const companyNames = companies.map(company => company.name);
// Return a string with the comapny name and how long the comapny lasted.
const companyNames = companies.map(function(company) {
  return `${company.name} [${company.end - company.start}]`
});

// Return a string with the comapny name and how long it lasted, sorted from longest to shortest.
// Figure out how long each company lasted.
const howLong = companies.map(company => company.end - company.start);
// Sort the companies by how long they lasted
const companySort = howLong.sort((a, b) => a > b ? -1 : 1)
// Then map the company name onto the array of sorted companies.
// const nameAndYears = companySort.map(company => 
//   `${company.name } - ${(company.end - company.start)} years`)
// console.log(howLong);

// Square all of the ages
const squareAges = ages.map(age => `${age} [${Math.round(Math.sqrt(age))}]`);

// SORT// SORT // SORT // SORT //
// Sort Companies by start year.
const sortedCompanies = companies.sort((a, b) => 
  a.start > b.start ? 1 : -1);
  console.log(sortedCompanies);
