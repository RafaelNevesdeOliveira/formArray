import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = this.fb.group({
    //... other form controls ...
    lessons: this.fb.array([]),
    title: [null],
    level: [null],
  });

  constructor(private fb: FormBuilder) {}

  get lessons(): any {
    return this.form.controls['lessons'] as FormArray;
  }

  addLesson(): any {
    const lessonForm = this.fb.group({
      title: [null, Validators.required],
      level: [null, Validators.required],
    });
    this.lessons.push(lessonForm);
    console.log(this.lessons.value);
  }

  deleteLesson(lessonIndex: number): any {
    this.lessons.removeAt(lessonIndex);
    console.log(this.lessons, ' deletado');
  }
}
