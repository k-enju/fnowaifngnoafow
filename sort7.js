function autoSortAndValidate() {
    var correctOrder = [a1, a2, a3, a4, a5, a6, a7];

    // Sort the list according to the correct order
    var listItems = $('#right-box li').sort(function (a, b) {
        return correctOrder.indexOf($.trim($(a).text())) - correctOrder.indexOf($.trim($(b).text()));
    });

    // Append the sorted items back to the list
    $('#right-box ul').empty().append(listItems);

    // Trigger the validation logic
    validateSorting();
}

// Define the validation function if it's not already available
function validateSorting() {
    var answer = [];
    $('#right-box li').each(function (index) {
        answer[index] = $.trim($(this).text());
    });

    if (answer[0] === a1 && answer[1] === a2 && answer[2] === a3 && answer[3] === a4 && answer[4] === a5 && answer[5] === a6 && answer[6] === a7) {
        $('li').animate({ "border-color": "green", "border-width": "1px" }, 500);
        $('li').effect("highlight", {}, 5000);
        $('.greg').text('Correct! You have completed the test.');
        $("#change").replaceWith(ma1);
    } else {
        $('#outcome').hide();
    }
}

// Run the auto-sort and validate function
autoSortAndValidate();