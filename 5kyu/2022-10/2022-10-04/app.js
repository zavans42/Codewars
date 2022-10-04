/* 

### RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.


### Example

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3


### ANSWER

*/

function rgb(r, g, b) {
  let rgb = [r, g, b];
  const hex = "0123456789ABCDEF";

  return rgb
    .map((color) => {
      // any values that fall out of that range must be rounded to the closest valid value.
      if (color < 0) {
        color = 0;
      }
      if (color > 255) {
        color = 255;
      }

      // divide the number by 16
      let firstVal = hex[Math.floor(color / 16)];
      // take the remainder of the first value and multiply by 16
      let secondVal = hex[Math.floor(color % 16)];

      return `${firstVal}${secondVal}`;
    })
    .join("");
}
