```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("651e9e6510a72d6c5e186789")}, {"$inc": {"count": 10}});
```