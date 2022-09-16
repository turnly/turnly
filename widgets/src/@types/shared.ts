export type Nullable<T> = T | null
export type EventCallback<P> = (e: CustomEvent<P>) => void
