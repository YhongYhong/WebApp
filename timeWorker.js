function updateTime() {
    var colors = ["lightblue", "lightgreen", "yellow", "silver", "red", "pink"];
    var currentIndex = 0;
    setInterval(function() {
        currentIndex = (currentIndex+1)%colors.length;
        var currentTime = new Date().toString();
        var message = {time: currentTime, color: colors[currentIndex]};
        postMessage(message);
    }, 1000);
}

updateTime();