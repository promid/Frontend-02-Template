import assert from 'assert'
import {add, mul} from '../add'

describe("add func testing", function() {
    it('1+2 should be 3', function(){
        assert.equal(add(1,2), 3)
    })
})

describe("mul func testing", function() {
    it('1*2 should be 2', function(){
        assert.equal(mul(1,2), 2)
    })
})
