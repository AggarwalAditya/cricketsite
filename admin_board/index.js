function postData()
{
	let matchid = document.getElementById("matchid").value;
	let info = document.getElementById("info").value;

	fetch("http://localhost:5000/updatematch?matchid="+matchid+"&info="+info)
      .then(res => res.json())
      .then(
        (result) => {
			
          console.log(result);
        },
        
	        (error) => {
	          
	        }
	      )
}