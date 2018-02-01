import {Component} from "angular2/core"
import {AuthorService} from "./author.service"


@Component({
    selector: "authors",
    template: `
    <h2>Aurthor</h2>
    {{ title1 }}
    <ul>
        <li *ngFor="#author of author">
            {{ author }}
        <li>
    <ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent {
    title1 = "the title of Author page";
    author;

    constructor(authorService: AuthorService) {
        this.author = authorService.getAuthors();
    }

}