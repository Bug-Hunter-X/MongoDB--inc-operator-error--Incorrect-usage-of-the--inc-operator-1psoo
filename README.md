# MongoDB $inc Operator Error

This repository demonstrates an error related to the usage of the `$inc` operator in MongoDB update operations. The error occurs when attempting to increment a field with a string value instead of a number.

## Bug Description

The provided code snippet incorrectly uses the `$inc` operator by passing a string value ("10") as the increment value. This results in unexpected behavior, as the `$inc` operator expects a numeric value.

## Solution

The solution involves correcting the update operation to pass a numeric value to the `$inc` operator.

## How to reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection named `myCollection` with at least one document containing a numeric field named `count`.
3.  Run the buggy code snippet. The operation will fail, and count won't be incremented. 
4.  Run the corrected code snippet. The operation will succeed, and the count field will be updated correctly.