import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  appitems : any= [];
	storedUser: any;

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
  constructor(private router : Router) { }

 

  ngOnInit(): void {

    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      this.storedUser = JSON.parse(storedUserString);
      console.log('Stored User Info:', this.storedUser);
    } else {
      console.log('User information not found in localStorage');
    }
  
    if(this.storedUser.role == "admin"){
      this.appitems=[
        {
          label:"Dashboard",
          link:"/",
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
          label:"Admin",
          link:"/question-bank",
          icon:"redeem"
        },
        {
          label:"Logout",
          link:"/login",
          icon:"person",
          onSelected: () => {
            this.logoutFunction();
            } 
        }
        
        
      ]
    }else if(this.storedUser.role == "student"){
      this.appitems=[
        {
          label:"Dashboard",
          link:"/",
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
          label:"Logout",
          link:"/login",
          icon:"person",
          onSelected: () => {
            this.logoutFunction();
            } 
        }
        
        
      ]
    }else if(this.storedUser.role == "approver"){
      this.appitems=[
        {
          label:"Dashboard",
          link:"/",
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
          label:"Logout",
          link:"/login",
          icon:"person",
          onSelected: () => {
            this.logoutFunction();
            } 
        }
        
        
      ]
    }
  
  
    }




  logoutFunction(){
    console.log("clearr");
    localStorage.clear();

    console.log(localStorage);
    
  }
}
