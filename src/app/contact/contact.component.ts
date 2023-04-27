import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private http: HttpClient) { }

  post = {
    endPoint: 'http://huelsebusch.org/sendmail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required],[]),
    email: new FormControl('',[Validators.required, Validators.email],[]),
    product: new FormControl('',[],[]),
    message: new FormControl('',[Validators.required],[])
  })

  isSubmitted: boolean = false;
  emailSent: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(ngForm: any) {
    this.isSubmitted = true;
    if (this.contactForm.valid){
      let data = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        product: this.contactForm.value.product,
        message: this.contactForm.value.message
      }
      this.http
        .post(this.post.endPoint, data)
        .subscribe({
          next: (response) => {
            ngForm.resetForm()
            this.emailSent = true;
            this.timeOutSendMail();
          },
          error: (error) => {
          },
        });


      this.isSubmitted = false;
    }
  }
  timeOutSendMail() {
    setTimeout(() => {
      this.emailSent = false;
    }, 4000)
}
}
