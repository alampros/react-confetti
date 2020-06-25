import { IPoint } from '../Point'

export interface IEmitterShape {
  getPoint: () => IPoint;
}

export abstract class EmitterShape implements IEmitterShape {
    abstract getPoint(): IPoint
}
