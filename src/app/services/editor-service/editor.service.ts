import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Image } from '../../models/image';
import { File } from '../../models/file';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditorService {

  //Variables
  private file: BehaviorSubject<File>;
  private currentNode: BehaviorSubject<Array<any>>;

  //Constructor
  constructor() {
    this.file = new BehaviorSubject<File>(new File);
    this.currentNode = new BehaviorSubject<any>([]);
  }

  //************************************** Getters and setters **************************************/
  setFile(file): void {
    this.file.next(file);
  }

  getFile(): Observable<File> {
    return this.file.asObservable();
  }

  setCurrentNode(currentNode): void {
    this.currentNode.next(currentNode);
  }

  getCurrentNode(): Observable<Array<any>> {
    return this.currentNode.asObservable();
  }

  /************************************** Public Methods **************************************/

  /**
   * Create file from data nodes
   */
  createFile(data): void {
    var file = new File(data);
    this.file.next(file);
  }

  /**
   * Added new state 
   */
  newStateFile(state): void {
    this.file.getValue().newState(state);
  }

  /**
    * Return to the previous state if it exists, otherwise it does not do anything
   */
  lastStateFile(): void {
    var file = this.file.getValue().lastState();
    this.file.next(file);
  }

  /**
   * Go to the next state if it exists, otherwise it does not do anything
   */
  nextStateFile(): void {
    var file = this.file.getValue().nextState();
    this.file.next(file);
  }

  /**
   * 
   */
}
