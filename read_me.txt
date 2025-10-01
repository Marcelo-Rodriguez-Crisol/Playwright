I've decided to automate the following test cases:
PMT-01 - Guest user purchase
PMT-11 - Logged user purchase
PMT-04 - Expired CC Month/Year
These are critical to the business, and often the most important
With these we validate that both type of users are able to perform
purchases and that expired credit cards are not accepted to make
transactions.

I had to set up everything for the firs time since this is the 
first bit of automation I do ever. I find it very easy to create a basic case 
and I have come through several doubts I will be clearing up in the following 
days to better myself on this skill
1. I had a few problems with the setup, chatgpt helped me with those errors
2. PMT-04 started failing but I didn't understand why. ChatGPT added a constant
with a page.locator as sweet.message for something that was a bit harder to find.
3. I'd edit some of the code to expect the hypothetical CVV code for it to fail
4. Since this is my first time ever creating some scenarios for automation
I asked ChatGPT several of questions.
https://chatgpt.com/share/68dd7a3f-79b0-800d-b983-b5fe5fde2bc8

With more time, I'd prepare an automated report that I've seen its possible 