import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class ModalService {

  constructor(private _viewContainerRef: ViewContainerRef,
                      _factoryResolver: ComponentFactoryResolver) { }
}
