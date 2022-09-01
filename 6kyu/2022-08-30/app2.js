/* 

### Sums of Parts

A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed

Note: The total number of bits will always be a multiple of 8.


### Example

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

 should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

 The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

*/

// ANSWER

function dataReverse(data) {
  if (data.length < 1) {
    return false;
  }

  return data
    .join("")
    .match(/.{8}/g)
    .reverse()
    .join("")
    .split("")
    .map((x) => +x);
}
