
import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { General_data }      from '../general_data/general_data';

@Component({
  selector: 'my_header',
  templateUrl: './app/components/my_header/my_header.component.html' 
})


export class my_header implements OnInit { 

    @Input() general_data: General_data;
    
    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
       console.log('The my_header!')
    }    

}

