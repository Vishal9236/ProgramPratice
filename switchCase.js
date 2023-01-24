let percentage = 97;

switch (true) {
    
    case percentage > 90:
        console.log("Grade A+");        
        break;
    case percentage > 80:
        console.log("Grade A");        
        break;
    case percentage > 70:
        console.log("Grade B");        
        break;
    case percentage > 60:
        console.log("Grade C");        
        break;
    case percentage > 50:
        console.log("Grade D");        
        break;
    case percentage > 40:
        console.log("Grade E");        
        break;

    default:
        console.log("Better prepare next time.");
        break;
}
