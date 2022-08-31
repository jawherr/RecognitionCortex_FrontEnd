import { Location } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
@Input() team?: Equipe;
  
  


  constructor(private formBuilder:FormBuilder ,
    private location : Location, 
    private route : ActivatedRoute,
    private teamService : EquipeService,
    private router : Router) { 

  }
  equipes? : Equipe[] ;
  currentUser : any ;
  addForm = this.formBuilder.group(
    {
           nom : this.team?.nom,
           objectif: this.team?.objectif
    }
  );

  ngOnInit(): void {
    this.getTeam();
  }
  
  getTeam() : void 
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getEquipe(id).subscribe(team => this.team = team); 
  }

  add(){
    console.log(this)
   this.teamService.addEquipe(this.team).subscribe(data=>{
    //console.log(this.team?.nom)
   this.router.navigate(['/teams'])
   })
 
  }

  addEquipe(
    nom: string, objectif: string
  ) : void
  {
    let nEquipe: Equipe = new Equipe(nom,objectif);
    this.teamService.addEquipe(nEquipe)
    .subscribe(()=>this.goBack());
  }
  
  saveTeam(): void 
  {
    if(this.team)
    {
      this.teamService.updateEquipe(this.team).subscribe(
        () => this.goBack()
      );
    }
  }
 /* edit(){
    if(this.team)
    {
      this.teamService.updateEquipe(this.team).subscribe(
        () => this.goBack()
      );
    }
  }*/
  goBack() : void 
  {
    this.location.back() ; 
  }

  
  

}

