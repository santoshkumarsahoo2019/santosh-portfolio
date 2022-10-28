import { Component } from "@angular/core";

@Component({
    selector : 'about',
    templateUrl: './about.component.html',
    styleUrls : ['./about.component.scss']
})

export class AboutComponent {
    play: boolean = true;
    pause: boolean = false;
    audio: any = new Audio;
    
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