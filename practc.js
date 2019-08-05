function chunkArray(arr,len)
{
    //init chunked arr
    const chunkedArr=[];

    //loop through arr
    arr.forEach(function(val){
        debugger
        //get last element
    const last=chunkedArr[chunkedArr.length-1];
    //check if the last and if last lenght is equal to the chunk length
    if(!last||last.length===len)
    {
        chunkedArr.push([val])

    }else
    {
        last.push(val);
    }
    })
    return chunkedArr;
}
const output=chunkArray([1,2,3,4,5,6,6,7,7,3,4,6,5,6,87,11,33,55,66,88],2);
console.log(output);