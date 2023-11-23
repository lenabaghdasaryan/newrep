const people = [
    { name: 'Alice' ,age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
  ];
  let res = {};
  
  people.forEach(elem => {
    const age = elem.age;
    res[age] = res[age] || [];
    console.log(res[age])
    res[age].push(elem);
  })
  const result = Object.values(res)
  console.log(result)
