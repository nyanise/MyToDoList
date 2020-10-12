$(document).ready(function(){
  
    $(".input").on("keydown",(e)=>{
        if(e.which===13){
        let input=$('input').val()
        $("#notComplete").append(`<li class="li"><i class="fas fa-check-square check i"></i><div class="con">${input}<i class="fas fa-trash delete i"></i></div> </li> `);
        $('input').val("");
        
        $(".delete").click(function(){
            var p=$(this).parentsUntil("ul");
            p.fadeOut(function(){
                p.remove();
            });
           
        })
        $(".check").click(function(){
           var d =$(this).parent();
           d.fadeOut(()=>{
               $("#complete").append(d);
               d.fadeIn();
           })

        });
    }
    })
    
  
})