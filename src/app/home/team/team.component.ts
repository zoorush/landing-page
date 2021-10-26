import { Component, OnInit } from "@angular/core";

export interface Member {
  name: string;
  pretitle?: string;
  title: string;
  image: string;
  quote: string;
}

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent {
  members: Member[] = [{
    name: "Rice",
    pretitle: "Oxford alum",
    title: "Software dev, project designer",
    quote: `There is only one football and it’s American Football (sorry fellow Brits)`,
    image: '97.png'
  }, {
    name: "Brady",
    pretitle: "Princeton alum",
    title: "Ideologist, game developer. founder",
    quote: `Always wanted to play American Football. But I was too fat. ZooRush is closest I can get`,
    image: '96.png'
  }, {
    name: "Taylor",
    pretitle: 'Founder of one of the biggest NFT collections ever',
    title: "Ideologist, marketing guy, founder",
    quote: `Why hasn’t anyone built an American Football NFT game yet? Doesn’t make sense, I need to fix it`,
    image: '0.png'
  }, {
    name: "Sanders",
    pretitle: 'Good hair',
    title: "Artist, designer",
    quote: `What is American Football?`,
    image: '3.png'
  }, {
    name: "Butkus",
    pretitle: 'Joker',
    title: "Solidity dev, software engineer",
    quote: `Solving an equation is like making a touchdown`,
    image: '41.png'
  }, {
    name: "Di Vinci 333",
    pretitle: 'Good bloke',
    title: "Advisor",
    quote: `I like these guys`,
    image: '67.png'
  }]

}
