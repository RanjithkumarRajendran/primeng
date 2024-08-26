import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';
import { PhotoService } from '@service/photoservice';

@Component({
    selector: 'galleria-thumbnail-demo',
    template: `
        <app-docsectiontext>
            <p>Galleria can be controlled programmatically using the <i>activeIndex</i> property.</p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex flex-wrap gap-4 mb-8">
                <p-radioButton *ngFor="let option of positionOptions" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label" />
            </div>
            <p-galleria [(value)]="images" [thumbnailsPosition]="position" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.itemImageSrc" style="width: 100%; min-height: 420px; display: block;" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-cols-12 gap-4 grid-nogutter justify-center">
                        <img [src]="item.thumbnailImageSrc" />
                    </div>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code" selector="galleria-thumbnail-demo"></app-code>
    `
})
export class ThumbnailDoc implements OnInit {
    images: any[] | undefined;

    position: string = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }

    code: Code = {
        basic: `<p-galleria 
    [(value)]="images" 
    [thumbnailsPosition]="position" 
    [responsiveOptions]="responsiveOptions" 
    [containerStyle]="{ 'max-width': '640px' }"
    [numVisible]="5">
        <ng-template pTemplate="item" let-item>
            <img 
                [src]="item.itemImageSrc" 
                style="width: 100%; min-height: 420px; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-cols-12 gap-4 grid-nogutter justify-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
</p-galleria>`,
        html: `<div class="card">
    <div class="flex flex-wrap gap-4 mb-8">
        <p-radioButton 
            *ngFor="let option of positionOptions;" 
            [name]="option.label" 
            [value]="option.value" 
            [label]="option.label" 
            [(ngModel)]="position" 
            [inputId]="label" />
    </div>
    <p-galleria 
        [(value)]="images" 
        [thumbnailsPosition]="position" 
        [responsiveOptions]="responsiveOptions" 
        [containerStyle]="{ 'max-width': '640px' }" 
        [numVisible]="5"> 
            <ng-template pTemplate="item" let-item>
                <img 
                    [src]="item.itemImageSrc" 
                    style="width: 100%; min-height: 420px; display: block;" />
            </ng-template>
            <ng-template pTemplate="thumbnail" let-item>
                <div class="grid grid-cols-12 gap-4 grid-nogutter justify-center">
                    <img [src]="item.thumbnailImageSrc" />
                </div>
            </ng-template>
    </p-galleria>
</div>`,
        typescript: `import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'galleria-thumbnail-demo',
    templateUrl: './galleria-thumbnail-demo.html',
    standalone: true,
    imports: [GalleriaModule, RadioButtonModule, FormsModule],
    providers: [PhotoService]
})
export class GalleriaThumbnailDemo implements OnInit {
    images: any[] | undefined;

    position: string = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,
        service: ['PhotoService']
    };
}
