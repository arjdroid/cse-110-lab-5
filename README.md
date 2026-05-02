# Lab 5 - Starter
Arjun Singh – https://arjdroid.github.io/cse-110-lab-5/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    _Well, unit tests would be useful to test individual functions that make up the chain involved in the "message" feature, so they have a place there. However, actually testing the "message" feature requires end-to-end testing to ensure all the components work together properly, so I'd need a more involved process to check whether such a fundamental feature of the application actually works._

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    _Absolutely I would use unit tests for fuzzing various input lengths and characters against such a feature, because it is a straightforward test to implement (whether it gives the go-ahead to let a message pass or not), and it's a single component so I don't have to worry about system-wide interactions._
