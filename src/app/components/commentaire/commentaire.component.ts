import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentaireService } from '../../services/commentaire.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Commentaire } from '../../model/commentaire';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})


export class CommentaireComponent implements OnInit {

  constructor(
    private publicationService : CommentaireService,
    private token : TokenStorageService ) { }

  publications? : Commentaire[] ;
  currentUser : any ;
  userPermission : boolean = false ;
  dataSource!: MatTableDataSource<Commentaire>;
  displayedColumns: string[] = ['id', 'libelle', 'publication','update','delete'];
  displayedColumnsData: string[] = ['id', 'libelle', 'publication','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getCommentaires() ;
    this.currentUser = this.token.getUtilisateur();
    this.userPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCommentaires() : void
  {
    this.publicationService.getCommentaires().subscribe(
      (response : Commentaire[]) => {
        this.publications = response;
        this.dataSource = new MatTableDataSource(this.publications);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteCommentaire(id : number): void{
    this.publicationService.deleteCommentaire(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommentaires();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public permissions(): boolean
  {
    return this.currentUser.roles.includes("ROLE_USER");
  }

  logData(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
