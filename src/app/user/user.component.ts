import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string;
    @Output() select = new EventEmitter();

    get imagePath() {
        return 'assets/users/' + this.avatar;
    }

    onClickUser(id:string) {
        this.select.emit(id)
    }
}
