import {Component, Directive} from "angular2/core"
import {CourseService} from "./course.service"
import {AutoGrowDirective} from "./autoGrow.directive";



@Component({
    selector: "courses",
    template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="#course of course">
            {{ course }}
        </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]

})

export class CoursesComponent {
    title = "The title of courses page";
    course;

    constructor(courseService: CourseService) {
        this.course = courseService.getCourse();
    }

}