/* 

### Regexp basics - parsing time

Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None.


### Example

"00:00:00".toSeconds() // 0
"01:02:03".toSeconds() // 3723
"01:02:60".toSeconds() // null
"01:60:03".toSeconds() // null
"99:59:59".toSeconds() // 359999
"0:00:00".toSeconds() // null
"00:0:00".toSeconds() // null
"00:00:0".toSeconds() // null
"00:00:00\n".toSeconds() // null
"\n00:00:00".toSeconds() // null
"100:59:59".toSeconds() // null
"09:059:59".toSeconds() // null
"09:159:59".toSeconds() // null
"09:59:059".toSeconds() // null
"09:59:159".toSeconds() // null


### ANSWER

*/

String.prototype.toSeconds = function () {
  // format is not HH:MM:SS or there is extra characters
  if (/[^\d:]/g.test(this) || !/(\d{2}):(\d{2}):(\d{2}(?!\d))/.test(this)) {
    return null;
  }

  const parseTime = this.replace(
    /(\d+):(\d{2}):(\d{2})/,
    (_, hour, min, sec) => {
      // minutes/seconds higher than 59 make the input invalid, and so should return null
      if (+hour > 99 || +min > 59 || +sec > 59) {
        return null;
      }

      return hour * 3600 + min * 60 + +sec;
    }
  );

  return isNaN(+parseTime) ? null : parseTime * 1;
};
