$(document).ready(function (){
    document.getElementById("Connect").addEventListener("click",function(){
        ergo_request_read_access().then(function(){
            if (ergo_check_read_access()){
                ergo.get_balance("bfb4c24303c973ae42e64a226f322b64d7e55631b4ccbc96633199fa10caf3de").then(function(tokens){
                    document.getElementById("Balance").value=tokens;
                });
            } else{
                console.log("An error has occurred");
            }
        });
    });
});