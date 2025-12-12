function  onlyCharacter( str ) {
    // You have to write your code here
    if (typeof (str) !== "string")
    {
        return "Invalid";
    }
    str.trim();
    let outputString = "";
    for (let i of str)
    {
        if (i !== ' ')
        {
            outputString = outputString + i;
        }
    }
    let res = outputString.toUpperCase();
    return res;
}
