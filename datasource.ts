/** @format */

import { DataSource } from 'typeorm';
import { Confirmation } from './models/confirmation';
import { InventoryItem, Mark, User } from './models/user';
import { Chat, ChatRoom } from './models/chat';
import { Game } from './models/game';
import * as config from '../config';
import { Adventure } from './models/adventure';

export const AppDataSource = new DataSource({
  type: config.dbType,
  database: config.dbconf.database,
  host: config.dbconf.host,
  password: config.dbconf.password,
  port: config.dbconf.port,
  // debug: true,
  username: config.dbconf.user,
  entities: [
    User,
    Confirmation,
    Chat,
    ChatRoom,
    Game,
    Adventure,
    Mark,
    InventoryItem,
  ],
});
