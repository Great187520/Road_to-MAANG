//using Hash Map
const findTwoSum = function(nums, target){
    const numsMap = {};
    for (let p=0; p< nums.length; p++){
        const currentMapVal = numsMap[nums[p]];
        if(currentMapVal>= 0){
            return[currentMapVal,p];
        }else{
            const numberToFind = target-nums[p];
            nums.Map[numberToFind]=p;
        }
    }
    return null;
}


