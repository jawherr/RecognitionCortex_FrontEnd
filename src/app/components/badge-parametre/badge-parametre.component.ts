import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Badge } from 'src/app/models/badge';
import { BadgeService } from 'src/app/services/badge.service';

@Component({
  selector: 'app-badge-parametre',
  templateUrl: './badge-parametre.component.html',
  styleUrls: ['./badge-parametre.component.css']
})
export class BadgeParametreComponent implements OnInit {
  @Input() badge? : Badge;
    selectedFiles?: FileList;
    selectedFileNames: string[] = [];
  
    progressInfos: any[] = [];
    message: string[] = [];
  
    previews: string[] = [];
    imageInfos?: Observable<any>;
  constructor(private badgeService : BadgeService,private location:Location,
    private formBuilder : FormBuilder) { }
  selectedValue: string;
  selectedCar: string;

  badgeForm = this.formBuilder.group(
    {
      nom : this.badge?.nom,
      image : this.badge?.image, 
      description : this.badge?.description
    }
  ) ;

  ngOnInit(): void {
  }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }
  addBadge(nom: string,description : string,
    image : string) : void 
  {
    let nBadge: Badge = new Badge(nom,description,image);
    this.badgeService.addBadge(nBadge)
    .subscribe();
  }

  goBack() : void 
  {
    this.location.back() ; 
  }

}
