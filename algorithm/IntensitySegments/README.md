# Intensity Segments
## Guidelines
In this part of the interview process, we’d like you to come up with an algorithm to solve the problem as described below. The problem itself is quite simple to solve. What we are mainly looking for in this test (other than that the solution should work) is, how well you actually write the code. We want to see how you **write production-quality code in a team setting** where multiple developers will be collaborating on the codebase.

Specifically, we are looking for: simple, clean, readable and maintainable code, for example:
- Code organization and submission format. Things like code organization, readability, documentation,
testing and deliverability are most important here.
- Your mastery of idiomatic programming.
The solution is prefered to be in JavaScript. We understand that you may not have much experience with JS. We encourage you to take some time to research modern JS and best practices, and try your best to apply them when writing your test solution.

If you choose to use a programming language other than JS, please still make sure you stick to the idiomatic way of that programming language.
## Problem Set
Please **use the exact class name, method name and input/output formats** in this code template.

We are looking for a program that manages “intensity” by segments. Segments are intervals from -infinity to infinity, we’d like you to implement functions that updates intensity by an integer amount for a given range.All intensity starts with 0. Please implement these three functions:

```javascript
/**
*
* NOTE: Feel free to add any extra member variables/functions you like.
*/
export class IntensitySegments {
    /**
    *
    */
    add(from, to, amount) {
        // TODO: implement this
    }

    /**
    *
    */
    set(from, to, amount) {
        // TODO: implement this
    }

    /**
    *
    */
    toString() {
        // TODO: implement this
    }
}

// Here is an example sequence:
// (data stored as an array of start point and value for each segment.)
const segments = new IntensitySegments();
segments.toString(); // Should be "[]"

segments.add(10, 30, 1);
segments.toString(); // Should be: "[[10,1],[30,0]]"

segments.add(20, 40, 1);
segments.toString(); // Should be: "[[10,1],[20,2],[30,1],[40,0]]"

segments.add(10, 40, -2);
segments.toString(); // Should be: "[[10,-1],[20,0],[30,-1],[40,0]]"

// Another example sequence:
const segments = new IntensitySegments();
segments.toString(); // Should be "[]"

segments.add(10, 30, 1);
segments.toString(); // Should be "[[10,1],[30,0]]"

segments.add(20, 40, 1);
segments.toString(); // Should be "[[10,1],[20,2],[30,1],[40,0]]"

segments.add(10, 40, -1);
segments.toString(); // Should be "[[20,1],[30,0]]"

segments.add(10, 40, -1);
segments.toString(); // Should be "[[10,-1],[20,0],[30,-1],[40,0]]"
```