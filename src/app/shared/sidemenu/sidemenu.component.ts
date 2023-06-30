import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

 

  ngOnInit(): void {

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const routeData = this.activatedRoute.snapshot.firstChild?.data;
    //     if (routeData && routeData['showHeaderSidemenu'] === false) {
    //       return; 
    //     }


    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      this.storedUser = JSON.parse(storedUserString);
      console.log('Stored User Info:', this.storedUser);

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
            link:"/create-test",
            icon:"redeem"
          },        
          {
            label:"Admin",
            link:"/question-bank",
            icon:"redeem"
          },
          {
            label:"Logout",
            icon:"person",
            onSelected: () => {
              this.logoutFunction();
              } 
          }
          
          
        ]
      }else if(this.storedUser.role == "teacher"){
        this.appitems=[
          {
            label:"Edit Profile",
            link:"/edit-teacher-profile",
            icon:"edit"
          },
          {
            label:"Dashboard",
            link:"/",
            icon:"question_answer"
          },
          {
            label:"Teacher Registration",
            link:"/teacher-registration",
            icon:"group"
          },
          {
            label:"Tests",
            link:"/create-test",
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
      }
    } else {
      console.log('User information not found in localStorage');
    }
  


//   }
// })
  
  }
  





  logoutFunction(){
    console.log("clearr");
    localStorage.clear();

    console.log("localStorage", localStorage);
    this.router.navigate(["login"])
    
  }
}
