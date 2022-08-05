import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Recompense } from 'src/app/models/recompense';
import { RecompenseService } from 'src/app/services/recompense.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-recompense',
  templateUrl: './recompense.component.html',
  styleUrls: ['./recompense.component.scss']
})
export class RecompenseComponent implements OnInit {

  constructor(
    private recompenseService : RecompenseService,
    private token : TokenStorageService) { }

  recompenses? : Recompense[];
  currentUtilisateur : any ;
  userPermission : boolean = false ;
  dataSource!: MatTableDataSource<Recompense>;
  displayedColumns: string[] = ['id', 'nom', 'image', 'description', 'utilisateur','update','delete'];
  displayedColumnsData: string[] = ['id', 'nom', 'image', 'description', 'utilisateur','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getRecompenses() ;
    this.currentUtilisateur = this.token.getUtilisateur();
    this.userPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getRecompenses() : void
  {
    this.recompenseService.getRecompenses().subscribe(
      (response : Recompense[]) => {
        this.recompenses = response;
        this.dataSource = new MatTableDataSource(this.recompenses);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteRecompense(id : number): void{
    this.recompenseService.deleteRecompense(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getRecompenses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public permissions(): boolean
  {
    return this.currentUtilisateur.roles.includes("ROLE_USER");
  }

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
