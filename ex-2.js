//ex-2
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

let emailNotification = new EmailNotification(
  1,
  "11:20",
  "Hello",
  "techup@gmail.com"
);
emailNotification.send();

let smsNotification = new SMSNotification(2, "11:20", "Hello", "099-9999999");
smsNotification.send();
