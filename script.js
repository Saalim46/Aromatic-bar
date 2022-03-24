$(document).ready(function(){
    $("#submit_form").validate({
       rules: {
                customer_name: {
                    required: true,
                    minlength: 3,
                    maxlength: 35,
                    letters: true
                },
                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                email: {
                    emailtest: true,
                    required: true,
                    email: true
                },
                rate_quality:"required"
            },

            messages: {
                customer_name: {
                    required: "Customer Name is required",
                    letters: "Must enter character only",
                    maxlength: "Please enter 35 Characters only"
                },
                email: {
                    required: "Email is required",
                    email: "Please enter a valid email id",
                    emailtest: "Please enter a valid email address"
                },
                phone: {
                    required: "Please enter a valid mobile number",
                    minlength: "Please enter 10 digits only",
                    maxlength: "Please enter 10 digits only"
                },
            }
    });
});

