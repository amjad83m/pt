// pt, Pt, pT: pascal's triangle

function getUserInput() {
    
    var userNum = document.getElementById("user-input-field").value;
    
    if (isNaN(userNum)) {
        alert("Invalid number! Please try again and enter a VALID NUMBER to continue!");
    } else {
        calcPt(userNum);
    }
}

function calcPt(n) {
    
    // an array to hold the rows of pt
    var elements = new Array();
    
    // getting the div object that will display the pt inside the HTML page
    var ptDiv = document.getElementById("pt");
    ptDiv.innerHTML = "";
    
    for (i = 0; i <= n; i++) {
        
        // iterating through rows, creating a paragraph element for each row, and preparing the text for it
        var myP = document.createElement("P");
        var myT = "";
        
        // for each element of the row array, creating a new array, the columns
        elements[i] = new Array();
        for (j = 0; j <= i; j++) {
            
            // the first element of each row is 1
            elements[i][0] = 1;
            
            // and the last element of each row is 1
            elements[i][i] = 1;
            
            // calculating the value of the remaining elements in each row, filling the columns
            if (j !== 0 && j !== i) {
                elements[i][j] = elements[i - 1][j] + elements[i - 1][j - 1];
            }
            
            myT += elements[i][j] + " ";
            
        }
        
        // adding the row as text to the paragraph created earlier
        myP.appendChild(document.createTextNode(myT));
        
        // adding the paragraph to the pt div
        ptDiv.appendChild(myP);
    }
    
}

function resetResult() {
    document.getElementById("user-input-field").value = "";
    document.getElementById("pt").innerHTML = "";
}