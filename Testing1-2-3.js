var number=function(array){
  //your awesome code here
  const emptyArray = [];
  if (array.length === 0) return emptyArray;
  array.forEach ((string,index) => {
    array[index] = `${index+1}\: ${string}`;
  });
  return array;
}
