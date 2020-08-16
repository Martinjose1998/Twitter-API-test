/*$(document).ready(function(){
    var name = document.getElementById("name").value;
    $("button").click(function(){
      $.get("api.php?name="+name, function(data){
        document.getElementById("show_data").innerHTML = data;
      });
    });
  });*/

function clickBot()
{
    var nombre = document.getElementById("search").value;
    if(nombre == '' || nombre == null)
    {
        alert("El campo de busqueda no puede estar vacío")
    }
    $.ajax({
        url: "api.php",
        type: "get", //send it through get method
        data: { 
          name: nombre
        },
        success: function(response) {
            var media = "";
            var x;
            var resp = jQuery.parseJSON(response);
            console.log(resp);
            for (x in resp.statuses) {
                var data = resp.statuses[x];
                media += "<li class='media border p-3'>"
                + "<img src='"+data.user.profile_image_url+"' class='align-self-start mr-3' id='show_img'>"
                + "<div class='media-body'> <h5 class='mt-0' id='show_name'>"+data.user.screen_name+"</h5>"
                +data.text+" </div>"
                + "</li>";
              }
            /*document.getElementById("show_name").innerHTML = resp.user.screen_name;
            document.getElementById("show_text").innerHTML = resp.text;
            document.getElementById("show_img").src = resp.user.profile_image_url;*/
            document.getElementById("show_all").innerHTML = media;
        },
        error: function(xhr) {
          alert("error");
        }
      });
}
