//ex-1
class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

let firstEmail = new EmailNotification(1, "11:20", "Hello", "techup@gmail.com");
firstEmail.send();

let firstNumber = new SMSNotification(2, "11:20", "Hello", "099-9999999");
firstNumber.send();
