export class AppModel {
  user;
  items;
  constructor() {
    this.user = "Megha";
    this.items = [
      new TodoItem("Wake up early", false),
      // new TodoItem("Buy Flowers", false),
      // new TodoItem("Get Shoes", false),
      // new TodoItem("Collect Tickets", false),
      new TodoItem("Call Mom", true)
    ];
  }
}

export class TodoItem {
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
