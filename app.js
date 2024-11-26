// Logger Singleton
const Logger = (function () {
    let instance; // Singleton instance
  
    class Logger {
      constructor() {
        if (instance) {
          return instance;
        }
        instance = this;
        this.logs = []; // Array to store logs
      }
  
      addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        const log = `[${timestamp}] ${message}`;
        this.logs.push(log);
        return log;
      }
  
      getLogs() {
        return this.logs;
      }
    }
  
    return Logger;
  })();
  
  // DOM Elements
  const logButton = document.getElementById('logButton');
  const showLogsButton = document.getElementById('showLogsButton');
  const logContainer = document.getElementById('logContainer');
  const allLogsContainer = document.getElementById('allLogsContainer');
  
  // Singleton Logger Instance
  const logger = new Logger();
  
  // Function to render logs in a container
  function renderLogs(container, logs) {
    container.innerHTML = logs.map(log => `<div>${log}</div>`).join('');
  }
  
  // Event Listeners
  logButton.addEventListener('click', () => {
    const logMessage = `Log Message #${logger.getLogs().length + 1}`;
    const newLog = logger.addLog(logMessage);
    logContainer.innerHTML += `<div>${newLog}</div>`; // Append the new log to the single log container
  });
  
  showLogsButton.addEventListener('click', () => {
    renderLogs(allLogsContainer, logger.getLogs()); // Refresh the all logs container with all logs
  });
  