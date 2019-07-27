import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStoreService: DataStorageService) { }

    onSaveData() {
        this.dataStoreService.storeRecipes();
    }

    onFetchData() {
        this.dataStoreService.fetchRecipes();
    }
}