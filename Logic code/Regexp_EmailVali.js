
// program to validate the email address

function validateEmail(email) {

    // regex pattern for email
    const re = /\S+@\S+\.\S+/g;

    // check if the email is valid
    let result = re.test(email);
    if (result) {
        console.log('The email is valid.');
    }
    else {
        let newEmail = prompt('Enter a valid email:');
        validateEmail(newEmail);
    }
}

// take input
let email = prompt('Enter an email: ');

validateEmail(email);








// program to validate the phone number

function validatePhone(num) {

    // regex pattern for phone number
    const re = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/g;

    // check if the phone number is valid
    let result = num.match(re);
    if (result) {
        console.log('The number is valid.');
    }
    else {
        let num = prompt('Enter number in XX-XXXXX-XXXXX format:');
        validatePhone(num);
    }
}

// take input
let number = prompt('Enter a number XX-XXXXX-XXXXX');

validatePhone(number);
