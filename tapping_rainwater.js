const getTrappedRainwater = function(heights){
    let totalwater = 0;
    for(let p=0; p< heights.lenght; p++){
        let leftp=p, rightp=p, maxLeft = o, maxRight = 0;
        while(leftp >= 0){
            maxLeft = math.max(maxLeft, heights[leftp]);
            leftp--;
        }
        while(rightp < heights.lenght){
            maxRight = math.max(maxRight, heights[rightp]);
            rightp++;
        }
        const currentwater = math.min(maxLeft, maxRight) - heights[p];
        if(currentwater >=0){
            totalwater += currentwater;
        }
    }
    return totalwater;
}