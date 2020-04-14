# Only For Screen

Angular 9 directive for detecting changes of a window size and add or remove specific block.

It is as simple as:

```xml
<span *onlyForScreen="'desktop'">shown on big screens</span>
<span *onlyForScreen="'tablet'">shown on tablet screens</span>
<span *onlyForScreen="'mobile'">shown on small screens</span>
```

## Using the library

Import the library in any Angular application by running:

```bash
$ npm i only-for-screen
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library module
import { OnlyForScreenModule } from 'only-for-screen';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,

        // Specify OnlyForScreenModule library as an import
        OnlyForScreenModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Once your library is imported, you can use its `onlyForScreen` directive in your Angular application:

```xml
<span *onlyForScreen="'mobile'">shown on small screens</span>
```

## License

MIT © [Anton Shevelov](mailto:antonshevelov@gmail.com)
