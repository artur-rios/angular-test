import { Component } from '@angular/core';

@Component({
  selector: 'app-gui-test',
  templateUrl: './gui-test.component.html',
  styleUrls: ['./gui-test.component.scss'],
})
export class GuiTestComponent {
  public navbarItems: Item[] = [
    { name: 'GitHub', url: 'https://github.com/artur-rso' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/artur-rso' },
  ];
}

export interface Item {
  name: string;
  url: string;
}
