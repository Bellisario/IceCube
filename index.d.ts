interface Options {
    /**
     * Specifies if the object begins iced or not.
     * 
     * @default true
     */
    readonly iced: boolean;
}

/**
 * Creates a new instance of the `IceCube` class.
 * 
 * @example
 * ```
 * const obj = new IceCube({ test: true });
 * obj.test; // true
 * obj.test = false; // throws error
 * obj.iced = false; // disables freezing
 * obj.test = false; // succeeds
 * obj.test; // false
 * ```
 */
export class IceCube {
    /**
     * `iced` controls whether or not the object is frozen.
     * 
     * @default true
     */
    iced: boolean;
    [key: string | number | symbol]: any;
    constructor(obj: object, options?: Options);
}
