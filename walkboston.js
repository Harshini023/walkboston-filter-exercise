function rendertopsalaries(boston,container) {
  const people = boston.data;
  const len = boston.data.length;
  var topSalaryPeople=[];
  topSalaryPeople = people.sort((a, b) => b[11]-a[11]);
  topSalaryPeople.slice(0,5);
  let html = '';
  
  for (let i = 0; i < 5; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data">' + html + '</ul>';

}
rendertopsalaries(boston, document.getElementById('container'));
 

function rendertopemployee(boston,container) {
  const people = boston.data;
  const len = boston.data.length;
  
  var topSalaryPeople = topSalaryPeople.filter((a) => a[11]>200000)
  console.log(topSalaryPeople)
  let html = '';
  
  for (let i = 0; i < 1; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data1">' + html + '</ul>';

}
rendertopemployee(boston, document.getElementById('container'));
 

