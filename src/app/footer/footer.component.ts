import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactForm : FormGroup;
  checkSubmit = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      emailInput: ["", Validators.required],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.checkSubmit = true
    if (this.contactForm.invalid) {
      return;
    }
    console.warn(this.contactForm.value);
  }

}
