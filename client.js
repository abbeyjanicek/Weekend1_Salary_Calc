console.log('js');

$(document).ready(onReady);

function onReady() {

    //Hey jQuery, when I click submit, I need you to grab the info from the input fields and put them in a table below.

    $('#submitButton').on('click', addEmployeeInfo)



}

function addEmployeeInfo(){
    console.log('Add Employee Info');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeID = $('#employeeID').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
    console.log(firstName);
    console.log(lastName);
    console.log(employeeID);
    console.log(jobTitle);
    console.log(annualSalary);
}

    //Put the info into a table.
    //$('#table').append('<tr class="blocks" id="redBlock" style="background-color:Red;"></div>');


