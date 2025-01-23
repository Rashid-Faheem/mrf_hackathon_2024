import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import user from './user'
import order from './order'
import shipmentTracking from './shipmentTracking'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,user, order, shipmentTracking],
}
