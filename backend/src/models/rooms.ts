import { Entity, Schema, Repository, Client } from "redis-om";

import { redis } from "../db";

 export interface RoomsEntity {
  title: string;
  description?: string;
  room_id:string;
  channel_id: string;
  created_at: string;
}

export class RoomsEntity extends Entity {
 
}

const RoomsSchema = new Schema(RoomsEntity, {
  channel_id: { type: "string" },
  title: { type: "text", sortable: true },
  description: { type: "text", sortable: true },
  owner_id: { type: "string" },
  moderators: { type: "string[]" },
  isPublic: { type: "boolean" },
  channel_picture: { type: "string" },
  channel_cover: { type: "string" },
  created_at: { type: "date", sortable: true },
  members: { type: "string[]" },
});

export const  RoomsRepo = (async () => {
  const clientOM = await new Client().use(redis);
  return clientOM.fetchRepository(RoomsSchema);
})();
