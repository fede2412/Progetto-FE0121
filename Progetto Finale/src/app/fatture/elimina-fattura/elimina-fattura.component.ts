import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/services/fatture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elimina-fattura',
  templateUrl: './elimina-fattura.component.html',
  styleUrls: ['./elimina-fattura.component.css']
})
export class EliminaFatturaComponent implements OnInit {
  myId: any;
  constructor(private myActRoute: ActivatedRoute,
    public mieFatture: FattureService) {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.myId = myParams.get('id');
          console.log(this.myId)
        }
      )
  }

  ngOnInit(): void {
  }
  elimina() {
    this.mieFatture.deleteFattura(this.myId)
      .subscribe(value => console.log(value))
  }

}
