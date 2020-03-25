export function BubbleSort(array)
{
    const arr = [];
    let i = 0;
    for(let j = 0; j < array.length;j++)
    {
        if(array[j] > array[j+1])
        {
            arr[i] = j;
            arr[i+1]=j+1;
            i =i+2;
        }
    }
    return arr;
}