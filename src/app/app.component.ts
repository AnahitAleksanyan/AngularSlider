import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BootstrapTest';
  imageIndex = 0;
  images = [
    {imageURL: 'https://cdn.wallpapersafari.com/15/39/UGPKWz.jpg',
    description: 'Lorem ipsum dolor sit amet.'},
    {imageURL: 'https://wallpaperaccess.com/full/94017.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur.'},
    {imageURL: 'https://wi.wallpapertip.com/wsimgs/30-308640_cute-white-cat-hd-wallpaper-for-desktop-litle.jpg',
      description: 'Lorem ipsum dolor sit.'},
    {imageURL: 'https://i.pinimg.com/originals/34/65/fa/3465fa272b5209f9db3ce03c298ddcb7.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing.`}
  ];
  leftOnClick(): void {
    if (this.imageIndex !== 0) {
      this.imageIndex--;
    }
  }

  rightOnClick(): void {
    if (this.imageIndex !== this.images.length - 1) {
      this.imageIndex++;
    }
  }

  imageOnClick(index): void {
    this.imageIndex = index;
  }
}
