import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-videos',
  templateUrl: './history-videos.component.html',
  styleUrls: ['./history-videos.component.css']
})
export class HistoryVideosComponent implements OnInit {

  videos = [
    {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/mgKizORe.mp4",
    },
    {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/LpwgwGbF.mp4",
    },
    {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/AjFeqkZc.mp4",
    }
    {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/mwMyTlyB.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/EvluagKi.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/hqRcsQcs.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/KaTktpeD.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/eNRjMVjw.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/tEYcmlEV.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/YxOepQdY.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/lOlmkwST.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/GcsQsSFN.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/zVhsPfC.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/rhgwFjxZ.mp4",
    },
      {
      title: 'عينة فيديو',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/PNGLTpU.mp4",
    },
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }
}
