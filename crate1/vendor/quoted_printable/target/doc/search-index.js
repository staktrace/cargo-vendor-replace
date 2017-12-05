var searchIndex = {};
searchIndex["quoted_printable"] = {"doc":"","items":[[4,"ParseMode","quoted_printable","A flag that allows control over the decoding strictness.",null,null],[13,"Strict","","Perform strict checking over the input, and return an error if any input appears malformed.",0,null],[13,"Robust","","Perform robust parsing, and gracefully handle any malformed input. This can result in the decoded output being different than what was intended.",0,null],[4,"QuotedPrintableError","","An error type that represents different kinds of decoding errors.",null,null],[13,"InvalidByte","","A byte was found in the input that was outside of the allowed range. The allowed range is the horizontal tab (ASCII 0x09), CR/LF characters (ASCII 0x0D and 0x0A), and anything in the ASCII range 0x20 to 0x7E, inclusive.",1,null],[13,"LineTooLong","","Lines where found in the input that exceeded 76 bytes in length, excluding the terminating CRLF.",1,null],[13,"IncompleteHexOctet","","An '=' character was found in the input without the proper number of hex-characters following it. This includes '=' characters followed by a single character and then the CRLF pair, for example.",1,null],[13,"InvalidHexOctet","","An '=' character was found with two following characters, but they were not hex characters. '=Hi' for example would be an invalid encoding.",1,null],[13,"LowercaseHexOctet","","An '=' character was found with two following hex characters, but the hex characters were lowercase rather than uppercase. The spec explicitly requires uppercase hex to be used, so this is considered an error.",1,null],[5,"decode","","Decodes a piece of quoted-printable data.",null,{"inputs":[{"name":"r"},{"name":"parsemode"}],"output":{"name":"result"}}],[5,"encode","","Encodes some bytes into quoted-printable format.",null,{"inputs":[{"name":"r"}],"output":{"name":"vec"}}],[5,"encode_to_str","","Encodes some bytes into quoted-printable format.",null,{"inputs":[{"name":"r"}],"output":{"name":"string"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"parsemode"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}]],"paths":[[4,"ParseMode"],[4,"QuotedPrintableError"]]};
initSearch(searchIndex);