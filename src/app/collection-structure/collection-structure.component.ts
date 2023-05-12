import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-structure',
  templateUrl: './collection-structure.component.html',
  styleUrls: ['./collection-structure.component.css']
})
export class CollectionStructureComponent implements OnInit {

   constructor() { }

  ngOnInit(): void {
  }
  courses = [  {    name: 'Course 1',    subjects: [      {        name: 'Subject 1',        topics: [          { name: 'Topic 1', subtopics: ['Subtopic 1', 'Subtopic 2'] },
  { name: 'Topic 2', subtopics: ['Subtopic 3', 'Subtopic 4'] }
]
},
{
name: 'Subject 2',
topics: [
  { name: 'Topic 3', subtopics: ['Subtopic 5', 'Subtopic 6'] },
  { name: 'Topic 4', subtopics: ['Subtopic 7', 'Subtopic 8'] }
]
}
]
},
{
name: 'Course 2',
subjects: [
{
name: 'Subject 1',
topics: [
  { name: 'Topic 1', subtopics: ['Subtopic 1', 'Subtopic 2'] },
  { name: 'Topic 2', subtopics: ['Subtopic 3', 'Subtopic 4'] }
]
},
{
name: 'Subject 2',
topics: [
  { name: 'Topic 3', subtopics: ['Subtopic 5', 'Subtopic 6'] },
  { name: 'Topic 4', subtopics: ['Subtopic 7', 'Subtopic 8'] }
]
}
]
},
{
name: 'Course 3',
subjects: [
{
name: 'Subject 1',
topics: [
  { name: 'Topic 1', subtopics: ['Subtopic 1', 'Subtopic 2'] },
  { name: 'Topic 2', subtopics: ['Subtopic 3', 'Subtopic 4'] }
]
},
{
name: 'Subject 2',
topics: [
  { name: 'Topic 3', subtopics: ['Subtopic 5', 'Subtopic 6'] },
  { name: 'Topic 4', subtopics: ['Subtopic 7', 'Subtopic 8'] }
]
}
]
}
];

  
  selectedCourses: any = [];
  selectedSubjects: any = {};
  selectedTopics: any = {};
  selectedSubtopics: any = {};


  toggleCourseSelection(course: any) {
    if (this.selectedCourses.includes(course.name)) {
      this.selectedCourses = this.selectedCourses.filter((name: any) => name !== course.name);
    } else {
      this.selectedCourses.push(course.name);
    }
  }

  toggleSubjectSelection(subject: any) {
    if (this.selectedSubjects[subject.name]) {
      this.selectedSubjects[subject.name] = false;
    } else {
      this.selectedSubjects[subject.name] = true;
    }
  }

  toggleAllCourseSelection(event: any) {
    if (event.target.checked) {
      this.selectedCourses = this.courses.map((course: any) => course.name);
    } else {
      this.selectedCourses = [];
    }
  }

  toggleAllSubjectSelection() {
    const areAllSelected = this.areAllSubjectsSelected();
    for (const course of this.courses) {
      if (this.selectedCourses.includes(course.name)) {
        for (const subject of course.subjects) {
          this.selectedSubjects[subject.name] = !areAllSelected;
        }
      }
    }
  }

  areAllCoursesSelected() {
    return this.selectedCourses.length === this.courses.length;
  }

  areAllSubjectsSelected() {
    for (const course of this.courses) {
      if (this.selectedCourses.includes(course.name)) {
        for (const subject of course.subjects) {
          if (!this.selectedSubjects[subject.name]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  
toggleTopicSelection(topic: any) {
  if (this.selectedTopics[topic.name]) {
    delete this.selectedTopics[topic.name];
  } else {
    this.selectedTopics[topic.name] = true;
  }
}

toggleAllTopicSelection() {
  const areAllSelected = this.areAllTopicsSelected();
  for (const course of this.courses) {
    if (this.selectedCourses.includes(course.name)) {
      for (const subject of course.subjects) {
        for (const topic of subject.topics) {
          this.selectedTopics[topic.name] = !areAllSelected;
        }
      }
    }
  }
}

areAllTopicsSelected() {
  for (const course of this.courses) {
    if (this.selectedCourses.includes(course.name)) {
      for (const subject of course.subjects) {
        for (const topic of subject.topics) {
          if (!this.selectedTopics[topic.name]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

toggleSubtopicSelection(topic: any, subtopic: string) {
  if (this.isSelectedSubtopic(topic, subtopic)) {
    const selectedSubtopics = this.selectedTopics[topic.name];
    const index = selectedSubtopics.indexOf(subtopic);
    if (index !== -1) {
      selectedSubtopics.splice(index, 1);
    }
  } else {
    if (!this.selectedTopics[topic.name]) {
      this.selectedTopics[topic.name] = [];
    }
    this.selectedTopics[topic.name].push(subtopic);
  }
}

isSelectedSubtopic(topic: any, subtopic: string) {
  return (
    this.selectedTopics[topic.name] &&
    this.selectedTopics[topic.name].includes(subtopic)
  );
}


toggleAllSubtopicSelection() {
  const areAllSelected = this.areAllSubtopicsSelected();
  for (const course of this.courses) {
    if (this.selectedCourses.includes(course.name)) {
      for (const subject of course.subjects) {
        for (const topic of subject.topics) {
          for (const subtopic of topic.subtopics) {
            this.selectedSubtopics[subtopic] = !areAllSelected;
          }
        }
      }
    }
  }
}

areAllSubtopicsSelected() {
  for (const course of this.courses) {
    if (this.selectedCourses.includes(course.name)) {
      for (const subject of course.subjects) {
        for (const topic of subject.topics) {
          for (const subtopic of topic.subtopics) {
            if (!this.selectedSubtopics[subtopic]) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}


}
  
