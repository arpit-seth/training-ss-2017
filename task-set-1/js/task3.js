var check_btn = document.getElementById('check_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){	

	var ans=2;
	for(var i=3;i<1000;i+=2){
		if(isPrime(i))
			ans+=i;
	}
	alert('Answer is = ' + ans);
	output.innerHTML = 'Answer is = ' + ans;
};

function isPrime(n){
	for(var i=3;i*i<=n;i+=2){
		if(n%i == 0)
			return false;
	}
	return true;
}