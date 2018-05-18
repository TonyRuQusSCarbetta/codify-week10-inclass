//constructor notation

var newArray = [];

function Clothes(title,img,color,size,multiply) {
  this.title = title;
  this.img = img;
  this.color = color;
  this.size = size;
  this.multiply = function(x,y) {
      return x*y;
  };
  newArray.push.title;
  newArray.push.img;
  newArray.push.color;
  newArray.push.size;
  newArray.push.multiply;

}

var sweatshirt = new Clothes("Sweatshirt","https://asda.scene7.com/is/image/Asda/5054922874480?hei=560&qlt=85&fmt=pjpg&resmode=sharp&op_usm=1.1,0.5,0,0&defaultimage=default_details_George_rd","Red","Large",(4,1));
var jeans = new Clothes("Jeans","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1CNopqHmIGKMninDd7lP99t8SZxZ-vlbhKlIauiox6WDBmg6RA","Blue","Medium",(4,2));
var hat = new Clothes("Hat","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjAVPvznX6_SlTCS1PimRsISf7qWwhSF6NDVqnPjO4G7-8sVP","White","Small",(4,3));
