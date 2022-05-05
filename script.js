// Given 2 arrays that may contain both numbers and strings return a new array with the numbers and/or strings that appear in both arrays duplicates are only counted once;
function commonElements(arr1,arr2){

    // call filter on arr1, then check if arr2 includes element that's in arr1 - truthy values will be added to new array
    let filteredArr = arr1.filter((element) => arr2.includes(element));
    
        // use reduce with inital value of an empty [] and add values only once to new reduced array
    let onlyCommons = filteredArr.reduce((acc,curr) =>{
            if(!acc.includes(curr)){
                acc.push(curr);
            }
        return acc;
    }, [])
        
        return onlyCommons; 
    }

    function commonElementsTests() {
        var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
        var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
        console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
      }
      
      commonElementsTests() // uncomment to test
      