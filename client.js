console.log('js');

$(document).ready(onReady);

function onReady() {

    $('#submitButton').on('click', addEmployeeInfo);
    $('#deleteRow').click(function () {
        $('tbody').find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
}
    //$('#deleteButton').on('click', deleteEmployee);

    let totalMonthlySalary = 0;

    function addEmployeeInfo() {
        console.log('Add Employee Info');

        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let employeeID = $('#employeeID').val();
        let jobTitle = $('#jobTitle').val();
        let annualSalary = $('#annualSalary').val();
        let monthlySalary = (($('#annualSalary').val()) / 12);
        monthlySalary = parseFloat(monthlySalary.toFixed(2));
        totalMonthlySalary = totalMonthlySalary + monthlySalary;

        //$('#tableFirstName').append('<td></td>', firstName);
        //$('#tableLastName').append('<td></td>', lastName);
        //$('#tableEmployeeID').append('<td></td>', employeeID);
        //$('#tableJobTitle').append('<td></td>', jobTitle);
        //$('#tableAnnualSalary').append('<td></td>', annualSalary);
        addEmployee = "<tr><td><input type='checkbox' name='record'></td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + employeeID + "</td><td>" + jobTitle + "</td><<td>" + annualSalary + "</td>/tr>";
        $('tbody').append(addEmployee);

        //function totalMonthlySalary (){
            //$('#totalMonthlySalary').val(totalMonthlySalary);   
        //}

        $('#firstName').val('');
        $('#lastName').val('');
        $('#employeeID').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');

        salaryWarning();
       
        console.log(firstName);
        console.log(lastName);
        console.log(employeeID);
        console.log(jobTitle);
        console.log(annualSalary);
        console.log(monthlySalary);
    }


    function salaryWarning() {
        if (totalMonthlySalary > 20000) {
            //background-color = "red";<--- This is not correct.
            console.log('Your monthly salary total is ' + totalMonthlySalary);
        }
    }