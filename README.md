# PasswordGenerator
A js run website that can generate a 8-128 characters long password containing options for upper &amp; lowercase letters, numbers, and select special characters.

## Description
Generator was created using HTML, bootstrap, CSS, and JavaScript. Basic HTML outline was provided. I used bootstrap and css to style the page. Using JavaScript, I developed a process for generating a password. 

## Process
Users are asked:
    How many characters do you want (min 8, max 128)?
    Do you want special characters included?
    Do you want numbers included?
    Do you want lowercase characters?
    Do you want uppercase characters?

4/5 of these pair with arrays:
    Special Characters
    Numbers
    Lowercase Letters
    Uppercase Letters

When the user selects an option that corresponds to an array, that array is pushed into a string. Since strings are arrays of characters, this string becomes the array from which to randomly choose characters. 

A loop then randomly selects the characters. Each character is pushed into an array until they fulfill the user's desired character length. This generated password is then written into the password box. The user may use the copy button to copy the password directly to their clipboard. 