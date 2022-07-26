// cspell:word supertape

import { test } from 'supertape'
import { IceCube } from './index.js'

function getError(func, t) {
    try {
        func()
        t.fail('No error.')
    } catch(e) {
        return e.message
    }
}

test('initialization: validate error', (t) => {
    const fail = () => new IceCube(1234)
    t.equal(getError(fail, t), 'Iced can only be used with objects...')
    t.end()
})

test('initialization: "iced" preset', (t) => {
    const fail = () => new IceCube({ iced: true })
    t.equal(
        getError(fail, t),
        'You cannot pre-set the iced property into Iced: this is an Iced reserved keyword.'
    )
    t.end()
})

test('options: iced (default)', (t) => {
    const obj = new IceCube({})
    t.equal(obj.iced, true)
})

test('options: iced = false', (t) => {
    const obj = new IceCube({}, { iced: false })
    t.equal(obj.iced, false)
})

test('object: read properties while iced', (t) => {
    const obj = new IceCube({ test: true })
    t.equal(obj.test, true)
    t.end()
})

test('object: read properties while not iced', (t) => {
    const obj = new IceCube({ test: true })
    obj.iced = false
    t.equal(obj.test, true)
    t.end()
})

test('object: error on edit when iced', (t) => {
    const obj = new IceCube({ test: true })
    const fail = () => obj.test = false
    t.equal(
        getError(fail, t),
        'This object is iced: you cannot edit any value. To edit, set the "iced" property to false.'
    )
    t.end()
})

test('object: success on edit when not iced', (t) => {
    const obj = new IceCube({ test: true })
    obj.iced = false
    obj.test = false
    t.equal(obj.test, false)
    t.end()
})
