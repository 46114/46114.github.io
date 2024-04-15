window.onload=function(){
	document.getElementById("funp").onclick=function(){
		switch(document.getElementById("ifun").value){
			case "sin":
				document.getElementById("ifun").value="cot"
				break
			case "cos":
				document.getElementById("ifun").value="sin"
				break
			case "tan":
				document.getElementById("ifun").value="cos"
				break
			case "cot":
				document.getElementById("ifun").value="tan"
				break
		}
	}
	document.getElementById("funm").onclick=function(){
		switch(document.getElementById("ifun").value){
			case "sin":
				document.getElementById("ifun").value="cos"
				break
			case "cos":
				document.getElementById("ifun").value="tan"
				break
			case "tan":
				document.getElementById("ifun").value="cot"
				break
			case "cot":
				document.getElementById("ifun").value="sin"
				break
		}
	}
	document.getElementById("radm").onclick=function(){
		document.getElementById("irad").value--
	}
	document.getElementById("radp").onclick=function(){
		document.getElementById("irad").value++
	}
	document.getElementById("devm").onclick=function(){
		if(document.getElementById("idev").value==1){
			document.getElementById("idev").value=2
		}
		else{
			document.getElementById("idev").value=1
		}
	}
	document.getElementById("devp").onclick=function(){
		if(document.getElementById("idev").value==1){
			document.getElementById("idev").value=2
		}
		else{
			document.getElementById("idev").value=1
		}
	}
	document.getElementById("notm").onclick=function(){
		if(document.getElementById("inot").value=="+"){
			document.getElementById("inot").value="-"
		}
		else{
			document.getElementById("inot").value="+"
		}
	}
	document.getElementById("notp").onclick=function(){
		if(document.getElementById("inot").value=="+"){
			document.getElementById("inot").value="-"
		}
		else{
			document.getElementById("inot").value="+"
		}
	}
	document.onclick=function(){
		var fun,rad,not,dev,fun1,not1,n
		fun=document.getElementById("ifun").value
		rad=document.getElementById("irad").value
		not=document.getElementById("inot").value
		console.log(not)
		dev=document.getElementById("idev").value
		if((rad/dev)%1==0){
			fun1=fun
		}
		else{
			switch(fun){
				case "sin":
					fun1="cos"
					break
				case "cos":
					fun1="sin"
					break
				case "tan":
					fun1="cot"
					break
				case "cot":
					fun1="tan"
					break
			}
		}
		n=rad/dev
		if(n>=0){
			n=2*(n%2)
		}
		else{
			n=(2*(n%2))
			switch(n){
				case -1:
					n=3
					break
				case -2:
					n=2
					break
				case -3:
					n=1
					break
				case 0:
					n=0
					break
			}
		}
		console.log(n)
		if(not=="-"){
			switch(n){
				case 0:
					n=3
					break
				case 1:
					n=0
					break
				case 2:
					n=1
					break
				case 3:
					n=2
					break
			}
		}
		console.log(n)
		switch(fun){
			case "sin":
				not1=["","","-","-"][n]
				break
			case "cos":
				not1=["","-","-",""][n]
				break
			case "tan":
				not1=["","-","","-"][n]
				break
			case "cot":
				not1=["","-","","-"][n]
				break
		}
		document.getElementById("ind").value=not1+fun1+"α"
	}
}
