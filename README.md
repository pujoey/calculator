
<img align="left" alt="GA logo." title="General Assemb.ly" src="https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png" height="90px">

# WDI DTLA 6 Class Calculator Lab
This lab's goal is to build to a functional calculator web page.

## Technologies Used
HTML | CSS | jQuery

## Considerations
- When the calculator loads, 0 (zero) is in the display. Pressing the number 2 doesn't make the number 02, it's just 2.
- When you press a function key, the number currently in the display "locks" as the first number in the calculation, but it just stays right where it is. When another number is pressed, the number is replaced.
- If a function key is pressed, and then a different function key is pressed, the most recent one pressed is the function that will be used.
- After a calculation is performed, there are two possible scenarios. A) A new number is pressed. This will totally reset the calculator and start fresh with this number. B) a function key is pressed, which will lock the total as the "first" number, allowing a second calculation to be performed on the total
- The clear button needs to behave as advertised, and totally reset the calculator
Visual feedback needs to be used when appropriate, but more importantly, the functionality needs to match the standard set up by the zillions of calculators on desktops worldwide/
