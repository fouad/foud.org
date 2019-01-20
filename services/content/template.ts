export type Template = {
  description: string
  type: string
}

const templates: Template[] = [
  {
    type: 'image',
    description: '{{caption}} by {{author}}'
  }
]

export function getTemplate(type: string) {
  return templates.filter(t => t.type === type)
}

export default getTemplate
