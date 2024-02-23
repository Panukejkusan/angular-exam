
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    IntroComponent,
    GameComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'snake';
  showGame = false;
  playerName = '';
  
  setPlayerName = (playerName: string) => {
    this.playerName = playerName;
  }

  changeShowGame = (show: boolean) => {
    this.showGame = show;
  }
}
