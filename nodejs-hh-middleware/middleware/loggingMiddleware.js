import fs from "fs/promises";

async function loggingMiddleware(req, res, next) {
  try {
    // 1) read file
    const buffer = await fs.readFile("./data/logs.txt");

    // 2) เก็บข้อมูลแต่ละบันจากไฟล์ในใส่ใน Array
    const strLogsHistory = buffer.toString().split("\n");

    // 3) เพิ่มข้อมูลเข้าไปใน ฟพพฟั
    strLogsHistory.push(
      `IP:${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );

    //4) join
    const newLogsHistory = strLogsHistory.join("\n");

    // 5) create file
    await fs.writeFile("./data/logs.txt", newLogsHistory);

    console.log("File has been rewritten successfully");
  } catch (error) {
    console.log(error);
  }
  next();
}

export default loggingMiddleware;
