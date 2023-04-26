const formatJsonResponse = require("./JsonResponseService");

describe('formatJsonResponse', () => {
    test('msg, statusCode and data displayed correctly', () => {
        expect(formatJsonResponse('it worked', [], 200)).toStrictEqual({
            "message": "it worked",
            "data": [],
            "status": 200
        })
    })

    test('checks return type is object', () => {
        let res = formatJsonResponse('hello')
        expect(typeof res).toBe('object')
    })
})