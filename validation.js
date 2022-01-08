// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^([a-z\d]){5,12}$/i,
    password: /^[\w@-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
}

    // see email.png for the RegExp's to designate the
    // different parts of the email address.

    // 1 ([a-z\d\.-]+)
    //   @ symbol
    // 2 ([a-z\d-])
    //   '.' dot
    // 3 ([a-z])
    // 4 (\.[a-z]{2,8})?
    
    // for 4, the dot is included in the RegExp because
    // the RegExp is OPTIONAL (with the help of the '?'
    // metacharacter at the end of the RegExp).

//validation function

function validate(field, regex) {
    if (regex.test(field.value)) { 
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
    
    // console.log(regex.test(field, value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

