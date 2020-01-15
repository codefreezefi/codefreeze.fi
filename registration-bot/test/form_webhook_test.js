var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var webhook = require('../src/form_webhook');

describe("parseResponses", function () {
    it("no responses", function () {
        expect(webhook.parseResponses([])).to.eql([]);
    });

    it("some responses", function () {
        var responses = [
            {
                question: "Your Name/Nickname",
                answer: "Example",
            },
            {
                question: "Twitter Profile",
                answer: "https://twitter.com/example",
            },
            {
                question: "Code of Conduct",
                answer: ["I accept the Code of Conduct"]
            }
        ];
        expect(webhook.parseResponses(responses)).to.eql([
            {
                name: "Your Name/Nickname",
                value: "Example",
            },
            {
                name: "Twitter Profile",
                value: "https://twitter.com/example",
            },
        ]);
    });
});
