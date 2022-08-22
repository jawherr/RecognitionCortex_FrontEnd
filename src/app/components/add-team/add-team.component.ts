import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any = {};
  addForm: FormGroup;


  constructor(private formBuilder:FormBuilder ,
    private teamService : EquipeService,
    private router : Router) { 

  }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      nom:[''],
      objectif:['']
    })


  }
  add(){
   this.teamService.addEquipe(this.team).subscribe(data=>{
    console.log(data)
    this.router.navigate(['/teams'])
   })
   
  }
  
  

}
