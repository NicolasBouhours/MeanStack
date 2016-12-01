import { EventEmitter } from '@angular/core';
import { Error } from './error.model';

export class ErrorService {
    errorOccurend = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurend.emit(errorData);
    }
}