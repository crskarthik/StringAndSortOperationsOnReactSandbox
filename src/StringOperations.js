import React from "react";

function StringOperations() {
  var s = "isThisisalargestringdatawithanswerhidden";
  var t = "is";
  var count = 0;
  var lastIndex = s.indexOf(t);
  if (lastIndex >= 0) {
    var ts = s;
    while (lastIndex >= 0) {
      count++;
      ts = ts.slice(lastIndex + t.length);
      lastIndex = ts.indexOf(t);
    }
  }
  return <div>String occurences {count}</div>;
}
export default StringOperations;
