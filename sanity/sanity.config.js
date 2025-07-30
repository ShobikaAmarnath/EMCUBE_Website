import {defineConfig} from 'sanity'
import deskStructure from './structure/deskStructure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'emcube_cloud',

  projectId: '47l4rrvd',
  dataset: 'production',

  plugins: [
    deskTool({ structure: deskStructure }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
