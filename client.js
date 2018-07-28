console.log('js');

$(document).ready(onReady);

function onReady() {

    $('#submitButton').on('click', addEmployeeInfo);
}

function addEmployeeInfo() {
    console.log('Add Employee Info');

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeID = $('#employeeID').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    $('#tableFirstName').append('<td></td>', firstName);
    $('#tableLastName').append('<td></td>', lastName);
    $('#tableEmployeeID').append('<td></td>', employeeID);
    $('#tableJobTitle').append('<td></td>', jobTitle);
    $('#tableAnnualSalary').append('<td></td>', annualSalary);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    console.log(firstName);
    console.log(lastName);
    console.log(employeeID);
    console.log(jobTitle);
    console.log(annualSalary);
}


