import { Component, OnInit } from '@angular/core';

export interface ProjectItem {
  position: number,
  name: string;
  ui: ResItem[];
  ux: ResItem[];
}

export interface ResItem {
  name: string;
  path: string;
}

const ELEMENT_DATA: ProjectItem[] = [
  {
    position: 0,
    name: "项目名",
    ui: [
      {
        name: "xx",
        path: "/a/b/c"
      },

      {
        name: "xx11",
        path: "/a/b/c"
      }
    ],
    ux: [
      {
        name: "xx",
        path: "/a/b/c"
      }
    ]
  },
  {
    position: 1,
    name: "项目名",
    ui: [
      {
        name: "xx",
        path: "/a/b/c"
      },

      {
        name: "xx11",
        path: "/a/b/c"
      }
    ],
    ux: [
      {
        name: "xx",
        path: "/a/b/c"
      }
    ]
  }
];

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.less']
})
export class ResComponent implements OnInit {
  
  value = '';

  displayedColumns: string[] = ['position', 'name', 'ui', 'ux'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
