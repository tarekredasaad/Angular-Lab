import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ForbiddenName } from '../validations/forbiddenNameValidator';
import { ForbiddenNameValidator } from '../validations/userName.validators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  constructor(private fb:FormBuilder ){}
  discountChecked:boolean=false
  ngOnInit(): void {

  }
  products:any=[
    {"id":1,"title":"Iphone1","price": 7840,"isbuy":false},
    {"id":2,"title":"Iphone2","price": 7850,"isbuy":false},
    {"id":3,"title":"Iphone3","price": 7860,"isbuy":false},
    {"id":4,"title":"Iphone4","price": 7800,"isbuy":false}
  ]
  notesForm= this.fb.group({
    name:['',[ForbiddenName(/admin/)]],
    checkDiscount:[''],
    discount:[''],
    note:[''],
    aleternativeEmails:this.fb.array([]),
  });

get name(){
  return this.notesForm.get('name');
}
  get aleternativeEmails()
  {
    return this.notesForm.get('aleternativeEmails') as FormArray;
  }

  addAlternativeEmail()
  {
    this.aleternativeEmails.push(this.fb.control(''));
  }
  deleteEmail(index:any)
  {
   this.aleternativeEmails.removeAt(index);
  }

  showDiscount(){

    this.notesForm.get('checkDiscount')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        //set validation
        this.discountChecked=true;
        // this.email?.setValidators(Validators.required);
      }
      else
      {
       // clear validation
       this.discountChecked=false;
      //  this.email?.clearValidators();
      }
      //upadte dom
      // this.email?.updateValueAndValidity();
    })

  }
}
