function sendEmail() {
	name = document.getElementById("name").value;
	selling = document.getElementById("selling").value;
	money = document.getElementById("money").value;
	message = "My name is "+name+", and I'm selling a "+selling+" card. The picture is attatched to put on the website. I am willing to pay "+money+" MSD (Monkay Standard Dollar)"
	
	window.open('mailto:elijahgarms@gmail.com?subject=Monebay selling&body='+message+'forward=bbensema890@gmail.com');
}