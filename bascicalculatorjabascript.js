const prompt = require("prompt-sync")();

function additon(a,b)
{
   return a+b

}

function subtraction(a,b)
{
    return(a-b)

}

function multiplication(a,b)
{
   return(a*b)

}

function divison(a,b)
{
    return(a/b)

}

function condition(a,b,c)
{
   if(!isNaN(a) && !isNaN(b))
   {
    if(c==="add")
    {

        console.log(additon(a,b));
    }
    else if(c==="subtract")
    {
        console.log(subtraction(a,b))

    }
    else if(c==="multiply")
    {
        console.log(multiplication(a,b))
    }
    else if(c==="divide")
    {
        if(b!=0 )
        {
            console.log(divison(a,b))
        }
        else
            {
               console.log("divison by zero is not allowed")
            }
        

    }
    else
    {
        console.log("Error: Invalid operation")
    }
   }
   else
    {
        if(isNaN(a) && isNaN(b))
        {
            console.log("a and b is string ")
        }
        else if(isNaN(a))
        {
            console.log("a is string ")
        }
        else

            {
                console.log("b is string ")
            }
      
        
    }

   }
   

    


let a=Number(prompt("user input nuber a "))
let b=Number(prompt("user input nuber b "))
let c=prompt("type your condition(add,subtract,multiply,divide) ")
condition(a,b,c)