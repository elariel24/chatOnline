import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

/* https://www.freakyjolly.com/ionic-4-adding-embedded-youtube-video-player-in-ionic-4-application-using-ionic-native-plugin/ */

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {


  constructor(private youtube: YoutubeVideoPlayer) { }
  openMyVideo(id) {
    this.youtube.openVideo(id);
  }

  ngOnInit() {
  }

}
