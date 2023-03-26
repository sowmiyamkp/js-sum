let values=[100,-4,-6,-7,-9];
function positiveNum(values)
{
	let result=[];
	for(i=0;i<values.length;i++)
	{
		if(values[i]<0)
		{
			result.push(Math.abs(values[i]));
		}
	}
	return result;
}

console.log(positiveNum(values));