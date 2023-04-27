/** @format */

import 'reflect-metadata';
import { AppDataSource } from './datasource';

import { Confirmation } from './models/confirmation';
import { User, InventoryItem } from './models/user';

export const migrate = async () => {
  await AppDataSource.synchronize();
  const user = new User();
  const password = 'test';
  const { salt, hash } = User.saltNhash(password);
  const sanity = new InventoryItem();
  sanity.qty = 120;
  sanity.name = 'TEST ITEM';
  sanity.user = user;
  sanity.description = 'test';
  user.hash = hash;
  user.salt = salt;
  user.accessLevel = 0;
  user.exp = 0;
  user.blocked = false;
  user.inventory;
  const confirmation = new Confirmation();
  confirmation.text = 'test';
  confirmation.type = 'test';
  confirmation.payload = 'test';
  confirmation.claimed = false;
  confirmation.user = user;
  await AppDataSource.manager.save(user);
  await AppDataSource.manager.save(confirmation);
  await AppDataSource.manager.save(sanity);
  await AppDataSource.destroy();
};

//
