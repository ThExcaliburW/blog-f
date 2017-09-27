import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas;

  constructor() {
    this.datas = [
      {
        id: 0,
        name: 'Angus Young',
        imgUrl: '../../../assets/images/i-angus.png',
        className: '',
      },
      {
        id: 1,
        name: 'Aurora',
        imgUrl: '../../../assets/images/i-aurora.png',
        className: ''
      },
      {
        id: 2,
        name: 'Bride of Frankenstein',
        imgUrl: '../../../assets/images/i-bride.png',
        className: ''
      },
      {
        id: 3,
        name: 'Dracula',
        imgUrl: '../../../assets/images/i-d.png',
        className: ''
      },
      {
        id: 4,
        name: 'Salvador Dalí',
        imgUrl: '../../../assets/images/i-dali.png',
        className: ''
      },
      {
        id: 5,
        name: 'Ilhuicatl Xoxouhqui',
        imgUrl: '../../../assets/images/i-huitzi.png',
        className: ''
      },
      {
        id: 6,
        name: 'L\'Homme qui rit',
        imgUrl: '../../../assets/images/i-man.png',
        className: ''
      },
      {
        id: 7,
        name: 'Visualization',
        imgUrl: '../../../assets/images/i-v.png',
        className: ''
      },
      {
        id: 8,
        name: 'Visualization II',
        imgUrl: '../../../assets/images/i-v2.png',
        className: ''
      },
      {
        id: 9,
        name: 'Visualization III',
        imgUrl: '../../../assets/images/i-v3.png',
        className: ''
      },
      {
        id: 10,
        name: 'Zombie',
        imgUrl: '../../../assets/images/i-worms.png',
        className: ''
      },
      {
        id: 11,
        name: 'X-Rays',
        imgUrl: '../../../assets/images/i-xrays.png',
        className: ''
      },
    ];
  }

  ngOnInit() {
  }

  _mouseEnterHandle(et, num) {
    // console.log(et);
    // console.log(et.target);
    const direction = this._getDirection(et);
    for (const i in this.datas) {
      if (num == i) {
        switch (direction) {
          case 0:
            this.datas[i].className = 'in-top';
            break;
          case 1:
            this.datas[i].className = 'in-right';
            break;
          case 2:
            this.datas[i].className = 'in-bottom';
            break;
          case 3:
            this.datas[i].className = 'in-left';
            break;
        }
      }
    }
  }

  _mouseOutHandler(et, num) {
    const direction = this._getDirection(et);
    for (const i in this.datas) {
      if (num == i) {
        switch (direction) {
          case 0:
            this.datas[i].className = 'out-top';
            break;
          case 1:
            this.datas[i].className = 'out-right';
            break;
          case 2:
            this.datas[i].className = 'out-bottom';
            break;
          case 3:
            this.datas[i].className = 'out-left';
            break;
        }
      }
    }
  }

  _getDirection(ev): number {
    const tg = ev.target;
    const w = tg.offsetWidth;
    const h = tg.offsetHeight;
    const l = tg.offsetLeft;
    const t = tg.offsetTop;
    const x = ev.pageX - l - w / 2 * (w > h ? h / w : 1);
    const y = ev.pageY - t - h / 2 * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  }
}
