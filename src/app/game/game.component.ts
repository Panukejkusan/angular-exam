import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewChild, input } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';
import { TimePipe } from '../time.pipe';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,
  NgxSnakeModule,
  TimePipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  @ViewChild(NgxSnakeComponent)
  private _snake: NgxSnakeComponent;

  @Input() 
  public changeShowGame:(show: boolean) => void;
  @Input()
  public playerName:string;

  public points = 0;
  public time: number = 0;
  interval: ReturnType<typeof setInterval>
  public status = 'ready';


  public foodEaten(event: any) {
    this.points++;
  }

  public gameOver(event: any) {
    this.status = 'dead';
    clearInterval(this.interval);
    alert(`Your score is ${this.points}. Try again.`);
    this.points = 0;
    this.time = 0;
    this._snake.actionReset();
    this.status = 'ready';
  }

  public startTimer() {
    this.interval = setInterval(() => {
      this.time++
    }, 1000)
  }

  public startGame() {
    this.status = 'started';
    this.startTimer();
    this._snake.actionStart();
  }

  public stopGame() {
    this.status = 'paused';
    this._snake.actionStop();
    clearInterval(this.interval);
  }

  public exit() {
    this.changeShowGame(false)
    console.log();
  }

  

  // public onRotateButtonPressed() {
  //   // @ts-ignore
  //     this._snake.actionRotate();
  //     this._snake.gameOver.asObservable().subscribe((kar: any) => {
  //       console.log(kar)
  //     })
  //   }
}
