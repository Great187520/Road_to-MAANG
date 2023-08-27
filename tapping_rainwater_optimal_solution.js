//Coding out optimial solution
//Rule of thumb that will guide us to getting our optinal solution
//Identify points with lesser value.
//Is this pointer value Greater Than or equal to max on that side
// yes -> update max on that side
// no -> get water for pointer value add to total
//More pointer inwards
//Repeat for other pointer

const getTrappedRainwater = function(heights){
    let left = 0, right = heights.length-1, maxLeft = 0, maxRight = 0, total = 0;
    while(left < right){
        if(heights[left] <= heights[right]){
            if(heights[left] >= maxLeft){
                maxLeft = heights[left];
            }else{
                total += maxLeft - heights[left];
            }
            left ++;
        }else{
            if(heights[right] >= maxRight){
                maxRight = heights[right];
            }else{
                total += maxRight - heights[right];
            }
            right --;
        }
        return total;
    }
}