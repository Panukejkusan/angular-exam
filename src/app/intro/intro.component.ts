import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'  
})

export class IntroComponent {
  @Input() 
  public changeShowGame:(show: boolean) => void;
  @Input() 
  public setPlayerName:(playerName: string) => void;



  public start(data: {name: string, email: string}) {
    this.setPlayerName(data.name);
    this.changeShowGame(true);
    console.log(data);
  }
}
