declare interface validationType {
    validationMessage: string | null | undefined
    validationState:  "none" | "error" | "warning" | "success" | undefined
}