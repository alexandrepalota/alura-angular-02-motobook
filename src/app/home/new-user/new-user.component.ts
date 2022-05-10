import { UserExistsService } from './user-exists.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowerCaseValidator } from './lowerCase.validator';
import { userEqualsPasswordValidator } from './user-equals-password.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private newUserService: NewUserService, private userExistsService: UserExistsService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      // The first group parameter contains the fields validators
      {
      // To validate a field, we add an array on the second position of original array
      // and use the Angular class Validators, and his validations.
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      // The array's 3rd position is used for async validations
      userName: ['', [Validators.required, Validators.minLength(4), lowerCaseValidator], [this.userExistsService.userExists()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    },
    // The second group parameter contains the form validations
    {
      validators: [userEqualsPasswordValidator]
    }
    )
  }

  register() {
    const newUser = this.newUserForm.getRawValue() as NewUser
    console.log(newUser)
  }

}
