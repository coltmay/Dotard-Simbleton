import { getBusinesses } from "./BusinessData.js";
import { Business } from "./Business.js";

/* New Function, Utilizing forEach Method
/---------------------------------------------------------------------------*/
export const BusinessNameList = () => {
    // Set Variable to Specific Part of HTML
    const contentElementBusinessNames = document.querySelector(".businessNames");
    // Pulls Data From The Data File
    const businessArray = getBusinesses()
    // Adds A Header To The HTML Before Injecting
    contentElementBusinessNames.innerHTML = "<h1>Business List</h1>"
    // Loops Through Above Mentioned Pulled Array, That...
    businessArray.forEach(
        // For Every Object In The Array...
        (businessObject) => {
            // It Appends That Object To The Inner HTML After Passing It Through The Supply Function
            contentElementBusinessNames.innerHTML += Business(businessObject)
        }
    );
}

/* Old Function, Basic Template From In Class Exercise, Do Not Use
/------------------------------------------------------------------------------
export const BusinessNameList = () => {
    const contentElementBusinessNames = document.querySelector(".businessNames");

    const multipleBusinesses = getBusinesses();

    let businessesHTMLRepresentation = "";

    for (const oneBusiness of multipleBusinesses){
        businessesHTMLRepresentation += Business(oneBusiness);
    }
    contentElementBusinessNames.innerHTML +=`
        ${businessesHTMLRepresentation}
    `
}
/---------------------------------------------------------------------------*/
