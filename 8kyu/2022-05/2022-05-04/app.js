/* CHALLENGE

Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio 
that maintain equal height. Round your answers up to the nearest integer.

*/

/* EXAMPLE

aspectRatio(640, 480) // [854,480], "x = 640, y = 480"
aspectRatio(960, 720) // [1280,720], "x = 960, y = 720"
aspectRatio(1440, 1080) // [1920,1080], "x = 1440, y = 1080"
aspectRatio(1920, 1440) // [2560,1440], "x = 1920, y = 1440"

*/

// ANSWER

const aspectRatio = (_, y) => [Math.ceil(y * 16 / 9), y]