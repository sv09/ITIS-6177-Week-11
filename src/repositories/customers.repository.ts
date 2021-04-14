import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Customers, CustomersRelations} from '../models';

export class CustomersRepository extends DefaultCrudRepository<
  Customers,
  typeof Customers.prototype.id,
  CustomersRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Customers, dataSource);
  }
}
