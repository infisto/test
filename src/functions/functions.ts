import { ICurrency } from '@/interfaces/Interface'
export function fromObjectToArray (object: ICurrency): any[] {
  const keys = Object.keys(object)
  return keys.map((el: any): any => {
    return object[el]
  })
}
