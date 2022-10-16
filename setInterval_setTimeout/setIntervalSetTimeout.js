/* const logMessage = (message) => {
  document.getElementById("timer").textContent = message;
  setTimeout(() => {
    document.getElementById("timer").textContent = "";
  }, 1000);
  setTimeout(() => {
    logMessage(message);
  }, 2000);
};

window.addEventListener("load", logMessage("marcel")); */
let message = 'Marcel'

const logMessage = (message) => {
  document.getElementById("timer").textContent = message;
};

const displayMessageInterval = setInterval(() => {
    logMessage(message)
    //console.log(message);
}, 2000)


const initEraseDisplayTimeout = setTimeout(() => {
    setInterval(() => {
        document.getElementById('timer').textContent = '';
        //console.log('clear');
    }, 2000);
}, 1000)

setTimeout(() => {
  clearTimeout(initEraseDisplayTimeout);
  clearInterval(displayMessageInterval);
  document.getElementById('timer').textContent = 'Message Over';
},10000)