import fs from "fs/promises";

async function loggingMiddleware(req, res, next) {
  try {
    const buffer = await fs.readFile("./data/logs.txt");
    
    const strLogsHistory = buffer.toString().split("\n");
    strLogsHistory.push(`IP:${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`);
    
    const newLogsHistory = strLogsHistory.join("\n");
    await fs.writeFile("./data/logs.txt", newLogsHistory);
    
    console.log("File has been rewritten successfully");
  } catch (error) {
    console.log(error);
  }
  next();
}

export default loggingMiddleware;