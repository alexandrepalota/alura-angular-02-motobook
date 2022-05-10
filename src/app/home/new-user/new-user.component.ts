import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private newUserService: NewUserService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      // To validate a field, we add an array on the second position of original array
      // and use the Angular class Validators, and his validations.
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  register() {
    const newUser = this.newUserForm.getRawValue() as NewUser
    console.log(newUser)
  }

}
