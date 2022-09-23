/* 

### Master of Files

You will create 2 string methods:
isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .mp3, .flac, .alac, or .aac.
isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .jpg, .jpeg, .png, .bmp, or .gif.

Note that this is not a generic image/audio files checker. It's meant to be a test for Bill's files only. Bill doesn't like punctuation. He doesn't like numbers, neither. Thus, his filenames are letter-only

Rules
1. It should return true or false, simply.
2. File extensions should consist of lowercase letters and numbers only.
3. File names should consist of letters only (uppercase, lowercase, or both)


### Example

"Nothing Else Matters.mp3".isAudio(), false
"NothingElseMatters.mp3".isAudio(), true
"DaftPunk.FLAC".isAudio(), false
"DaftPunk.flac".isAudio(), true
"AmonTobin.aac".isAudio(), true
" Amon Tobin.alac".isAudio(), false
"tobin.alac".isAudio(), true
"Home.jpg".isImage(), true
"flat.jpeg".isImage(), true
"icon.bmp".isImage(), true
"icon2.jpg".isImage(), false
"bounce.gif".isImage(), true
"animate bounce.GIF".isImage(), false
"transparency.png".isImage(), true


### ANSWER

*/

String.prototype.isAudio = function () {
  return (
    /^\D+\.(flac|mp3|alac|aac)$/.test(this) &&
    /^\S+\.(flac|mp3|alac|aac)$/.test(this)
  );
};

String.prototype.isImage = function () {
  return (
    /^\D+\.(jpg|jpeg|png|bmp|gif)$/.test(this) &&
    /^\S+\.(jpg|jpeg|png|bmp|gif)$/.test(this)
  );
};
