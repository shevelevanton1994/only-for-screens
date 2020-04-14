import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyForScreenDirective } from './only-for-screen.directive';

const EXPORTS = [OnlyForScreenDirective];

@NgModule({
    declarations: [EXPORTS],
    imports: [CommonModule],
    exports: [EXPORTS],
})
export class OnlyForScreenModule {}
