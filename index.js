
let ValidateIPaddress=()=>
{
    /*ip address*/
    let ip_add="250.5.26.9";
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(ip_add.match(ipformat))
    {

        console.log("Valid ip address")
        return true;
    }
    else
    {

        console.log("invalid IP address!");

        return false;
    }
};
ValidateIPaddress();