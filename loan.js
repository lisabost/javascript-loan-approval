$(document).ready(function() {

    var approvalMessage = "Your Loan Application has been Approved!"
    var denialMessage = "Your Loan Application has been Denied"
    // event handlers


    // object containing the validation rules
    var loanRules =
        {
            salary: {
                required: true,
                min: 0,
                max: 250000,
                number: true
            },
            credit: {
                required: true,
                min: 300,
                max: 850,
                number: true
            },
            months: {
                required: true,
                min: 0,
                max: 120,
                number : true,
            }
        }

    // object containing the error messages
    var loanMessages =
        {
            salary: {
                required: "This value is required",
                min: "Your must have a positive salary to qualify for a loan",
                max: "If you make over $250,000 please see our VIP loan division",
                number: "Please enter a valid salary"
            },
            credit: {
                required: "This value is required",
                min: "You must have a credit score over 300 to qualify",
                max: "The maximum FICO credit score is 850",
                number: "Please enter a valid number"
            },
            months: {
                required: "This value is required",
                min: "You must enter a valid number of months",
                max: "If you've worked at your job for 10 years or more, please see our VIP loan division",
                number: "Please enter a valid number"
            }
        }

        $("form").validate( {
            submitHandler: loanApproval,
            rules: loanRules,
            messages : loanMessages
        });


    // other functions
    function loanApproval() {
        //get user's entered values
        var salary = parseFloat($("#salary").val());
        var credit = parseInt($("#credit").val());
        var months = parseInt($("#months").val());


        if(salary >= 40000) {
            if(credit >= 600) {
                $("#message").text(approvalMessage).addClass("approved");
            } else {
                if(months > 12) {
                    $("#message").text(approvalMessage).addClass("approved");
                } else {
                    $("#message").text(denialMessage).addClass("denied");
                }
            }
        } else {
            if(credit >= 600) {
                if(months > 12 && months > 12) {
                    $("#message").text(approvalMessage).addClass("approved");
                } else {
                    $("#message").text(denialMessage).addClass("denied");
                }
            } else {
                $("#message").text(denialMessage).addClass("denied");
            }
        }
    }

});