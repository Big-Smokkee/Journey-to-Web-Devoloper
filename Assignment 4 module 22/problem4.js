function  isSame(arr1 , arr2 ) {
    // You have to write your code here
    if (!(Array.isArray(arr1)) ||!(Array.isArray(arr2)))
    {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) return false;
    // parseInt(arr1);
    for (let i = 0; i < arr1.length; i++)
    {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
// const arr1 = [1, undefined , 3];
// // const arr1 = { data: [2, 5, 6] };
// const arr2 = [1,null ,3];

// console.log(isSame(arr1, arr2));