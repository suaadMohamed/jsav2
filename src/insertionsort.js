var codeArr = [
    "function insertionSort() {",
    "   for (let sortedIndex = 0; i < sortedIndex.size() - 1; i++) {",
    "       for (let indexToCompare = sortedIndex + 1; indexToCompare > 0 && arr[indexToCompare] < arr[sortedIndex]; j--) {",
    "           if (arr[indexToCompare] < arr[indexToCompare - 1]) {",
    "               arr.swap(indexToCompare, indexToCompare - 1);",
    "        }",
    "       }",
    "   }",
    "}"
]




function run(){
    let runButton = document.getElementById("run")

    runButton.addEventListener("click", function() {
        let input = document.getElementById("userInput")
        let str = input.value;
        // if no commas and spaces are present
        if (str.indexOf(",") == -1 && str.indexOf(" ") != -1) {
            alert("User specified input should contain commas instead of spaces: " + str)
            return;
        }

        let formattedString = str.split("").filter(e => e != " ").join("")        
        let arr = formattedString.split(",");

        runInsertionSort([3,2,1]);
        document.getElementById("run").disabled = true;

    })
}

// funtion for the reset button 
function reset() {
    let resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", function () {
      location.reload();
   })
}



var setProcessing = function(arr, index) {
    arr.addClass(index, "processing");
  };
var unsetProcessing = function(arr, index) {
    arr.removeClass(index, "processing");
};


// function for insertion sort 
function runInsertionSort(theArray) {
    var jsav = new JSAV("container");
    var arr = jsav.ds.array(theArray);
    var code = jsav.code(codeArr)
    code.setCurrentLine(1)
    jsav.umsg("Starting insertion sort");
    jsav.step()
    for (let sortedIndex = 0; sortedIndex < arr.size() - 1; sortedIndex++) {
        jsav.umsg("Everything up to index " + sortedIndex + " is in sorted order");
        code.setCurrentLine(2)
        arr.highlight(sortedIndex)
        jsav.step();
        code.setCurrentLine(3)
        jsav.step();
        let indexToCompare;
        for (indexToCompare = sortedIndex + 1; indexToCompare > 0 && arr.value(indexToCompare) < arr.value(sortedIndex); indexToCompare--) {
            jsav.umsg("Processing index " + indexToCompare + " in blue");
            setProcessing(arr, indexToCompare)
            jsav.step();
            jsav.umsg("Comparing to the value to the left");
            code.setCurrentLine(4)
            jsav.step();
            for ( j= indexToCompare; j>0&&arr.value(j) < arr.value(j -1) ;j--) {
                jsav.umsg("Swap");
                code.setCurrentLine(5)
                arr.highlight(j)
                arr.unhighlight(j - 1)
                unsetProcessing(arr, j)
                setProcessing(arr, j - 1)
                arr.swap(j, j - 1)
                jsav.step();
            }
          
         
            
        }
        // arr.highlight(indexToCompare -1)
        // arr.highlight(indexToCompare)
        unsetProcessing(arr, (indexToCompare))
        // arr.unhighlight(indexToCompare)



    }
    jsav.umsg("Finished");
    arr.highlight(arr)
    code.setCurrentLine(8)
    jsav.recorded();
   

    
}
    
run()
reset()
