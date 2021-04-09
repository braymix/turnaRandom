import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-random",
  templateUrl: "./random.component.html",
  styleUrls: ["./random.component.css"],
})
export class RandomComponent implements OnInit {
  constructor(public fb: FormBuilder) {}
  public formGroup: FormGroup;
  public listUser: any = [];
  public listUser2: any = [];
  public str: String;
  ngOnInit() {
    this.formGroup = this.fb.group({
      persone: [""],
    });
  }

  send() {
    this.listUser = [];
    this.listUser2 = [];
    this.str = this.formGroup.value.persone;
    let s = "";
    for (let i = 0; i <= this.str.length; i++) {
      // console.log(this.str.substring(i, i + 1));
      s += this.str.substring(i, i + 1);
      if (this.str.substring(i, i + 1) == "\n") {
        this.listUser.push(s);
        s = "";
      }
    }
    this.listUser.push(s);

    var m = this.listUser.length,
      t,
      i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.listUser[m];
      this.listUser[m] = this.listUser[i];
      this.listUser[i] = t;
    }
    // console.log(this.listUser);
    let j = 0;
    let tempo = [];
    for (let k = 0; k <= this.listUser.length; k++) {
      if (this.listUser[k] != undefined) tempo.push(this.listUser[k]);
      if (j == 7) {
        if (tempo.length != 0) {
          this.listUser2.push(tempo);
          j = 0;
          tempo = [];
        }
      } else if (k == this.listUser.length) {
        if (tempo.length != 0) {
          this.listUser2.push(tempo);
        }
      } else {
        j++;
      }
    }

    //console.log(this.listUser2);
    if (8 - this.listUser2[this.listUser2.length - 1].length == 0) {
      console.log();
    } else {
      alert(
        "mancano " +
          (8 - this.listUser2[this.listUser2.length - 1].length) +
          " player Giacomo Pesci non è contento"
      );
    }
    // console.log(this.listUser.length / 8.0)
  }
}
