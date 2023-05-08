import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {

  partner = [{
    name: "Albert Littau GmbH",
    description: "FBA Coach & Amazon Händler",
    link: "https://albertlittau.de/",
    img: "albert-littau.jpg"
  },{
name: "Kanzlei SKULD",
    description: "Steuerberater & Rechtsanwälte für Online Händler & Heilberufe",
    link: "https://kanzlei-skuld.de/",
    img: "skuld.jpg"
  }, {
    name: "BBS Lemgo",
    description: "Büro- und Buchhaltungs-Service",
    link: "https://bbs-lemgo.de/",
    img: "bbs-logo.jpg"
  }]
}
