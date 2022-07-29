function rev(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(rev(149)));