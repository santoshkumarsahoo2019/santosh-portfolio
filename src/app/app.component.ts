import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  play: boolean = true;
  pause: boolean = false;

  audio: any = new Audio;

  constructor() {

  }

  ngOnInit(): void {

  }

  public audioPlayer(press: string) {
    if (press === "play") {
      this.play = false;
      this.pause = true;
      this.audio.src = "assets/audio/myporto.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.pause = false;
      this.play = true;
      this.audio.pause();
      this.audio.src = "";
    }
  }


}
