import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @Output() add = new EventEmitter();

  add = output<{ title: string; text: string }>();
  ngOnInit() {
    console.log(' ON init');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    // console.log(title);
    // console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}
