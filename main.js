//*<-------------- Query Selectors -------------->*//

let alertForm = document.querySelector('#alertForm');
let alertinput = document.querySelector('#alertInput');

let sandwichForm = document.querySelector('#sandwichForm');
let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

let haircutForm = document.querySelector('#haircutForm');
let stylist = document.querySelector('#stylistInput');
let date = document.querySelector('#hcDate');
let shortHair = document.querySelector('#short');
let longHair = document.querySelector('#long');


let createAccountForm = document.querySelector('#createAccount');
let password1 = document.querySelector('#password-1');
let password2 = document.querySelector('#password-2');
let userName = document.querySelector('#userName');
let email = document.querySelector('#emailAddress');




//*<-------------- Alert Form Functionality -------------->*//

alertForm.addEventListener('submit', function(event){
  event.preventDefault();
  alert(alertinput.value);
  alertinput.value = ""; // Sets default value to empty
})


//*<-------------- Sandwich Builder Functionality -------------->*//

    sandwichForm.addEventListener('submit', function(event){
     
    event.preventDefault();
    let newString = "";      
      for (let i = 0; i < ingredients.length; i++) {
        if(ingredients[i].checked === true){
          newString += `${ingredients[i].id}, `;
        }
      };
        
        alert(`Your sandwich contains: ${newString}. Your order is now complete!`)
    });

    //*<-------------- Haircut Appointment Functionality -------------->*//   
    haircutForm.addEventListener('submit', function(event){
      hairstyle = "";    
      event.preventDefault();   
          
            if(longHair.checked === true){
              hairstyle = "long";
            }else if (shortHair.checked === true){
              hairstyle = "short"
            }
            alert(`Your haircut is scheduled for ${date.value} with ${stylist.value} for ${hairstyle} hair.`);     
          });


    //*<-------------- Create Account Functionality -------------->*//
      createAccountForm.addEventListener('submit', function(event){
            event.preventDefault();

    // if statement to check for second password. 
    
    if(password2.value !== password1.value){
      alert("You passwords do not match. Please re-type your password.")
         }else if (password1.value === "") {
            alert("Please enter a valid password");
       }else if(password2.value === ""){
            alert("Please enter a valid password");
    } else{
      alert("Thank you for creating an account. You should receive a confirmation email shortly.")
    }
   // set values back to default empty
    password1.value = "";
    password2.value = "";
    email.value = "";
    userName.value = "";

 });

