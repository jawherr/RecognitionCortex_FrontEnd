import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/models/equipe';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  formValue : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private equipeService : EquipeService,
    private token : TokenStorageService ,
    private router:Router ) { }

  equipes? : Equipe[] ;
  currentUser : any ;
  userPermission : boolean = false ;
  dataSource!: MatTableDataSource<Equipe>;
  displayedColumns: string[] = ['id', 'nom', 'objectif','delete','update'];
  displayedColumnsData: string[] = ['id', 'nom', 'objectif','delete','update'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nom : [''],
      objectif :['']
    })
    this.currentUser = this.token.getUtilisateur();
    this.userPermission = this.permissions();
    if (this.userPermission) {
      this.getEquipes() };
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }
onEdit(row : any){
  this.formValue.controls['nom'].setValue(row.nom);
  this.formValue.controls['objectif'].setValue(row.objectif);
}
goTo(){
  this.router.navigate([
    '/addteams'

  ])

}

  getEquipes() : void
  {
    this.equipeService.getEquipes().subscribe(
      (response : Equipe[]) => {
        this.equipes = response;
        this.dataSource = new MatTableDataSource(this.equipes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteEquipe(id : number): void{
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.equipeService.deleteEquipe(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getEquipes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public permissions(): boolean
  {
    return this.currentUser.roles.includes("ROLE_RH");
  }

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
