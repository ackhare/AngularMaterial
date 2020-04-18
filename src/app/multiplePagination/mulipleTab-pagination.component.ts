
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatOption } from '@angular/material';
import { PageEvent } from '@angular/material/paginator';
import { AngularDemoService } from '../service/angularDemoService';

import { Observable } from 'rxjs';

@Component({
  selector: 'mulipleTab-pagination',
  templateUrl: './mulipleTab-pagination.component.html'
})
export class MulipleTabPagination implements OnInit {
  @ViewChild('todoPaginator', { read: MatPaginator }) todoPaginator: MatPaginator;
  @ViewChild('postsPaginator', { read: MatPaginator }) postsPaginator: MatPaginator;
  @ViewChild('todoSort') todoSort: MatSort;
  @ViewChild('postsSort') postsSort: MatSort;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  pageSize = 10;
  pageEvent: PageEvent;
  showSpinnerForPosts: any;
  showSpinnerForTodos: any;
  posts: any = [];
  todos: any = [];
  postsDatasource: MatTableDataSource<any>;
  todosDatasource: MatTableDataSource<any>;


  displayedColumnsTodos: string[] = [
    'userId',
    'id',
    'title',
    'completed'
  ];
  displayedColumnsPosts: string[] = [
    'userId',
    'id',
    'title',
    'body'
  ];


  constructor(private angularDemoService: AngularDemoService, public dialog: MatDialog,
    private router: Router) {
  }


  ngOnInit() {
    this.showSpinnerForPosts = true;
    this.posts = [];
    this.todos = [];
    this.toDosListing();
  }
  ngAfterViewInit() {
    if (this.postsDatasource != undefined) {
      this.postsDatasource.sort = this.postsSort;
      this.postsDatasource.paginator = this.postsPaginator;
    }
    if (this.todosDatasource != undefined) {
      this.todosDatasource.sort = this.todoSort;
      this.todosDatasource.paginator = this.todoPaginator;
    }
  }
  public toDosListing() {
    this.showSpinnerForTodos = true;
    this.angularDemoService.fetchTodos().subscribe(
      res => {

        this.todos = res;
        this.todosDatasource = new MatTableDataSource(this.todos);
        this.todosDatasource.data = this.todos;

        this.todosDatasource.paginator = this.todoPaginator;


        this.showSpinnerForTodos = false;
        this.todosDatasource.sortingDataAccessor = (item, property) => {
          switch (property) {

            default: return item[property];
          }
        };
        //Done for work on sorting and not to work on nfAfterviewInit
        setTimeout(() => {
          this.todosDatasource.sort = this.todoSort;
          this.todosDatasource.paginator = this.todoPaginator;
        });

      }, error => {
        console.log(error);
      }
    )
  }
  public postsListing() {
    this.showSpinnerForPosts = true;
    this.angularDemoService.fetchPosts().subscribe(
      res => {

        this.posts = res;
        this.postsDatasource = new MatTableDataSource(this.posts);
        this.postsDatasource.data = this.posts;

        this.postsDatasource.paginator = this.postsPaginator;


        this.showSpinnerForPosts = false;
        this.postsDatasource.sortingDataAccessor = (item, property) => {
          switch (property) {

            default: return item[property];
          }
        };
        //Done for work on sorting and not to work on nfAfterviewInit
        setTimeout(() => {
          this.postsDatasource.sort = this.postsSort;
          this.postsDatasource.paginator = this.postsPaginator;
        });

      }, error => {
        console.log(error);
      }
    )
  }
  tabChangeBackEvent($event) {
    if ($event.index === 1) {
      this.postsListing();
    }


  }
}

