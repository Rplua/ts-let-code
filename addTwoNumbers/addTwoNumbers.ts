// Clase que define un nodo de una lista enlazada
class ListNode {
  val: number              // valor que guarda el nodo
  next: ListNode | null    // referencia al siguiente nodo

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0     // si no me pasan valor, pongo 0
    this.next = next ?? null // si no hay siguiente, pongo null
  }
}

/**
 * Función que suma dos números representados como listas enlazadas
 * l1 y l2 representan números en orden inverso (ej: [2,4,3] = 342)
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0) // nodo falso para empezar
  let cur = dummy               // puntero para ir construyendo la lista resultado
  let carry = 0                 // variable para guardar el acarreo

  // Mientras quede algo en l1, l2 o carry
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Tomamos los valores de los nodos actuales, o 0 si ya no hay
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0

    // Sumamos ambos valores y el carry
    const sum = x + y + carry

    // Creamos un nuevo nodo con el dígito de las unidades
    cur.next = new ListNode(sum % 10)

    // Actualizamos el carry (ej: 15 → carry = 1)
    carry = Math.floor(sum / 10)

    // Avanzamos el puntero de la lista resultado
    cur = cur.next

    // Avanzamos l1 y l2 si existen
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  // Devolvemos la lista resultado (sin el nodo falso inicial)
  return dummy.next
}
