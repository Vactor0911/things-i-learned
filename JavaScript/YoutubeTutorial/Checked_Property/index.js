const checkBox = document.getElementById("checkbox-1");
const radio1 = document.getElementById("radio-1");
const radio2 = document.getElementById("radio-2");
const radio3 = document.getElementById("radio-3");
const lblResult = document.getElementById("lbl-result");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.onclick = () => {
    let strResult = "Checkbox : ";
    strResult += checkBox.checked ? "Checked" : "Unchecked";

    strResult += "<br>Radio Selected : ";
    if (radio1.checked) {
        strResult += "Option 1";
    }
    else if (radio2.checked) {
        strResult += "Option 2";
    }
    else {
        strResult += "Option 3";
    }

    lblResult.innerHTML = strResult;
};