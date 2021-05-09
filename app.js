
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
//   console.log(companies[i]);
// }

// .forEach()
// companies.forEach((company) => console.log(company.category))

// .filter()
// companies.filter(company => console.log(company.start > 1995))
// companies.filter(company => console.log(company.category == "Retail"))

// function canDrink() {
//   ages.filter(age => age >= 21);
// }
const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink);

// Filter the retail companies
const filterRetail = companies.filter(company => company.category.retail);
console.log(filterRetail);