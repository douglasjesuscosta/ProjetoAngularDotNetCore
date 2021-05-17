import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

/**
 * Component that represents the navbar.
 *
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    private defaultLanguage: string = 'en'
    public selectedLanguage: string

    constructor(private translateService: TranslateService) {
        this.selectedLanguage = translateService.currentLang ? translateService.currentLang : this.defaultLanguage
        translateService.setDefaultLang(this.defaultLanguage)
    }

    ngOnInit(): void {}

    public onLanguageChange(event) {
        this.translateService.use(this.selectedLanguage)
    }
}
