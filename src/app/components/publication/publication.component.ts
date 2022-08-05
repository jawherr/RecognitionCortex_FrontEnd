import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Publication } from '../../models/publication';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})


export class PublicationComponent implements OnInit {

  constructor(
    private publicationService : PublicationService,
    private token : TokenStorageService ) { }

  publications? : Publication[] ;
  currentUtilisateur : any ;
  userPermission : boolean = false ;
  dataSource!: MatTableDataSource<Publication>;
  displayedColumns: string[] = ['id', 'description', 'nb_like', 'utilisateur','update','delete'];
  displayedColumnsData: string[] = ['id', 'description', 'nb_like', 'utilisateur','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getPublications() ;
    this.currentUtilisateur = this.token.getUtilisateur();
    this.userPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getPublications() : void
  {
    this.publicationService.getPublications().subscribe(
      (response : Publication[]) => {
        this.publications = response;
        this.dataSource = new MatTableDataSource(this.publications);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deletePublication(id : number): void{
    this.publicationService.deletePublication(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getPublications();
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
