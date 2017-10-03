import { Component } from '@angular/core';
import { AppModel, TodoItem } from "./_models/app.model";

@Component({
  selector: 'web-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*logic*/
export class AppComponent {

  /*plain class which holds data*/
  model = new AppModel();

  /*function used by template to access data*/
  getName() {
    return this.model.user;
  }

  getTodoItems() {
    /*return this.model.items.filter(item => !item.done);*/
    return this.model.items;
  }

  addItem(newItem){
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }

  deleteItem(newItem){
    if (newItem != "") {
      this.model.items = this.model.items.filter(item => item.action !== newItem);
    }
  }
}
