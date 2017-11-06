function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number " + katzDeliLine.length +" in line."
}

function nowServing(lineArray){
  if (lineArray.length === 0){
    return "There is nobody waiting to be served!"
  }
  var next = lineArray[0]
  lineArray.shift()
  return "Currently serving "+next +"."
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  return "The line is currently" +(katzDeliLine.index+1)  
}
