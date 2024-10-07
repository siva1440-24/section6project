import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click')
  //  onclick() {
  //   console.log('clicked!');
  // }
  // onClick() {
  //   console.log('Clicked!');
  // }
  constructor() {
    afterRender(() => {
      console.log('after render');
    });

    afterNextRender(() => {
      console.log('after next render');
    });
  }

  ngAfterContentInit() {}
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  label = input.required<string>();
  private el = inject(ElementRef);
  onClick() {
    console.log(this.el);
  }
}
