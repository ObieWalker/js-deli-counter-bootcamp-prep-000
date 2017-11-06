function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number " + katzDeliLine.length +" in line."
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var lineObject = {};
    for (var i=0; i<line.length; i++){
      lineObject[i+1] = line[i]
    }
    console.log(lineObject)
  }
  var item = ''
  var arr = ["The line is currently: "]
  for (var key in lineObject){
    item = key + ": " + lineObject[key]
    arr.push(item)
  }
  return arr;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  return "The line is currently" +katzDeliLine.index
}
