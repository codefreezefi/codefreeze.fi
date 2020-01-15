var POST_URL = "https://localhost";
var GH_TOKEN = 'xxx';
var GH_USERNAME = 'codefreeze-registrations';

function parseResponses(responses) {
    var items = [];
    for (var i = 0; i < responses.length; i++) {
        var response = responses[i];
        var question = response.question;
        var answer = response.answer;
        var parts;
        try {
            parts = answer.match(/[\s\S]{1,1024}/g) || [];
        } catch (e) {
            parts = [];
        }

        if (answer === "") {
            continue;
        }
        for (var j = 0; j < parts.length; j++) {
            if (j === 0) {
                items.push({
                    "name": question,
                    "value": parts[j]
                });
            } else {
                items.push({
                    "name": question.concat(" (cont.)"),
                    "value": parts[j]
                });
            }
        }
    }
    return items;
}

function onSubmit(e) {
    var form = FormApp.getActiveForm();
    var allResponses = form.getResponses();
    var latestResponse = allResponses[allResponses.length - 1];

    var items = parseResponses(latestResponse.getItemResponses().map(function (response) {
        return {
            question: response.getItem().getTitle(),
            answer: response.getResponse(),
        }
    }));

    var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "registrations": items
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
}

if (typeof exports !== 'undefined') {
    exports.parseResponses = parseResponses;
}
