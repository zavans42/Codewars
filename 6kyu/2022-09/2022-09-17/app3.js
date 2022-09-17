/* 

### extract file name

You have to extract a portion of the file name as follows:
- Assume it will start with date represented as long number
- Followed by an underscore
- You'll have then a filename with an extension
- it will always have an extra extension at the end


### Example

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION > FILE_NAME.EXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34 > This_is_an_otherExample.mpg

1231231223123131_myFile.tar.gz2 > myFile.tar

*/

// ANSWER

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.replace(/\d+_(.+)(\..+)/, "$1");
  }
}
