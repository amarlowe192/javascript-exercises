<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪</title>
  <link rel="icon" href="https://fav.farm/🔥" />
</head>
<body>
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  <script>
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()

    // 1. Filter the list of inventors for those who were born in the 1500's
	let filtered = [];
	
	function filterYear(a, b, arr){
		
		for(const person of arr){
		filtered = arr.filter((person) => person.year >= a && person.year < b);	
		}
		return filtered;
	}

	console.log("Born in the 1500s ", filterYear(1500, 1600, inventors));

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
	function firstAndLast(arr){
		filtered = arr.map(function(item, index, arr){
		const newObject = {first: item.first, last: item.last};
		return newObject;
		});
		return filtered;
	}
	console.log("First and Last Names " ,firstAndLast(inventors));
	

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
	function sortByBirth(arr){
		return arr.sort((a, b)=> a.year - b.year);
	}
	console.log("Sorted by birth year oldest to youngest ", sortByBirth(inventors));

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

	function calcYearsLived(arr){
		const initialValue = 0;
		let placeholder = [];
		const yearsLived = arr.map(function(item, index, arr){
			placeholder[index] = {years: item.passed - item.year};
			return placeholder[index];
		});
		const totalYearsLived = 
			yearsLived.reduce((acc, currentVal) => acc + currentVal.years,
			initialValue,);
			
		return totalYearsLived;
	}

	console.log("Total amount of years lived by all inventors ", calcYearsLived(inventors));

    // 5. Sort the inventors by years lived
	function getYearsLived(arr){
		let placeholder = [];
		const newArr = arr.map(function(item, index, arr){
			placeholder[index] = {first: item.first,
						last: item.last,
						years: item.passed - item.year};
			return placeholder[index];
		});
		return newArr;
	}
	
	function sortByYearsLived(arr){
		const newArr = getYearsLived(arr);
		return newArr.sort((a, b) => a.years - b.years);
	}
	console.log("Sorted by who lived the most years ", sortByYearsLived(inventors));


    // 7. sort Exercise
    // Sort the people alphabetically by last name

	function stringToObject(arr){
		let placeholder = [];
		let newArr = arr.map(function(item, index, arr){
			placeholder[index] = item.split(", ");
			return placeholder;
		});
		let objectArray = newArr.map(function(item, index, arr){
			placeholder[index] = {last: placeholder[index][0], 
					      first: placeholder[index][1]}
			return placeholder[index];
		})
		
		return objectArray;
	}	


	function sortByLast(arr){
	const objectArr = stringToObject(arr);
	return objectArr.sort((a, b) => a.last.localeCompare(b.last));
	}
	
	console.log("Sorted by Last name ", sortByLast(people));
	

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
	
	function sortStrings(arr){
	return arr.sort((a, b) => a.localeCompare(b));
	}
	function countInstances(arr){
		let placeholder = [];
		placeholder = sortStrings(arr);
		const newArr = placeholder.map(function(item, index, arr){
			let counter = 1;
				for(let i = 0; i < arr.length; i++){
					if(item === arr[i]){
						counter++;
						arr.splice(i, 1)
					}
				}
			
			return arr[index] = {item: item, count: counter}
		});
		return newArr;
	}
		console.log("How many of each value ", countInstances(data));




  </script>
</body>
</html>