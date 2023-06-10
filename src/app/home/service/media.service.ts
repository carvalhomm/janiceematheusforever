import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { Auth, signInAnonymously } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private storage: Storage, private auth: Auth) { }

  streamMusic(path: string): Promise<string> {
    return signInAnonymously(this.auth).then(() => getDownloadURL(ref(this.storage, path)));
  }
}
