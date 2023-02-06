var result1 = [
  { id: 1, name: "Sandra", type: "user", username: "sandra" },
  { id: 2, name: "John", type: "admin", username: "johnny2" },
  { id: 3, name: "Peter", type: "user", username: "pete" },
  { id: 4, name: "Bobby", type: "user", username: "be_bob" },
];

var result2 = [
  { id: 2, name: "John", email: "johnny@example.com" },
  { id: 4, name: "Bobby", email: "bobby@example.com" },
];
const mergedResults = result1.map((result1Item) => {
  const result2Item = result2.find((item) => item.id === result1Item.id);
  return {
    ...result1Item,
    ...result2Item,
  };
});

console.log(mergedResults);
