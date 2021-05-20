import { Component } from '@angular/core'

import { ProgressBarManangerService } from 'src/app/shared/progress-bar-mananger/progress-bar-mananger.servce'

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
    constructor(private progressBarManangerService: ProgressBarManangerService) {
        this.enableListenToLoadingEvents()
    }

    public isLoading: Boolean
    public currentProgress: Number = 0

    private enableListenToLoadingEvents() {
        this.progressBarManangerService.onStart.subscribe(() => {
            console.log('LOADING START')
            this.currentProgress = 0
            this.isLoading = true
        })
        this.progressBarManangerService.onStop.subscribe(() => {
            this.onCompleteRequisition()
        })
    }

    private onCompleteRequisition() {
        console.log('LOADING END')
        this.currentProgress = 100
        setTimeout(() => {
            this.isLoading = false
            this.currentProgress = 0
        }, 500)
    }
}
