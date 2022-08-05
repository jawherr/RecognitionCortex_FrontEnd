import { Component, OnInit, ViewChild } from '@angular/core';
import { BadgeService } from '../../services/badge.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Badge } from '../../models/badge';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})


export class BadgeComponent implements OnInit {

  constructor(
    private badgeService : BadgeService,
    private token : TokenStorageService ) { }

  badges? : Badge[] ;
  currentUtilisateur : any ;
  userPermission : boolean = false ;
  dataSource!: MatTableDataSource<Badge>;
  displayedColumns: string[] = ['id', 'nom', 'image', 'description', 'utilisateur','update','delete'];
  displayedColumnsData: string[] = ['id', 'nom', 'image', 'description', 'utilisateur','update','delete'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getBadges() ;
    this.currentUtilisateur = this.token.getUtilisateur();
    this.userPermission = this.permissions();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getBadges() : void
  {
    this.badgeService.getBadges().subscribe(
      (response : Badge[]) => {
        this.badges = response;
        this.dataSource = new MatTableDataSource(this.badges);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteBadge(id : number): void{
    this.badgeService.deleteBadge(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getBadges();
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
