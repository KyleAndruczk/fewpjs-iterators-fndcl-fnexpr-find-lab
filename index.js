superbowlWin = result => {
    let win =  result.find( result => result.result == "W")
    if (win) {
        return win.year
    }
    else {
        return undefined
    }

}
