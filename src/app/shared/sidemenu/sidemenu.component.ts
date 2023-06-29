import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  appitems : any= [];

  config = {
    paddingAtStart: true,
    classname: "side-nav-menu",
    fontColor: "#000",
    selectedListFontColor: "#267fff",
    // backgroundColor: "#dad6ff",
    highlightOnSelect: true,
    useDividers: false,
    collapseOnSelect: true,
  };
  constructor() { }

  ngOnInit(): void {

    this.appitems=[
      {
        label:"Dashboard",
        link:"/dashboard",
        icon:"question_answer"
      },
      {
        label:"Student Registration",
        link:"/student-registration",
        icon:"group"
      },
      
      {
        label:"Teacher Registration",
        link:"/teacher-registration",
        icon:"group"
      },
      {
        label:"Question-Bank",
        link:"/question-bank",
        icon:"redeem"
      },
      
      {
        label:"Tests",
        link:"/test-structure",
        icon:"redeem"
      },

      {
        label:"Reports",
        link:"/question-bank",
        icon:"redeem"
      },
      
      {
        label:"Proctoring",
        link:"/question-bank",
        icon:"redeem"
      },
      
      {
			  label: "Logout",
			  // link: "/",
			  icon: "logout",
		
			}
      
      
    ]
  }

}
