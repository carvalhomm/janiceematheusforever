import { Component, OnInit } from '@angular/core';
import { MediaService } from '../home/service/media.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  public songRef: string = '';
  constructor(private mediaService: MediaService) { }

  async ngOnInit() {
    this.songRef = await this.mediaService.streamMusic('janice.wav');
    console.log('song --> ', this.songRef);
  }

}
