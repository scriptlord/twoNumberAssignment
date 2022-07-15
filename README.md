# twoNumberAssignment

# Solution to find the two numbers that sums up to a target

# The solution to this algorithm challenge must be written in Javascript.

Given an array of integers nums and an integer target, create a function that returns the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Input: nums = [2,7,11,15], target = 9

Output: [2,7]

Explanation: Because 2 + 7 == 9, we return [2, 7]

# Constraints:
# You can return the answer in any order
# Only one valid answer exists

Please create a public repository on GitHub containing your source code, and submit the GitHub link. We would like to ask you to strictly avoid mentioning paradigm initiative in your GitHub repository. Feel free to add comments and more information in your

# PSEUDOCODE
    create a function to accept two arguments: array and target value
    create an object to keep track of the number whose differnce is present in the array
    loop through each element in the array and find the difference between the target and the element
    if the difference is present in the object, return the two numbers (the current value in the array and difference)
    if the difference is not present in the object, add it to the object
