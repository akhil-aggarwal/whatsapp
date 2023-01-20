
function whatsappSubmit()
{
    var num = document.getElementById('number');
    var obj = document.getElementById('message');
	var unencoded = obj.value;
    var number = num.value;
	var TextMessage = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");
    window.location = "https://wa.me/" + number + "?text=" + TextMessage;

}