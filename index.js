export class IceCube {
    #obj
    constructor(obj, options) {
        this.#obj = obj
        this.#validate()

        this.#obj.iced = options?.iced ?? true

        return this.#getProxy()
    }
    #validate() {
        if (typeof this.#obj !== 'object')
            throw new Error('Iced can only be used with objects...')

        if (this.#obj['iced'] !== undefined)
            throw new Error('You cannot pre-set the iced property into Iced: this is an Iced reserved keyword.')
    }
    #getProxy() {
        return new Proxy(this.#obj, {
            set(obj, prop, value) {
                if (obj.iced && prop !== 'iced')
                    throw new Error('This object is iced: you cannot edit any value. To edit, set the "iced" property to false.')
                obj[prop] = value
                return true
            }
        })
    }
}
