$(document).ready(function(){

  $("#submit").click(function(){
    $("#uyari").empty(); //Uyarı alanındaki texti temizle
    var message=""; //Hata mesajı
    var isim= $("#name").val();
    var email=$("#email").val();
    var password=$("#password").val();
    var password1=$("#password1").val();
    
    if(isim.length<1) message+=" İsim alanı boş olamaz <br/>";
    if(password.length<6) message+=" Şifre en az 6 karakter olmalıdır <br/>";
    if(email.length<1) message+=" Email alanı boş olamaz <br/>";
    if(password.length>5 && password!=password1) message+=" Şifreler aynı olmalıdır <br/>";
    var pattern = new RegExp("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    var result = pattern .test(email); //boolean çözüm dönecek
    if(!result) message+=" Email adresi geçerli değil <br/>";
    $("#uyari").html(message);
  });

    var number=0;
    $("#left").click(function(){
        number--;
        var lnk="<img src='https://via.placeholder.com/250x250.png?text="+number+"'>";
        $("#resim").html(lnk);
    });


    $("#right").click(function(){
        number++;
        var lnk="<img src='https://via.placeholder.com/250x250.png?text="+number+"'>";
        $("#resim").html(lnk);
    });

  });
