import {Entity, model, property} from '@loopback/repository';

@model()
export class Customers extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  customerName: string;

  @property({
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;


  constructor(data?: Partial<Customers>) {
    super(data);
  }
}

export interface CustomersRelations {
  // describe navigational properties here
}

export type CustomersWithRelations = Customers & CustomersRelations;
