export type BlProps = {
  events?: Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>
} & Record<string, unknown>;
